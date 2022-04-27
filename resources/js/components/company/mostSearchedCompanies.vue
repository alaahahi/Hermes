 <template>
<section class="characters-you-follow  bg-white p-5" style="direction: ltr;">
                <div class="container text-center">
                <h1 class="display-2  fs-1 py-2 fw-bold">الشركات الأكثر بحثاَ</h1>
                <h1 class="display-4 fs-4 pt-1 pb-2 text-black-80 "> جمعنا لك افضل التصنيفات ... والشخصيات بداخل كل تصنيف </h1>
                </div>
                <div class="container ">
                    <div  class="row d-flex justify-content-around">
                        <div v-for="(bestCompany, i) in bestCompanyLastMonth" :index="i" :key="i" class="col-md-2 col-sm-4 col-xs-2">
                            <div class="card h-100 bg-transparent border-card-company">
                            <div  class="bs-img-size d-flex align-items-center justify-content-center">
                            <img class="rounded card-img-top p-3" :src="bestCompany.src">
                            </div>
                            <div class="card-body text-end">
                                <h5 class="card-title fs-6">{{bestCompany.title}}</h5>
                                <p class="card-text text-warning">{{bestCompany.position}}</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
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
                position:"رئيس مجلس إداره",
                src:"asset/img/companyPage/bc.png"
                },
                {
                title:"شركة غزه سكاي جيكس",
                position:"عضو المجلس الإستشاري",
                src:"asset/img/companyPage/bc1.png"
                },
                {
                title:"مجموعة الهلال",
                position:"الرئيس التنيفذي",
                src:"asset/img/companyPage/bc2.png"
                },
                {
                title:"مركز الشارقه لريادة الأعمال",
                position:"مركز الشارقه لريادة الأعمال",
                src:"asset/img/companyPage/bc3.png"
                },
                {
                title:"برق الإماراتيه",
                position:"عضو المجلس الإستشاري الدولي",
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
</style>
            