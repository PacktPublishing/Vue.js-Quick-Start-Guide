Vue.component('custom-article', {
    props: ['content'],
    template: '<article>{{content}}</article>'
})
new Vue({
    el: '#app',
})