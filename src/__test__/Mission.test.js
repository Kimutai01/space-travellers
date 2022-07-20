import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import Missions from '../components/Missions';
import store from '../app/store';

test('Mission component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
