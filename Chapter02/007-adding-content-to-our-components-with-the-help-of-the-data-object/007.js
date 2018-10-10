Vue.component('custom-article', {
    props: ['content'],
    template: '<article>{{content}}</article>'
})
new Vue({
    el: '#app',
    data: {
        datacontent: 'This component was made with the help of a data object in the Vue instance'
    }
})  