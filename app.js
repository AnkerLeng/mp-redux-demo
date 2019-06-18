import WeAppRedux from './redux/index.js';
import createStore from './redux/createStore.js';
import reducer from './store/reducer.js';


const {
  Provider
} = WeAppRedux;
const store = createStore(reducer) // redux store

App(
  Provider(store)({
    globalData: {},
    onShow: function(e) {},
    onLaunch: function(e) {

    }
  })
)