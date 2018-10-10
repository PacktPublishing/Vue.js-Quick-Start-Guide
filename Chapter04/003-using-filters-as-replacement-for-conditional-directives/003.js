new Vue({
  el: "#app",
  data() {
    return {
      points: 84.44
    }
  },
  filters: {
    pointsRoundedUp(points){
      return Math.ceil(parseFloat(points));
    },
    pointsToGrade(points){
      if(points>90) {
        return "A"
      }
      else if(points>80 && points<90) {
        return "B"
      }
      else if(points>70 && points<80) {
        return "C"
      }
      else if(points>60 && points<70) {
        return "D"
      }
      else if(points>50 && points<60) {
        return "E"
      }
      else {
        return "F"
      }
    }
  }
});
