const viewportSize = {
    data(){
      return {
        viewport: {
          width: 0,
          height: 0
        }
      }
    },
    methods: {
      getViewportSize(){
        this.viewport.width = window.innerWidth;
        this.viewport.height = window.innerHeight;
      },
      logOutViewportSize(){
        console.log("Viewport width:", this.viewport.width, "px, viewport height:", this.viewport.height, "px");
      },
      alertViewPortSize() {
        alert("Viewport width: " +  this.viewport.width + " px, viewport height: " +  this.viewport.height + " px");
      }
  },
  created() {
    this.listener = window.addEventListener('mousemove', this.getViewportSize);
    this.getViewportSize();
  }
}
const primaryAlert = {
  template: `
    <div class="alert alert-primary" role="alert" v-on:click="alertViewPortSize">
      A simple primary alert—check it out!
    </div>`,
  mixins: [viewportSize]
}
const warningAlert = {
  template: `
    <div class="alert alert-warning" role="alert" v-on:mouseenter="logOutViewportSize">
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