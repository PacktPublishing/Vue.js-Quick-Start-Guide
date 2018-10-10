Vue.component('the-header', {
  template: '<h1 class="header css classes go here">Our example header</h1>'
})

Vue.component('the-footer', {
  template: '<h4 class="footer classes go here">Our example footer</h4>'
})

//Root Instance
new Vue({
  el: '#app',
  data: {}
})