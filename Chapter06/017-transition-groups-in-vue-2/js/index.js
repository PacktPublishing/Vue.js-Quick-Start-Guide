new Vue({
  el: "#app",
  data: { 
    clapCount: false
  },
  methods: {
    aClap() {
      var target = document.querySelector('.fa-thumbs-o-up');
      if (!target.classList.contains('wobble')) {
        target.classList.add('wobble');
      }
      setTimeout(function() {
        target.classList.remove('wobble')}, 300
      )
      if (this.clapCount < 10) {
        this.clapCount++
      } else {
        target.classList.remove('orange','wobble')
      }
    }
  }
});