var example = new Vue({
  el: '#example',
  data: {
    ownerName: 'e.g Old McDonald',
    thing: 'e.g cow'
  },
  watch: {
    ownerName(currentValue, previousValue) {
      console.log(`The value in the first input has changed from: ${previousValue} to: ${currentValue}`);
    }
  },
  computed: {
    // a computed getter
    ownerHasThing: function () {
      // `this` points to the Vue instance's data option
      return this.ownerName + " " + this.thing
    }
  }
})