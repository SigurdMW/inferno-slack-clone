import { render } from 'inferno';
import AppRoutes from './components/AppRoutes/AppRoutes';
import './index.css';

// enable react devtools for inferno
import * as devtools from 'inferno-devtools';

render(<AppRoutes />, document.getElementById('app'));
