import { createStore } from 'vuex';
import axios from './axios';

export const stateMap = {
  user: 'user',
};

export const gettersMap = {};

export const mutationsMap = {
  setUser: 'setUser',
};

export const actionsMap = {
  authenticate: 'authenticate',
  logout: 'logout',
  attemptToAuthenticate: 'attemptToAuthenticate',
  register: 'register',
};

const store = createStore({
  state: () => ({
    [stateMap.user]: {},
  }),

  mutations: {
    [mutationsMap.setUser](state, payload) {
      state.user = payload;
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
      type,
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
        type,
      });
      if (status !== 201) {
        throw new Error('Error during registration');
      }
      return data;
    },
  },
});

export default store;
