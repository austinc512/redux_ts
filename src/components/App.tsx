import { Provider } from 'react-redux';
import { store } from '../state';
import PKGsList from './PKGsList';
import '../index.css'

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>NPM Package Search</h1>
        <PKGsList />
      </div>
    </Provider>
  );
}
