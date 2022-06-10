import MlInput from './src/input.vue'
MlInput.install = (Vue: { component: (arg0: any, arg1: any) => void }) => {
  Vue.component(MlInput.name, MlInput)
}

export default MlInput