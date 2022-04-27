 <template>
<section class="characters-you-follow  bg-white p-2" style="direction: ltr;">
                <div class="container text-center">
                <h1 class="display-2  fs-1 py-2 fw-bold">شركات نرشحها لك</h1>
                <h1 class="display-4 fs-4 pt-1 pb-2 text-black-80 ">جمعنا لك افضل التصنيفات ... والشخصيات بداخل كل تصنيف</h1>
                </div>
                <div class="container ">
                    <div  class="row d-flex justify-content-around">
                        <div v-for="(bestCompany, i) in bestCompanyLastMonth" :index="i" :key="i" class="col-md-2 col-sm-4 col-xs-2">
                            <div class="card h-100 bg-transparent border-card-company">
                            <div  class="bs-img-size  text-center ">
                            <img class="rounded-circle m-3" :src="bestCompany.src">
                             <div class="card-body text-center">
                                <h5 class="card-title fs-6">{{bestCompany.title}}</h5>
                                <p class="text-black-80 ">{{bestCompany.position}}</p>
                                <a class="btn btn-outline-primary btn-sm">متابعة</a>
                            </div>
                            </div>
                    
                            </div>
                        </div>
                    </div>
                    <div class="row p-4">
                        <div class="col text-center">
                            <a class="text-decoration-none text-primary fw-bold fs-5" href="#">تصفح المزيد </a>
                        </div>
                    </div>
                </div>
</section>
 </template>
<script>
export default {
    data() {
        return {
                bestCompanyLastMonth:[
                {
                title:"شركة بيرل بتروليوم",
                position:"الإمارات العربية المتحدة",
                src:"asset/img/companyPage/bc.png"
                },
                {
                title:"شركة غزه سكاي جيكس",
                position:"الإمارات العربية المتحدة",
                src:"asset/img/companyPage/bc1.png"
                },
                {
                title:"مجموعة الهلال",
                position:"الإمارات العربية المتحدة",
                src:"asset/img/companyPage/bc2.png"
                },
                {
                title:"مركز الشارقه لريادة الأعمال",
                position:"الإمارات العربية المتحدة",
                src:"asset/img/companyPage/bc3.png"
                },
                {
                title:"برق الإماراتيه",
                position:"الإمارات العربية المتحدة",
                src:"asset/img/companyPage/bc4.png"
                },
                ]
        }
    }
};
</script>
<style scoped>
.bs-img-size{
    min-height: 200px;
    border: 1px #aba7a733 solid;
    border-radius: 10px;
}
.border-card-company{
    border: none ;
}
.rounded-circle{
  vertical-align: middle;
  width: 70px;
  height:70px;
  border-radius: 50%;
}
</style>
            