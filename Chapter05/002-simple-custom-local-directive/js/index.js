const anotherCustom = {
  inserted: function(el) {
    el.style.cssText = `
      color: green; 
      border: 1px solid black; 
      background: yellow; 
      padding: 20px; 
      width: 50%;
    `      
  }
}
const customArticle = {
  template: `
    <article>
      Our own custom article component!
    </article>`
}
Vue.component('another-custom-article', {
  template: `
    <article>
      Another custom article component! 
      This one has it's own child component too!
      Here it is:
      <custom-article v-custom-directive></custom-article>
    </article>`,
    components: {
      'customArticle': customArticle
    },
    directives: {
      customDirective: {
        inserted: function(el) {
          el.style.cssText = `
            color: blue; 
            border: 1px solid black; 
            background: gray; 
            padding: 20px; 
            width: 50%;
          `      
      }
    } 
  }  
})
new Vue({
    el: '#app',
    components: { 
      'customArticle': customArticle,
    },
    directives: {
      customDirective: {
        inserted: function(el) {
          el.style.cssText = `
            color: blue; 
            border: 1px solid black; 
            background: gray; 
            padding: 20px; 
            width: 50%;
          `      
       }
     },
     'anotherCustom': anotherCustom
  }
})