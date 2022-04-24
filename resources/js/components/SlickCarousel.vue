<template>
  <div>
<VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
</VueSlickCarousel>
  </div>
</template>

<script>
  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
      data:{
          settings:{
               "dots": true,
                "dotsClass": "slick-dots custom-dot-class",
                "edgeFriction": 0.35,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 1,
                "slidesToScroll": 1
          }
      },
    name: 'slickcarousel',
    components: { VueSlickCarousel },
  }
</script>