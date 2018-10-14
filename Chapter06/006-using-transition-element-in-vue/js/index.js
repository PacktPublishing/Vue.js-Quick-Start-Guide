Vue.component('customComponent', {
  template: `
    <button>Hover me!</button>
  `
});
new Vue({
  el: '#app',
  data: {
    show: true
  }
});