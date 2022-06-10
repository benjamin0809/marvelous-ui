import Button from './button/index'
import Input from './input/index'

export * from './button/index'
export * from './input/index'

const Ml_UI = {
  install: (Vue: any) => {
    Button.install(Vue)
    Input.install(Vue)
  },
}
export default Ml_UI
