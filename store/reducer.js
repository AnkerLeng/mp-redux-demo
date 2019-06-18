import {INITIAL_STATE} from './store.js'
let app = getApp()
let indexReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    //测试数据
    case 'INCREMENT':{
      console.log('123', action.payload)
      return Object.assign({}, state, {
        num: action.payload
      })}
    case 'DECREMENT': {
      console.log('456', action.payload)
      return Object.assign({}, state, {  
        num: action.payload
      })
    }
    default:
      return state
  }
}

export default indexReducer
