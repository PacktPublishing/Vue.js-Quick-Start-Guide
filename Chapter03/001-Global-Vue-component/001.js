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
  beforeCreate() {
    alert("Lifecycle hook beforeCreate has been run");
  },
  created() {
    setTimeout(function(){
      alert('This message is showing 5 seconds after the \'created\' lifecycle hook');
    },5000);
  },
  data: function() {
    return {
      datacontent: 'This component was made with the help of a data function in the Vue component called custom-article, and the data passed was validated with the help of the props object inside the Vue component'
    }
  }
});