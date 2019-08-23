import configReducer from './reducer'
import saga from './saga'
// import {useReducerAndSaga} from '../utils/hooks'
import createSharedState from '../utils/hooks'
const store = createSharedState(
  ...configReducer,
  saga
);
export default store;
// const sharedStore = () => {
// }
// export default sharedStore