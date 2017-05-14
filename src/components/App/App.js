import { version } from 'inferno';
import Component from 'inferno-component';
import { bindActionCreators } from 'redux'
import * as actionCreators from '../../actions/actionCreators'
import { Link } from 'inferno-router';
import { connect } from 'inferno-redux';
import Logo from './logo';
import styles from './App.module.css';

class App extends Component {

  displayData = () => {
    const dataStore = this.context.store.getState();
    console.log(dataStore);
    const data = dataStore.userReducer.users.map(user => {
      console.log(user.name);
    });
  }

  render() {
    const store = this.context.store;
    const state = store.getState();

    const onClick = e => {
        e.preventDefault();
        store.dispatch({
            type: 'GET_USERS'
        });
    };

    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <Logo width="80" height="80" />
          <h2>{`Welcome to Inferno ${version}`}</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload. <Link to="/page-not-found">404 link</Link>
        </p>
        <button onClick={onClick}>Get users</button>
        <button onClick={this.displayData}>Test display data</button>
        {this.props.children}
      </div>
    );
  }
}

// make state available in props
function mapStateToProps(state){
	return {
		users: state.users,
	}
}

// make action creators available in props
function mapDispatchToProps(dispatch){
	return bindActionCreators(actionCreators, dispatch)
}

// connect action creators + state in the App component
export default connect(mapStateToProps, mapDispatchToProps)(App);
