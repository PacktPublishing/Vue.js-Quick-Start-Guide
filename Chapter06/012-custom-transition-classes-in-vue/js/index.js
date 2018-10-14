Vue.component('customComponent', {
  template: `
    <button>Lorem ipsum</button>
  `
});
new Vue({
  el: '#app',
  data: {
    show: false
  }
});