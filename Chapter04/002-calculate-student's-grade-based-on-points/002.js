new Vue({
  el: "#app",
  data() {
    return {
      points: 94.44
    }
  },
  filters: {
    pointsRoundedUp(points){
      return Math.ceil(parseFloat(points));
    }
  }
});
