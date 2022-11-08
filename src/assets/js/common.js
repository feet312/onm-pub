const methods = {
  test: (a) => {
    alert(a)
    // a = !a
    
    if(a === false){
      
      a = true
      alert('ss')
    } else{
      a = false
    }
    
  }
}



export default {
  install(Vue) {
    Vue.prototype.$test = methods.test
  }
}