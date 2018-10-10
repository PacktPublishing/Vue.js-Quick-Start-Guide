new Vue({
  el: "#app",
  data() {
    return {
      firstName: "JANE",
      lastName: "DOE",
      yearOfStudy: 1, 
      points: 84.44,
      additionalPoints: 8
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
    },
    yearNumberToWord(yearOfStudy){
      // freshman 1, sophomore 2, junior 3, senior 4 
      if(yearOfStudy==1) {
        return "freshman"
      } else if(yearOfStudy==2){
        return "sophomore"
      } else if(yearOfStudy==3){
        return "junior"
      } else if(yearOfStudy==4){
        return "senior"
      } else {
        return "unknown"
      }
    },
    firstAndLastName(firstName, lastName){
      return lastName + ", " + firstName
    },
    toLowerCase(value){
      return value.toLowerCase()
    },
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
  }
});