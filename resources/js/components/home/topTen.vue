<template>
 <section class="top-ten">
                <div class="container">
                <div class="row pt-5 pb-5">
                <div class="col-4 m-auto">
                        <h2>أفضل 10 شخصيات مؤثرة في هذا الأسبوع</h2>
                        <p>تم إختيار بعنايه افضل شخصيات مؤثره في هذا الأسبوع  وقدموا مثالاً مشرفا للشباب كي يقتدوا بهم</p>
                        <button class="btn  btn-primary ">تصفح المزيد</button>
                </div>

                    <div class="col-8 m-auto">
                    <carousel 
            :navigation-enabled="true"
            navigation-next-label="<i class='fa-regular fa-circle-right fa-lg	text-primary'></i>"
            navigation-prev-label="<i class='fa-regular fa-circle-left fa-lg	text-primary'></i>"
            :auto-play-timeout="6000" :autoplay="true"  :loop="true" :pagination-enabled="false" :per-page-custom="[[768, 4], [1024, 5], [1124, 6]]">
                <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="asset/img/Rectangle 13064-1.png" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                    <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="asset/img/Rectangle 13064-2.png" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">سميح ساويرس</h5>
                    <a href="#" class="stretched-link text-decoration-none">رجل أعمال مصري</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="asset/img/Rectangle 13064-3.png" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">محمد السلاب</h5>
                    <a href="#" class="stretched-link text-decoration-none">رئيس مجموعة مصطفى السلاب</a>
                </div>
                </div>
                </slide>
                </carousel>
                </div>
                </div>
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