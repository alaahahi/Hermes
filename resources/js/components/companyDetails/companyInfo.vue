<template>
<section >
<div class="container py-3">
    <div class="row">
        <div class="col-md-8">
            <div class="row">
                <div class="col-md-4">
                    <img class="rounded" src="asset/img/companyDetailsPage/im1.png" alt="carousel">
                </div>
                <div class="col-md-8">
                <h3 class="pt-5">دائرة تنمية المجتمع في ابوظبي</h3>
                <dl class="row">
                <dt class="col-sm-2 text-nowrap">الإسم بالإنكليزية: </dt>
                <dd class="col-sm-8">department of community development</dd>
                <dt class="col-sm-2">الدولة:</dt>
                <dd class="col-sm-3">الإمارات</dd>
                <dt class="col-sm-2 text-nowrap">المقر الرئيسي</dt>
                <dd class="col-sm-3">أبوظبي</dd>
                <dt class="col-sm-2 text-nowrap">رقم الهاتف:</dt>
                <dd class="col-sm-3 text-nowrap">+971 50 500 6000</dd>
                <dt class="col-sm-2 text-nowrap">البريد الإلكتروني </dt>
                <dd class="col-sm-3 text-primary">info@manHom.com</dd>
                <dt class="col-sm-2 text-nowrap">صندوق البريد:</dt>
                <dd class="col-sm-3 text-nowrap">6000</dd>
                <dt class="col-sm-2 text-nowrap">الموقع</dt>
                <dd class="col-sm-3 text-primary">www.manHom.com</dd>
                <dt class="col-sm-12">
                    <a class="btn btn-primary w-25 mx-2">متابعة</a>
                    <a class="btn btn-outline-primary w-40 mx-2">هل تلك المعلومات صحيحة؟</a>
                </dt>
                </dl>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    معلومات المؤسسة
                    </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <h3>الحياه المبكره والتعليم</h3>
                        <p>
                            ولد بدر جعفر ونشأ في الشارقة، بالإمارات. في عام 1994، واصل تعليمه في كلية إيتون، وتخرج في عام 1999 من جامعة كامبريدج بدرجة الماجستير في الهندسة ودراسات إضافية في الفيزياء الفلكية. في عام 1996، منحت جامعة هارفارد جعفر جائزة هارفارد للكتاب المقدمة للطلاب الذين «أظهروا التميز في المنح الدراسية والشخصية الرفيعة، بالإضافة إلى الإنجازات في المجالات الأخرى». التحق جعفر بعد ذلك بكلية كامبردج جادج للأعمال في جامعة كامبريدج. يعمل جعفر عضوا في المجالس الاستشارية لكلية إدارة الأعمال بجامعة كامبريدج، والجامعة الأمريكية في بيروت، والجامعة الأمريكية في الشارقة. وهو زميل مؤسسي معين في كلية إيتون.
                        </p>
                        <h3> ريادة الأعمال </h3>
                        <p>
                            بدر جعفر هو رئيس مجلس إدارة إنديفور، وهو عضو في مجلس المستشارين لمركز الشارقة لريادة الأعمال (شراع) وغزة سكاي جيكس، وهي شركة رائدة في تسريع الشركات الناشئة ومركز التعليم التكنولوجي في غزة. في عام 2014، أطلق جعفر برنامج ريادة الأعمال الاجتماعية في العالم العربي بالشراكة مع أشوكا (Ashoka)، وهي منظمة ريادة اجتماعية، لتحديد ومساعدة الشركات الاجتماعية الواعدة في المنطقة. 
                        </p>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    المبادرات الاجتماعية 
                    </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">

                    </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    معلومات المؤسسة
                    </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body"></div>
                    </div>
                </div>
                </div>
                </div>
            </div>
            <div class="row">
            <div class="col-12 ">
            <div class="d-flex justify-content-between align-items-center">
            <h5 class="fw-bold my-4">شخصيات وشركات ذات صلة</h5>
            <a class="btn btn btn-outline-primary fs-6 fw-bold">عرض المزيد</a>
            </div>
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
                    <a href="#" class="stretched-link text-decoration-none">أب</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="asset/img/Rectangle 13064-2.png" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">سميح ساويرس</h5>
                    <a href="#" class="stretched-link text-decoration-none">أخ</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="asset/img/Rectangle 13064-3.png" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">محمد السلاب</h5>
                    <a href="#" class="stretched-link text-decoration-none">عم</a>
                </div>
                </div>
                </slide>
                           <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="asset/img/Rectangle 13064-4.png" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">محمد السلاب</h5>
                    <a href="#" class="stretched-link text-decoration-none">أب</a>
                </div>
                </div>
                </slide>
                </carousel>
                </div>
            </div>
            <div class="row">
                <div class="col-12 m-auto d-flex justify-content-between align-items-center">
                    <h5 class="fw-bold my-4">أخر فيديوهات اليوتيوب</h5>
                    <a class="btn btn-outline-primary fs-6 fw-bold">عرض المزيد</a>
                </div>
            </div>
            <div class="row">
              
                <div class="col-12 bg-pink py-2 p">
                      <h5 class="fw-bold my-4">تصنيفات ذات صلة</h5>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">العمل الأهلي</a>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">تعليم</a>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">رؤساء تنفيذيين</a>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">رجال وسيدات أعمال</a>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">تسويق ومبيعات</a>
                    <br>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">مؤسسات دولية</a>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">نفط وغاز</a>
                    <a class="btn btn-light fs-6 fw-bold bg-white text-muted m-2 px-2">قيادات عالمية شابه</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 ">
                    <div class="card w-75 p-3 m-auto my-3 shadow-sm">
                        <a class="btn btn-primary w-100 mb-2">شارك الصفحة</a>
                        <a class="btn btn-outline-primary w-100 ">أبلغني بالتحديثات</a>
                    </div>
                    <div class="card w-75 p-3  m-auto my-3 text-center shadow-sm">
                        <div class="align-items-center">
                        <span class="badge rounded-pill bg-warning  fs-5 p-3">عضوية ذهبية</span>
                        </div>
                        <div class="card-body">
                        <h3 class="card-title">الباقه الذهبيه</h3>
                        <p style="background-image: url(asset/svg/path1984.png);" class="fs-3 mx-4 "> 
                            <b>15</b> دولار / الشهر
                        </p>
                    </div>
                        <a class="btn btn-primary w-100 ">أبدأ الأن مجاناَ</a>
                    </div>
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="fw-bold">تعرف أيضا</h3>
                        <p>أشخاص من نفس المؤسسه</p>
                        <div class="card w-75  m-auto my-4 text-center shadow ">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/companyPage/bc.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm"> تفاصيل الشركة</a>
                            </div>
                             </div>
                             </div>
                        </div>
                       <div class="card w-75  m-auto my-4 text-center shadow">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/companyPage/bc3.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm"> تفاصيل الشركة</a>
                            </div>
                             </div>
                             </div>
                    </div>
                       <div class="card w-75  m-auto my-4 text-center shadow">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/companyPage/bc1.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm"> تفاصيل الشركة</a>
                            </div>
                             </div>
                             </div>
                    </div>
                       <div class="card w-75  m-auto my-4 text-center shadow">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/companyPage/bc2.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm"> تفاصيل الشركة</a>
                            </div>
                             </div>
                             </div>
                    </div>
                </div>
                </div>
                    <div class="row">
                    <div class="col-md-12">
                        <h3 class="fw-bold">تعرف أيضا</h3>
                        <p>شخصيات من محرري من هم</p>
                        <div class="card w-75  m-auto my-4 text-center shadow">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/Rectangle 13064-3.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm"> الملف الشخصي </a>
                            </div>
                             </div>
                             </div>
                        </div>
                       <div class="card w-75  m-auto my-4 text-center shadow">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/Rectangle 13064-4.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm"> الملف الشخصي </a>
                            </div>
                             </div>
                             </div>
                    </div>
                       <div class="card w-75  m-auto my-4 text-center shadow">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/Rectangle 13064-5.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm"> الملف الشخصي </a>
                            </div>
                             </div>
                             </div>
                    </div>
                       <div class="card w-75  m-auto my-4 text-center shadow">
                            <div class="row">
                            <div class="col-md-5 g-0 d-flex align-items-center">
                                <img class="img-fluid rounded-end p-3" src="asset/img/Rectangle 13064-6.png">
                            </div>
                             <div class="col-md-7 g-0">
                            <div class="card-body">
                            <h5 class="card-title">شركة سبارك </h5>
                            <h6 class="text-muted py-1">الإمارات العربية المتحدة
                            </h6>
                            <a class="btn btn-primary btn-sm">الملف الشخصي</a>
                            </div>
                             </div>
                             </div>
                    </div>
                </div>
            </div>
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
data(){
    return{

    }
}
}
</script>

<style>
.card {
    border-radius: 20px;
}

</style>