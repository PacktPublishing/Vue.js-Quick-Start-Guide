var customArticle = {
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
      <custom-article></custom-article>
    </article>`,
    components: {
      'customArticle': customArticle
    }
})
new Vue({
    el: '#app',
    components: { 
      'customArticle': customArticle
    }
})