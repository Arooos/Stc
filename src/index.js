import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux';
const rootPath = document.getElementById('root')
const root = ReactDOM.createRoot(rootPath);
root.render(
  <Provider store={store}>
    <App/>
  </Provider>,
)
