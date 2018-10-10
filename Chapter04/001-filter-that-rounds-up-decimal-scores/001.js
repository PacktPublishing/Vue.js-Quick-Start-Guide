new Vue({
  el: "#app",
  data() {
    return {
      points: 74.44
    }
  },
  filters: {
    pointsRoundedUp(points){
      return Math.ceil(parseFloat(points));
    }
  }
});
