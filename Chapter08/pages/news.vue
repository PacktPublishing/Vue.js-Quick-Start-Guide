<template>
  <section class="news">
    <h1>News</h1>
    <hr>
    <article>
        <h2>We are taking orders for our new product</h2>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium perspiciatis dolorem blanditiis maxime doloremque quibusdam obcaecati autem enim ipsum deserunt. Aliquid dolor consequatur repellendus odit, dolores possimus ab cum et voluptatem placeat sunt perferendis porro, eligendi perspiciatis harum pariatur veniam quo sed, reprehenderit voluptates maiores hic! Sint, facilis voluptatibus animi!
        </div>
    </article>
    <article>
        <h2>Our website is live</h2>
        <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus unde fugit quod, tempore enim obcaecati quam eius explicabo voluptates quo consequatur! Ad iste consequuntur dolorem minima at cupiditate veniam saepe voluptatum, qui hic corporis modi repellendus illum natus optio aut! Omnis praesentium placeat pariatur neque dolorum eaque, labore at et dignissimos impedit nobis, commodi rerum. Debitis est exercitationem ipsa, commodi nihil! Inventore minus ex, quam, facilis ut fuga unde harum possimus dolore ea voluptatum non debitis nihil ipsum repellendus aut dolorum nam nostrum assumenda eveniet corrupti consequatur obcaecati provident alias! Ad est minus repudiandae aliquid maxime provident labore. Asperiores, qui!
        </div>
    </article>
  </section>
</template>

<script>

</script>

<style scoped>
    .page-enter-active {
        animation: bounce .5s;
    } 
    .page-leave-active {
        animation: bounce .5s;
    } 
    @keyframes bounce {
        from,
        20%,
        55%,
        85%,
        to {
            animation-timing-function: cubic-bezier(0.320, 0.70, 0.355, 1);
            transform: translate3d(0, 0, 0);
        }

        40%,
        43% {
            animation-timing-function: cubic-bezier(0.700, 0.05, 0.855, 0.06);
            transform: translate3d(0, -30px, 0);
        }

        70% {
            animation-timing-function: cubic-bezier(0.700, 0.05, 0.855, 0.06);
            transform: translate3d(0, -15px, 0);
        }

        90% {
            transform: translate3d(0, -4px, 0);
        }
    }

    .bounce {
        animation-name: bounce;
        transform-origin: center bottom;
    }



    .news {
        max-width: 500px;
        margin: 0 auto;
        padding-top: 30px;
        font-size: 20px;
    }
    .news article div {
        line-height: 30px;
    }
    h1, h2 {
        padding-top: 20px;
        padding-bottom: 20px;
    }
</style>