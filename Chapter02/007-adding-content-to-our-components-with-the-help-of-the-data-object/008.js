Vue.component('custom-article', {
    template: '<article>{{datacontent}}</article>',
    data: function () {
        return {
            datacontent: 'This component was made with the help of a data function in the Vue component called custom-article'
        }
    }
})
new Vue({
    el: '#app'
})