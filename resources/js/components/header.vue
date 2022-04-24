<template>
  <section class="header">
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                 <a class="navbar-brand" href="#"><img class="logo-manhom"  src="asset/img/logo.png" alt="logo ManHOM"></a>
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
</template>
<script>
export default {
    data() {
        return {
            message: 'Hello World',
            taps:['الرئيسية','إكتشف']
        }
    }
};
</script>