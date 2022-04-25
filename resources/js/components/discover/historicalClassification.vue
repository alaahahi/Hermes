<template>
<section class="characters-you-follow">
                <div class="container text-center ">
                <h1 class="fs-1 py-4"> تصنيفات تاريخية</h1>
                <h1 class="display-4 fs-4 py-4 text-black-50 ">إخترنالك افضل التصنيفات التاريخيه...شخصيات تاريخيه مختلفه </h1>
                </div>
                <carousel-3d :border=0 :autoplay="true" :autoplay-timeout="3000" :height="400" :space="400" :perspective="0" :clickable="false">
                <slide @click="true"  v-for="(slide, i) in slides" :index="i" :key="i" class="text-center" >
                    <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
                        <figure>
                        <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="slide.src">
                            <figcaption>
                            <h4  class="title display-6 my-5">{{slide.classification}}</h4>
                            <h5 class="research"><span>{{slide.researchResults}}</span>  نتيجة 
                            </h5>
                            </figcaption>
                        </figure>
                    </template>
                </slide>
                </carousel-3d>   
</section>
</template>
<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    components: {
    Carousel3d,
    Slide
  },
    data() {
        return {
            slides:[
                {
                classification:"سياسة",
                researchResults:323,
                src:"asset/img/discoverPage/c.png"
                },
                {
                classification:"كتاب وأدباء",
                researchResults:80,
                src:"asset/img/discoverPage/c1.png"
                },
                {
                classification:"عالم الرياضه",
                researchResults:50,
                src:"asset/img/discoverPage/c2.png"
                },
                {
                classification:"عالم الفن",
                researchResults:89,
                src:"asset/img/discoverPage/c3.png"
                },
                 {
                classification:"إقتصاد",
                researchResults:123,
                src:"asset/img/discoverPage/c4.png"
                }
                ]
        }
    }
};
</script>
<style scoped>

.carousel-3d-container figure {
  margin:0;
}

.carousel-3d-container figcaption {
  position: absolute;
 background: linear-gradient(to bottom, transparent 0%, black 100%);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  height: 50%;
  box-sizing: border-box}
</style>
