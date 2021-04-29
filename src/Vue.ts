import { Tools } from './Tools';

export default {
  install( Vue: any ) {
    Vue.prototype.$tools = new Tools();
  }
};