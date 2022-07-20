import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Rocket from '../components/Rocket';
import store from '../app/store';

test('Rocket component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Rocket />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
