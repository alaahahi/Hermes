<template>
<section class="best-company-groups" style="direction: ltr;">
                <div class="container text-center ">
                <h1 class="fs-1 py-4">شخصيات تتابعها</h1>
                <h1 class="display-4 fs-4 py-4 text-black-50 ">الشخصيات الأكثر بحثا ً ...  الاكثر تفاعلاً  .... الاكثر تأثيرا  ً </h1>
                </div>
                <div class="container">
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
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/Rectangle 13064-4.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أيمن إسماعيل</h5>
                        <a href="#" class="stretched-link text-decoration-none">الرئيس التنفيذي لشركة ماونتن فيو</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/Rectangle 13064-5.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">ياسين منصور</h5>
                        <a href="#" class="stretched-link text-decoration-none">ملياردير مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/Rectangle 13064-6.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">محمد صلاح</h5>
                        <a href="#" class="stretched-link text-decoration-none">لاعب كرة قدم دولي مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="asset/img/Rectangle 13064-1.png" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                        <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
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