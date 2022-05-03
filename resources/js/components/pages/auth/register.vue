<template>
<div>
  <div class="container-fluid">
    <div class="row">
        <div class="col-md-6 bg-white">
          <div class="row flex-row-reverse mt-3 mb-5">
            <div class="col-md-8 text-end "><img class="logo-manhom"  src="asset/img/logo.png" alt="logo ManHOM"></div>
          </div>
          <div class="row  flex-row-reverse my-3">
            <div class="col-md-8 text-end"><h2>إنشاء حساب جديد</h2></div>
          </div>
          <div class="row  flex-row-reverse mb-4">
            <div class="col-md-8 text-end">  <h6 class="text-muted ">ادخل المعلومات ادناه حتي تتمكن من تسجيل حسابك</h6></div>
          </div>
          <div class="row  flex-row-reverse">
            <div class="col-md-8 text-end">
              <a class="btn btn-light w-75"> <i class="fa-brands fa-google text-danger float-end m-1"></i>المتابعه بإستخدام Google</a>
              <br>
              <a class="btn btn-info w-75 my-4 text-white"><i class="fa-brands fa-twitter text-white float-end m-1"></i> المتابعه بإستخدام Twitter </a>
              <br>
              <a class="btn btn-primary w-75"> <i class="fa-brands fa-facebook text-white float-end m-1"></i>المتابعه بإستخدام Facebook</a>
              <h1 class="fs-6 text-muted my-2 py-2 w-75">أو</h1>
              <div class="row">
                <div class="col-md-6">
                  <label for="name" class="form-label">الإسم</label>
                  <input type="text" class="form-control w-75 bg-white"  placeholder="أحمد ديب">
                </div>
                <div class="col-md-6 ">
                  <label for="password" class="form-label">الشركة</label>
                  <input type="text"  class="form-control w-75 bg-white"  placeholder="إسم الشركة">
                </div>
              </div>
              <div class="row my-2">
                <div class="col-md-6 ">
                  <label for="password" class="form-label">المهنه</label>
                  <input type="text"  class="form-control w-75 bg-white"  placeholder="المهنه">
                  </div>
                <div class="col-md-6">
                  <label for="email" class="form-label">البريد الإلكتروني</label>
                  <input type="email" class="form-control w-75 bg-white"  placeholder="ahmad@gmail.com">
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-md-11">
                  <select class="form-select form-select-sm bg-white" aria-label=".form-select-sm example">
                    <option selected>مصر</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>
              </div>
              <div class="row mt-3">
                <div class="col-md-6">
                  <label for="name" class="form-label">العمر</label>
                  <input type="text" class="form-control w-75 bg-white"  placeholder="مثال: 25 عام">
                </div>
                <div class="col-md-6 ">
                  <label for="password" class="form-label">الهاتف</label>
                  <input type="text"  class="form-control w-75 bg-white"  placeholder="مثال: +020 10134444">
                </div>
              </div>
              <div class="row  my-2">
                <div class="col-md-6 ">
                  <label for="password" class="form-label">كلمة المرور </label>
                  <div class="position-relative w-75">
                  <input :type="passwordFieldType" v-model="password" class="form-control bg-white">
                  <i  @click="switchVisibility" class="fa-regular fa-eye position-absolute top-50 start-0-c translate-middle-y text-muted"></i>
                  </div>
                </div>
                <div class="col-md-6 ">
                  <label for="password" class="form-label">تأكيد كلمة المرور</label>
                  <div class="position-relative w-75">
                  <input :type="passwordFieldType" v-model="password" class="form-control bg-white">
                  <i  @click="switchVisibility" class="fa-regular fa-eye position-absolute top-50 start-0-c translate-middle-y text-muted"></i>
                  </div>
                </div>
              </div>
              <a class="btn btn-primary w-75 mt-4">  تسجيل الدخول</a>
              <h6 class="text-center  w-75 my-4">
                 لديك حساب؟
                <b>
                 <router-link  to="/login">تسجيل الدخول</router-link>
                </b>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-md-6 m-auto">
          <div class="container">
          <h2 class="my-5 text-center">
            مميزات واضافات غير محدوده 
          </h2>
          <carousel 
                      :navigation-enabled="true"
            navigation-next-label="<i class='fa-regular fa-circle-right fa-lg	text-primary'></i>"
            navigation-prev-label="<i class='fa-regular fa-circle-left fa-lg	text-primary'></i>"
            :auto-play-timeout="6000" :autoplay="true"  :loop="true" :pagination-enabled="false" :per-page-custom="[[768, 2], [1024, 3]]">
                <slide >
                <div class="card m-1 ">
                <div class="p-5 text-center">
                <i class="fa-regular fa-circle-check fa-2xl text-success"></i>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">تصحيح المعلومات</h5>
                    <a href="#" class="text-muted text-decoration-none">فريق التحرير حريص علي مراجعة اي معلومه قد تكون مغلوطه او منقوصه</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card m-1 ">
                <div class="p-5 text-center">
                <i class="fa-solid fa-circle-nodes fa-2xl text-warning"></i>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">تقارير الزوار</h5>
                    <a href="#" class="text-muted text-decoration-none">يتم ربط صفحتك بالبريد الإلكتروني لتصلك بإستمرار تقارير عن عدد زوار صفحتك</a>
                </div>
                </div>
                </slide>
                <slide >
                <div class="card m-1 ">
                <div class="p-5 text-center">
                <i class="fa-solid fa-circle-check fa-2xl text-success"></i>
                </div>
                <div class="card-body text-center">
                    <h5 class="card-title  fw-bold">تصحيح المعلومات</h5>
                    <a href="#" class="text-muted text-decoration-none">فريق التحرير حريص علي مراجعة اي معلومه قد تكون مغلوطه او منقوصه</a>
                </div>
                </div>
                </slide>
                </carousel>
          </div>
        </div>
    </div>
  </div>
</div>
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
      password: "",
      passwordFieldType: "password"
    };
    },
    methods:{
    switchVisibility() {
      this.passwordFieldType = this.passwordFieldType === "password" ? "text" : "password";
    }
  }
};
</script>

<style scoped>
h1 {
  overflow: hidden;
  text-align: center;
}

h1:before,
h1:after {
  background-color: rgba(152, 132, 132, 0.499);
  content: "";
  display: inline-block;
  height: 1px;
  position: relative;
  vertical-align: middle;
  width: 40%;
}

h1:before {
  right: 2rem;
  margin-left: -40%;
}

h1:after {
  left: 2rem;
  margin-right: -40%;
}
.start-0-c{
  left: 12px !important;
}
</style>
