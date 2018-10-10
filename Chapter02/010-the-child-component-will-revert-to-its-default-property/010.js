Vue.component('custom-article', {
  props: {
    message: {
      type: String,
      required: true,
      default: 'Hello Vue'
    }
  },
  template: `<div class="thetemplate">{{ message }}</div>`
});

new Vue({
  el: "#app",
  data: function() {
    return {
      datacontent: undefined
    }
  }
})