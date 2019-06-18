import {
  connect
} from '../../redux/index.js'
const app = getApp()
let store = app.store

const pageConfig = {
  data: {
    num: 10
  },
  onLoad() {
    console.log('onload')
  },
  onShow(){
    console.log('onShow')
  },
  plusOne(){
    let num = this.data.num + 1
    store.dispatch({
      type: 'INCREMENT',
      payload: num
    })
  },
  minusOne(){
    let num = this.data.num - 1
    store.dispatch({
      type: 'DECREMENT',
      payload: num
    })
  }
}
const mapStateToData = (state) => {
  return {
    num: state.num
  }
}
const mapDispatchToPage = (dispatch) => ({})
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig)