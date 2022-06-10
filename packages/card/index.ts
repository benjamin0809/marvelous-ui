import MlCard from './src/card.vue'
MlCard.install = (Vue: { component: (arg0: any, arg1: any) => void }) => {
  Vue.component(MlCard.name, MlCard)
}

export default MlCard
