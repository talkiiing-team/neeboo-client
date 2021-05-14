import { computed } from 'vue';
import { useStore } from 'vuex';

/**
 * @callback unitCallback
 * @param {string} value
 * @returns {*}
 */

/**
 * @param keys {Array<string>}
 * @param callback {unitCallback}
 */
function keysToObject(keys, callback) {
  return Object.fromEntries(keys.map((v) => [v, callback(v)]));
}

/**
 * @param keys {Array<string>}
 */
export function useState(keys) {
  const { state } = useStore();
  return keysToObject(keys, (v) => computed(() => state[v]));
}

/**
 * @param keys {Array<string>}
 */
export function useGetters(keys) {
  const { getters } = useStore();
  return keysToObject(keys, (v) => computed(() => getters[v]));
}

/**
 * @param keys {Array<string>}
 */
export function useMutations(keys) {
  const { commit } = useStore();
  return keysToObject(keys, (v) => (...args) => commit(v, ...args));
}

/**
 * @param keys {Array<string>}
 */
export function useActions(keys) {
  const { dispatch } = useStore();
  return keysToObject(keys, (v) => (...args) => dispatch(v, ...args));
}

export {
  stateMap, gettersMap, mutationsMap, actionsMap, default,
} from './store';
