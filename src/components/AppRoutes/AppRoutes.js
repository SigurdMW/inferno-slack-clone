import { Router, Route, IndexRoute } from 'inferno-router';
import createBrowserHistory from 'history/createBrowserHistory';
import { Provider } from 'inferno-redux'
import store from '../../store'

//components
import App from '../App/App';
import Home from '../Home/Home';

// create the browser history object
const browserHistory = createBrowserHistory();

// the AppRoutes component
const AppRoutes = (props) => {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
        </Route>
      </Router>
    </Provider>
  )
}

export default AppRoutes;
