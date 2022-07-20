import MyProfile from '../components/MyProfile';
import { Provider } from 'react-redux';
import store from '../app/store';
import TestRenderer from 'react-test-renderer';
test('My profile component testing', () => {
  const TREE = TestRenderer.create(
    <Provider store={store}>
      <MyProfile />
    </Provider>
  );
  expect(TREE).toMatchSnapshot();
});
