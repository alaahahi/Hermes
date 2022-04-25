<template>
  <section class="trend-search" style="direction: ltr;">
                <div class="container text-center mt-5">
                <h1 class="fs-1 py-5">تصنيفات مختاره</h1>
                <h1 class="display-4 fs-4 py-4 text-black-50 ">جمعنا لك افضل التصنيفات ... والشخصيات بداخل كل تصنيف</h1>
                </div>
                <div class="container">
                <carousel 
                :navigation-enabled="true"
                navigation-next-label="<i class='fa-regular fa-circle-right fa-lg	text-primary'></i>"
                navigation-prev-label="<i class='fa-regular fa-circle-left fa-lg	text-primary'></i>"
                :auto-play-timeout="6000" :autoplay="true"  :loop="true" :pagination-enabled="false" :per-page-custom="[[768, 2], [1024, 3], [1126, 4]]">
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/discoverPage/g.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                        <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/discoverPage/g1.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">سميح ساويرس</h5>
                        <a href="#" class="stretched-link text-decoration-none">رجل أعمال مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/discoverPage/g2.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">محمد السلاب</h5>
                        <a href="#" class="stretched-link text-decoration-none">رئيس مجموعة مصطفى السلاب</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/discoverPage/g3.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أيمن إسماعيل</h5>
                        <a href="#" class="stretched-link text-decoration-none">الرئيس التنفيذي لشركة ماونتن فيو</a>
                    </div>
                    </div>
                    </slide>
                    </carousel>
                    </div>
</section>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
export default {
        components: 
        {
        Carousel,
        Slide,
      },
    data() {
        return {
            message: 'Hello World',
        }
    }
};
</script>
