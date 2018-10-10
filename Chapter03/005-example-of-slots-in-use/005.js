Vue.component("basicComponent", {
  template: `
<div>
<slot name="firstSlot"></slot>
<slot name="secondSlot"></slot>
<slot>This is some default information</slot>
</div>
`
});

new Vue({
  el: "#app",
  template: `
<basicComponent>
<p slot="firstSlot">This content will populate the slot named 'firstSlot' in the 'basicComponent' template</p>

<p slot="secondSlot">This content will populate the slot named 'secondSlot' in the 'basicComponent' template</p>

</basicComponent>
`
});