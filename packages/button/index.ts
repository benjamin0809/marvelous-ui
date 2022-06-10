import MlButton from './src/button.vue'
MlButton.install = (Vue: { component: (arg0: any, arg1: any) => void }) => {
  Vue.component(MlButton.name, MlButton)
}

export default MlButton
