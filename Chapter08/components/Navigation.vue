<template>
  <div class="navigation">
    <ul>
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/news">News</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>        
    </ul>
  </div>
</template>

<style scoped>
.navigation {
    width: 100%;
    margin: 0;
    padding: 20px;
    background: orange;
    color: #444;
    font-family: Arial, sans-serif;
    font-size: 20px;
}
ul {
    list-style: none;
}
ul li {
    display: inline-block;
}
</style>