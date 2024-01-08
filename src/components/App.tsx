import { Provider } from 'react-redux';
import { store } from '../state';
import PKGsList from './PKGsList';

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For a Package</h1>
        <PKGsList />
      </div>
    </Provider>
  );
}
