<template>
  <section class="contact">
    <h1>Contact</h1>
    <hr>
    <article>
        <h2>Feel free to get in touch!</h2>
        <div>
            <p>Our managers:</p>
            <ul>
                <li>John Doe, +01 123 4567</li>
                <li>Jane Doe, +01 124 4567</li>
                <li>Another Person, +01 125 4567</li>
            </ul>
        </div>
    </article>
  </section>
</template>

<script>

</script>

<style scoped>
    .page-enter-active {
        animation: zoomIn .5s;
    } 
    @keyframes zoomIn {
    from {
        opacity: 0;
        transform: scale3d(0.4, 0.4, 0.4);
    }

    50% {
        opacity: 1;
    }
    }

    .zoomIn {
    animation-name: zoomIn;
    }




    .contact {
        max-width: 500px;
        margin: 0 auto;
        padding-top: 30px;
        font-size: 20px;
    }
    .contact article div {
        line-height: 30px;
    }
    h1, h2 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>