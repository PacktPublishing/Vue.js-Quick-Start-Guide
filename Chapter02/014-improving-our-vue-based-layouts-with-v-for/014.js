//Register main title component
Vue.component("main-title-component", {
 template: '<h1 class="text-center mt-5 mb-4">{{title}}</h1>',
 data: function() {
   return {
     title: "Just another title"
   };
 }
});

//Register list group component
Vue.component("list-group-component", {
 template: `
   <ul class="list-group">
     <li class="list-group-item" v-for="item in items">{{item.description}}</li>
   </ul>`,
 data: function() {
   return {
     items: [
       {
         description: "Description one"
       },
       {
         description: "Description two"
       },
       {
         description: "Description three"
       }
     ]
   };
  }
});

// Register card component
Vue.component("card-component", {
 template: `
   <div class="card">
     <div class="card-body">
       <h5 class="card-title">{{title}}</h5>
       <p class="card-text">{{text}}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
     </div>
   </div>`,
 data: function() {
   return {
     title: "This is the card title",
     text: "This is the card text"
   };
 }
});

//Root Instance
new Vue({
  el: '#app',
  data: {}
})