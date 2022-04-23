<template>
  <div>
<VueSlickCarousel :arrows="true" :dots="true" v-bind="settings">
                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-1.png') }}" alt="logo ManHOM">
                
                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-2.png') }}" alt="logo ManHOM">

                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-3.png') }}" alt="logo ManHOM">

                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-4.png') }}" alt="logo ManHOM">
   
                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-5.png') }}" alt="logo ManHOM">

                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-6.png') }}" alt="logo ManHOM">
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