import _ from 'lodash'
import Navigation from './navigation'
import withStatusBar from './components/hocs/withStatusBar'

const App = _.flowRight(withStatusBar)(Navigation)

export default App
