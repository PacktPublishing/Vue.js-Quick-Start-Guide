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
      datacontent: 'This component was made with the help of a data function in the Vue component called custom-article, and the data passed was validated with the help of the props object inside the Vue component'
    }
  }
})