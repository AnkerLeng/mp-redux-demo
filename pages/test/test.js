import {
  connect
} from '../../redux/index.js'
const app = getApp()
let store = app.store

const pageConfig = {
  data: {
    num:0
  },
  onLoad() {
    let that = this
    setInterval(function callback(){
      let num = that.data.num + 1
      console.log()
      store.dispatch({
        type: 'INCREMENT',
        payload: num 
      })
    }, 1000)
    console.log('onload')
  },
  onShow() {
    console.log('onShow')
  },
}
const mapStateToData = (state) => {
  return {
    num: state.num
  }
}
const mapDispatchToPage = (dispatch) => ({})
const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig)