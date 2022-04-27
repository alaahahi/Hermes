<template>
  <section class="header">
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                 <router-link class="navbar-brand" to="/"><img class="logo-manhom"  src="asset/img/logo.png" alt="logo ManHOM"></router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"  >
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav py-2   my-lg-0  w-100">
                    <li class="nav-item px-lg-2 py-lg-3">
                    <router-link class="nav-link fw-bold fs-5" to="/home">الرئيسية</router-link>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <router-link class="nav-link fw-bold fs-5" to="/discover">إكتشف</router-link>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <router-link class="nav-link fw-bold fs-5" to="/company">دليل الشركات</router-link>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <router-link class="nav-link fw-bold fs-5" to="#">التصنيفات</router-link>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <router-link class="nav-link fw-bold fs-5" to="#">أخبار</router-link>
                    </li>
                    <li class="nav-item px-lg-2 py-lg-3">
                    <router-link class="nav-link fw-bold fs-5" to="#">اقتصاديه</router-link>
                    </li>
                    <li class="nav-item dropdown me-lg-auto  py-lg-3">
                    <router-link class="nav-link fw-bold fs-6 dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        الإمارات
                    </router-link>
                    <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                        <li><router-link class="dropdown-item" to="#">سوريا</router-link></li>
                        <li><router-link class="dropdown-item" to="#">مصر</router-link></li>
                        <li><router-link class="dropdown-item" to="#">العراق</router-link></li>
                    </ul>
                    </li>
                    <li class="nav-item py-lg-3 ">
                    <button class="btn btn-light text-black-50 fw-bold " href="#">الدخول</button>
                    </li>
                    <li class="nav-item py-lg-3">
                    <router-link class="btn btn-primary" to="/home">إنشاء حساب</router-link>
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