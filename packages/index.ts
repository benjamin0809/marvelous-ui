import Button from './button/index'
import Input from './input/index'
import Card from './card/index'

export * from './button/index'
export * from './input/index'
export * from './card/index'

// export { default as MlButton } from './button/index'
// export { default as MlInput } from './input/index'
// export { default as MlCard } from './card/index'
const Ml_UI = {
  install: (Vue: any) => {
    Button.install(Vue)
    Input.install(Vue)
    Card.install(Vue)
  },
}
export default Ml_UI
