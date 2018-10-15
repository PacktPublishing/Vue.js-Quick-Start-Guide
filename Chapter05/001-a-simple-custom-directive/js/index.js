Vue.directive('customDirective', {
  inserted: function(el) {
    el.style.cssText = `
      color: blue; 
      border: 1px solid black; 
      background: gray; 
      padding: 20px; 
      width: 50%;
    `
  }
});

new Vue({
  el: '#app',
  data() {
    return {
      heading: 'A custom global directive'
    }
  }
});