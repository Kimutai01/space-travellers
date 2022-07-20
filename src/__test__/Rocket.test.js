import Rocket from '../components/Rocket';
import { Provider } from 'react-redux';
import store from '../app/store';
import TestRenderer from 'react-test-renderer';
test('Rocket component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Rocket />
    </Provider>
  );
  expect(TREE).toMatchSnapshot();
});
