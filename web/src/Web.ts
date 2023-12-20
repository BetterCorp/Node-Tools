import { Tools } from "../../lite/src/Tools";

module.exports = {
  Vue: {
    install(Vue: any, toolsInstance: typeof Tools = Tools) {
      Vue.prototype.$tools = new toolsInstance();
    },
  },
  inIframe(): boolean {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  },
};
