import MlButton from "./src/button.vue";

MlButton.install = Vue => {
  Vue.component(MlButton.name, MlButton);
};

export default MlButton;
