import { createPinia } from 'pinia';
import piniaPluginPersistedstate, {
  createPersistedState,
} from 'pinia-plugin-persistedstate';

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate);
pinia.use(
  createPersistedState({
    storage: localStorage,
  })
);
export default pinia;
