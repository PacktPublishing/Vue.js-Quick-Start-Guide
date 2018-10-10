Vue.component('custom-article', {
  template: '#custom-article-template',
  props: ['name']
})
new Vue({
    el: '#app',
    name: 'Some content'
})