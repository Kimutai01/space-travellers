import { Provider } from 'react-redux';
import TestRenderer from 'react-test-renderer';
import MyProfile from '../components/MyProfile';
import store from '../app/store';

test('My profile component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>,
  );
  expect(TREE).toMatchSnapshot();
});
