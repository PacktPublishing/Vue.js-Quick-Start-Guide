Vue.directive('buttonize', {
  bind(el, binding) {
    var exp = binding.expression;
    el.style.cssText += `
      padding: 10px 20px; 
      border: none; 
      border-radius: 3px; 
      cursor: pointer
    `;
    switch(exp) {
      case 'tomato':
          el.style.cssText += `
            background: tomato;
            color: white;
          `;
          break;
       case 'lightgoldenrod':
          el.style.cssText += `
            background: darkgoldenrod;
            color: lightgoldenrod;
          `;
          break;
        default:
            el.style.cssText += `
              background: gray;
              color: white;
            `
    }
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