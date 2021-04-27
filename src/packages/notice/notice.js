import Vue from 'vue' 
import Notice from './notice.vue'

Notice.newInstance = (properties) => {
  let props = properties || {}
  console.log(props);
  const Instance = new Vue({
    render(h) {
      return h(Notice, {
        props
      })
    }
  });
  console.log(Instance);

  const component = Instance.$mount()
  //console.log(component);
  document.body.appendChild(component.$el)

  const notice = component.$children[0]
  //console.log(notice);
  console.log(123);

  return {
    add(_notice) {
      notice.add(_notice)
    }, 
    remove(id) {

    }
  }
}
//console.log(Notice);
let noticeInstance;
const notice = function(_notice) {
    noticeInstance = noticeInstance || Notice.newInstance(_notice)
    noticeInstance.add(_notice)

}
export default notice;



/* let noticeConstruct = Vue.extend(Notice); //组件变成一个构造函数
let noticeInstance; //定义一个实例化对象
let noticeArr = [];
const notice = function(options = {}) {
    noticeInstance = new noticeConstruct({
        props:options
    }).$mount(); //渲染组件
    document.body.appendChild(noticeInstance.$el); //挂载到body下
};
export default notice; */