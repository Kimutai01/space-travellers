import Missions from '../components/Missions';
import { Provider } from 'react-redux';
import store from '../app/store';
import TestRenderer from 'react-test-renderer';
test('Mission component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <Missions />
    </Provider>
  );
  expect(TREE).toMatchSnapshot();
});
