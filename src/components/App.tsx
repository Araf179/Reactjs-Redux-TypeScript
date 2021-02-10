import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoresList from './RepositoriesList';

const App = () => {
  return <Provider store={store}>
            <div>
              <h1>Search for a package</h1>
              <RepositoresList />
            </div>
          </Provider>;
};

export default App;
