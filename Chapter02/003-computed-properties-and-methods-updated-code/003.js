var example = new Vue({
    el: '#example',
    data: {
      ownerName: '',
      thing: ''
    },
    computed: {
      // a computed getter
      ownerHasThing: function () {
        // `this` points to the Vue instance's data option
        return this.ownerName + " has a " + this.thing
      }
    }
  })
  