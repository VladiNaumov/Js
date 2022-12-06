import {Site} from './site'

export class App {
  constructor(model) {
    this.model = model
  }

  init() {
    const site = new Site('#site')

    site.render(this.model)
 
  
  }
}