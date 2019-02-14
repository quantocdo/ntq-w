import ect from 'ect'
import path from 'path'

import config from 'infrastructure/config'

export default app => {
  const viewDir = path.resolve(config._root, 'views')

  const engine = ect({
    watch: true,
    root: viewDir,
    ext: '.ect'
  })

  app.set('view engine', 'ect')
  app.set('views', viewDir)
  app.engine('ect', engine.render)
}
