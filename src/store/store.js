import { createStore } from 'vuex';
import axios from './axios';

export const stateMap = {
  user: 'user',
  wallets: 'wallets',
};

export const gettersMap = {};

export const mutationsMap = {
  setUser: 'setUser',
  setWallets: 'setWallets',
};

export const actionsMap = {
  authenticate: 'authenticate',
  logout: 'logout',
  attemptToAuthenticate: 'attemptToAuthenticate',
  register: 'register',
  createWallet: 'createWallet',
  fetchWallets: 'fetchWallets',
  createToken: 'createToken',
};

const store = createStore({
  state: () => ({
    [stateMap.user]: null,
    [stateMap.wallets]: [],
  }),

  mutations: {
    [mutationsMap.setUser](state, payload) {
      state.user = payload;
    },
    [mutationsMap.setWallets](state, payload) {
      state.wallets = payload;
    },
  },

  actions: {
    async [actionsMap.authenticate]({ commit }, authData) {
      try {
        const {
          data,
          status,
        } = await axios.post('/authentication', {
          strategy: 'local',
          ...authData,
        });
        if (status === 201) {
          const {
            user,
            accessToken,
          } = data;
          commit(mutationsMap.setUser, user);
          localStorage.setItem('token', accessToken);
          axios.defaults.headers.authorization = `Bearer ${accessToken}`;
        }
      } catch (e) {
        console.log('Unauthenticated');
      }
    },

    [actionsMap.logout]({ commit }) {
      commit(mutationsMap.setUser, null);
      axios.defaults.headers.authorization = undefined;
    },

    async [actionsMap.attemptToAuthenticate]({ dispatch }) {
      const accessToken = localStorage.getItem('token');
      if (!accessToken) {
        return;
      }
      await dispatch(actionsMap.authenticate, {
        strategy: 'jwt',
        accessToken,
      });
    },

    async [actionsMap.register](_, {
      fullName,
      registrationDate,
      mainRegisterNumber,
      registrationCompany,
      regpaperNumb,
      email,
      password,
      form,
    }) {
      const {
        data,
        status,
      } = await axios.post('/users', {
        fullName,
        personalData: {
          regpaperNumb,
          registrationCompany,
          mainRegisterNumber,
          registrationDate,
        },
        email,
        password,
        form,
      });
      if (status !== 201) {
        throw new Error('Error during registration');
      }
      return data;
    },

    async [actionsMap.createWallet](_, walletData) {
      const {
        data,
        status,
      } = await axios.post('/wallet', walletData);
      if (status !== 201) {
        throw new Error('Error during creating wallet');
      }
      return data;
    },

    async [actionsMap.fetchWallets]({ state, commit }) {
      const {
        data,
        status,
        // eslint-disable-next-line no-underscore-dangle
      } = await axios.get(`/wallet?ownerId=${state.user._id}`);
      console.log(data);
      if (status !== 200) {
        throw new Error('Error during fetching wallets');
      }
      commit(mutationsMap.setWallets, data.data);
      return data.data;
    },

    async [actionsMap.createToken](_, data) {
      await axios.post('/asset-request', data);
    },
  },
});

export default store;
