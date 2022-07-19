import _ from 'lodash'
import Navigation from './navigation'
import withStatusBar from '~components/hocs/withStatusBar'
import withThemeProvider from '~components/hocs/withThemeProvider'

const App = _.flowRight(withThemeProvider, withStatusBar)(Navigation)

export default App
