<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel Vue</title>
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>

            <div id="app">
            <section class="header">
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#"><img class="logo-manhom" src="{{ asset('asset/img/logo.png') }}" alt="logo ManHOM"></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"  >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav py-2   my-lg-0  w-100">
                    <li class="nav-item px-lg-2 py-lg-3">
                    <a class="nav-link fw-bold fs-5 active" aria-current="page" href="#">الرئيسية</a>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <a class="nav-link fw-bold fs-5" href="#">إكتشف</a>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <a class="nav-link fw-bold fs-5" href="#">دليل الشركات</a>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <a class="nav-link fw-bold fs-5" href="#">التصنيفات</a>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <a class="nav-link fw-bold fs-5" href="#">أخبار</a>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <a class="nav-link fw-bold fs-5" href="#">اقتصاديه</a>
                    </li>
                    <li class="nav-item dropdown me-lg-auto  py-lg-3">
                    <a class="nav-link fw-bold fs-6 dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        الإمارات
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><a class="dropdown-item" href="#">سوريا</a></li>
                        <li><a class="dropdown-item" href="#">مصر</a></li>
                        <li><a class="dropdown-item" href="#">العراق</a></li>
                    </ul>
                    </a>
                    </li>
                    <li class="nav-item py-lg-3 ">
                    <button class="btn btn-light text-black-50 fw-bold " href="#">الدخول</button>
                    </li>
                    <li class="nav-item py-lg-3">
                    <button class="btn btn-primary" href="#">إنشاء حساب</button>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
            </div>
            </section>
            <section class="Discover">
                <div class="container text-center ">
                <h1 class="display-5 fw-bold py-4"> إكتشف وتعرف <span class="text-primary position-relative">شخصيات بارزة</span>  </h1>
                <p class="fs-5 fw-bold text-black-50 pt-2">استكشف  وتعرف على شخصيات وشركات وثقافات مختلفه حول العالم العربي</p>
                <div class="container">
                    <div class="row height d-flex justify-content-center align-items-center">
                        <div class="col-md-8">
                            <div class="search"> <i class="fa fa-search"></i> <input type="text" class="form-control" placeholder="أكتب ماتريد البحث عنه في الشخصيات او شركة">
                             <button class="btn btn-primary pl-2 pr-2 m-2">إبحث</button>
                             </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
            <section class="trend">
            <ul class="nav justify-content-center">
            <li class="nav-item">
                <p class="fs-4 text-black-50 pt-1 m-2">الأكثر شيوعاً </p>
            </li>
            <li class="nav-item">
            <button class="btn p-2 m-2" type="button"><i class="fa-solid fa-arrow-trend-up"></i> سياحة</a>
            </li>
            <li class="nav-item">
            <button class="btn p-2 m-2" type="button"><i class="fa-solid fa-arrow-trend-up"></i>رياضه</a>
            </li>
            <li class="nav-item">
            <button class="btn p-2 m-2" type="button"><i class="fa-solid fa-arrow-trend-up"></i>تأمين</a>
            </li>
            <li class="nav-item">
            <button class="btn p-2 m-2" type="button"><i class="fa-solid fa-arrow-trend-up"></i>تسويق ومبيعات</a>
            </li>
            <li class="nav-item">
            <button class="btn p-2 m-2" type="button">تصفح الكل</a>
            </li>
            </ul>
            </section>
            <section class="trend-search" style="direction: ltr;">
                <div class="container text-center ">
                <h1 class="fs-1 py-4">الاكثر بحثاً </h1>
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
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-1.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                        <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-2.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">سميح ساويرس</h5>
                        <a href="#" class="stretched-link text-decoration-none">رجل أعمال مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-3.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">محمد السلاب</h5>
                        <a href="#" class="stretched-link text-decoration-none">رئيس مجموعة مصطفى السلاب</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-4.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أيمن إسماعيل</h5>
                        <a href="#" class="stretched-link text-decoration-none">الرئيس التنفيذي لشركة ماونتن فيو</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-5.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">ياسين منصور</h5>
                        <a href="#" class="stretched-link text-decoration-none">ملياردير مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-6.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">محمد صلاح</h5>
                        <a href="#" class="stretched-link text-decoration-none">لاعب كرة قدم دولي مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-1.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                        <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
                    </div>
                    </div>
                    </slide>
                    </carousel>
                    </div>
            </section>
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
                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-1.png') }}" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                    <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-2.png') }}" alt="carousel">
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">سميح ساويرس</h5>
                    <a href="#" class="stretched-link text-decoration-none">رجل أعمال مصري</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card " style="width:12rem;">
                <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-3.png') }}" alt="carousel">
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
            <section class="characters-you-follow" style="direction: ltr;">
                <div class="container text-center ">
                <h1 class="fs-1 py-4"> إكتشف أفضل الشركات والمجموعات</h1>
                <h1 class="display-4 fs-4 py-4 text-black-50 "> إستكشف أكثر الشركات انتشارا ً ... الشخصيات العاملة بها </h1>
                </div>
                <div class="container  text-center">
                <div class="row">
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c1.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c2.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c3.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c4.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c5.png') }}" alt="carousel">
                    </div>
                </div>
                <div class="row ">
                    <div class="col m-auto ">
                    <img class="rounded mx-auto d-block" src="{{ asset('asset/img/c6.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c7.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c8.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c9.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c10.png') }}" alt="carousel">
                    </div>
                </div>
                <div class="row">
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c11.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c12.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c13.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c14.png') }}" alt="carousel">
                    </div>
                    <div class="col m-auto">
                    <img class="rounded" src="{{ asset('asset/img/c15.png') }}" alt="carousel">
                    </div>
                </div>
                </div>
            </section>
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
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-1.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                        <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-2.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">سميح ساويرس</h5>
                        <a href="#" class="stretched-link text-decoration-none">رجل أعمال مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-3.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">محمد السلاب</h5>
                        <a href="#" class="stretched-link text-decoration-none">رئيس مجموعة مصطفى السلاب</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-4.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أيمن إسماعيل</h5>
                        <a href="#" class="stretched-link text-decoration-none">الرئيس التنفيذي لشركة ماونتن فيو</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-5.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">ياسين منصور</h5>
                        <a href="#" class="stretched-link text-decoration-none">ملياردير مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-6.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">محمد صلاح</h5>
                        <a href="#" class="stretched-link text-decoration-none">لاعب كرة قدم دولي مصري</a>
                    </div>
                    </div>
                    </slide>
                    <slide >
                    <div class="card " style="width:12rem;">
                    <img class="rounded p-2" src="{{ asset('asset/img/Rectangle 13064-1.png') }}" alt="carousel">
                    <div class="card-body text-center">
                        <h5 class="card-title  fw-bold">أحمد عمر هاشم</h5>
                        <a href="#" class="stretched-link text-decoration-none">داعية ومفكر اسلامي</a>
                    </div>
                    </div>
                    </slide>
                    </carousel>
                    </div>
            </section>
        
            <section class="footer">
                    <nav class="navbar  navbar-light bg-light navbar_footer">
                        <h3 class="p-2">
                        هل لديك أسئله حول من هم
                        </h3>
                    <div class="container">
                    <div class="accordion" id="accordionExample">
                    <div class="accordion-item" style="width: 100%;">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        كيف نجمع البيانات الخاصه بصفحة كل شخصية؟
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        تعتبر المعلومات المدرجة في قسمى من هم لديل الشخصيات والشركات، بيانات معتمدة  على ال المفتوحه والمنشورة مسبقاً وهي تخضع للتحقق والتوثيق من قبل فريق محرري البحث المعتمدين في الإقتصادي
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        هل يقوم دليل " من هم؟ " بنشر معلومات شخصية خاصة؟ 
                    </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        هل يمكن ان اعرف عدد زوار صفحتي؟
                        </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingfour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapseThree">
                        هل يمكن ان ترسلوا لي إشعاراً في اي وقت بتحديث  معلوماتي
                        </button>
                        </h2>
                        <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                        </div>
                        </div>
                    </div>
                    
                    </div>
                    </div>
                    <h3 >
                    <button class="btn btn-primary m-4" type="button">تصفح كل الأسئلة</button>
                        </h3>
                    <div class="container footerlink">
                    <div class="row w-100">
                        <div class="col-md-3">
                        <img class="logo-manhom m-3" src="{{ asset('asset/img/logo.png') }}" alt="logo ManHOM">
                        <p class="text-black-50 text-md-end footer-info">  من هم؟"  هو أول قاعدة بيانات لمعلومات 
                        الأشخاص والشركات العربية. أحد مواقع مجرة"</p>
                        <a class="nav-link fw-bold" href="#">تابعنا</a>
                        </div>
                        <div class="col-md-3">
                        <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" ahref="#">حول من هم</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">عن من هم</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">أضف شخصية</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">الشروط والأحكام</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">عن مجرة</a>
                        </li>
                        </ul>
                        </div>
                        <div class="col-md-3">
                        <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">الخدمات والإشتراكات </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">عن البرنامج</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">إدارة الأشتراكات</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">الشكاوي والملاحظات</a>
                        </li>
                        </ul>
                        </div>
                        <div class="col-md-3">
                        <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link fw-bold" href="#">مواقع اخرى</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">هارفارد بيزنس ريفيو العربية</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">إم أي تي تكنولوجي ريفيو</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">بوبيولار سايتس - العلوم للعموم</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link ">ستانفورد للإبتكار الإجتماعي</a>
                        </li>
                        </ul>
                        </div>
                    </div>   
                    </div>
                    <div class="container-fluid">
                    <h6>
                    <div class="text-muted">جميع الحقوق محفوظة ل من هم؟ 2022</div>
                    </h6>
                    </div>
                    </nav>
            </section>
        </div>
</body>
</html>
