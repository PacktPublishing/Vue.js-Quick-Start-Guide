Vue.component('the-header', {
  template: '<h1 class="h1 text-success">{{header}}</h1>',
  data: function() {
    return {
      header: 'Just another simple header'
    }
  }
});

Vue.component('the-card', {
  template: '<div class="card"><div class="card-body"><h5 class="card-title">Special title treatment</h5><p class="card-text">With supporting text below as a natural lead-in to addtional content.</p><a href="#" class="btn btn-primary">Go somewhere</a></div></div></div>',
});

//Root Instance
new Vue({
  el: '#app',
  data: {}
})