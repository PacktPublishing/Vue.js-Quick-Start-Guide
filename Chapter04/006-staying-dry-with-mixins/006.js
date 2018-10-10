const viewportSize = {
    methods: {
      viewportSizeOnClick(){
        const width = window.innerWidth;
        const height = window.innerHeight;
        console.log("Viewport width:", width, "px, viewport height:", height, "px");
      }
  }  
}
const primaryAlert = {
  template: `
    <div class="alert alert-primary" role="alert" v-on:click="viewportSizeOnClick">
      A simple primary alert—check it out!
    </div>`,
  mixins: [viewportSize]
}
const warningAlert = {
  template: `
    <div class="alert alert-warning" role="alert" v-on:mouseenter="viewportSizeOnClick">
      A simple warning alert—check it out!
    </div>`,
  mixins: [viewportSize]
}
new Vue({
  el: '#app',
  data() {
    return {
      heading: 'Extracting reusable functionality into mixins in Vue'
    }
  },
  components: {
    primaryAlert: primaryAlert,
    warningAlert: warningAlert
  }
})