new Vue({
  el: "#app",
  data: { 
    clapCount: false
  },
  methods: {
    beforeEnter: function(el) {
      el.style.opacity = 0
    },
        enter: function (el, done) {
      Velocity(el, { opacity: 1, fontSize: '1.4em' }, { duration: 300 })
      Velocity(el, { fontSize: '1em' }, { complete: done })
    },
    leave: function (el, done) {
      Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 })
      Velocity(el, { rotateZ: '100deg' }, { loop: 2 })
      Velocity(el, {
        rotateZ: '45deg',
        translateY: '30px',
        translateX: '30px',
        opacity: 0
      }, { complete: done })},
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