<template>
  <section class="trend-search" style="direction: ltr;">
                <div class="container text-center mt-5">
                <h1 class="fs-1 py-5">تصنيفات مختاره "asset/img/discoverPage/g3.png"</h1>
                <h1 class="display-4 fs-4 py-4 text-black-50 ">جمعنا لك افضل التصنيفات ... والشخصيات بداخل كل تصنيف</h1>
                </div>
                <div class="container">
                        <VueSlickCarousel v-bind="settings">
                        <div><h3>1</h3></div>
                        <div><h3>2</h3></div>
                        <div><h3>3</h3></div>
                        </VueSlickCarousel>
                    </div>
</section>
</template>

<script>

  import VueSlickCarousel from 'vue-slick-carousel'
  import 'vue-slick-carousel/dist/vue-slick-carousel.css'
  // optional style for arrows & dots
  import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
export default {
        components: 
        {
        VueSlickCarousel
        },
    data() {
        
        return {
                      settings:{
                "dots": true,
                "infinite": false,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 4,
                "initialSlide": 0,
                "responsive": [
                    {
                    "breakpoint": 1024,
                    "settings": {
                        "slidesToShow": 3,
                        "slidesToScroll": 3,
                        "infinite": true,
                        "dots": true
                    }
                    },
                    {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                        "slidesToScroll": 2,
                        "initialSlide": 2
                    }
                    },
                    {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        "slidesToScroll": 1
                    }
                    }
                ]
            }
        }
    }
};
</script>
