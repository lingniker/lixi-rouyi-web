// import { App } from 'vue'
import Button from './index.vue'

Button.install = (app) => {
  app.component(Button.name, Button)
}

export default Button;
