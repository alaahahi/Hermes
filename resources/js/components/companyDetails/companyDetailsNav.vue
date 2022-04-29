 <template>
<section >
<nav class="navbar navbar-light bg-white shadow-sm ">
  <div class="container">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link btn btn-outline-primary" href="#">مقدمة</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">مقالات ذات صلة</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">معلومات الشركة</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">انستاغرام</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">يوتيوب</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">تويتر</a>
        </li>
    </ul>
    <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="اكتب ما تريد البحث عنه" aria-label="Search">
    </form>
  </div>
</nav>
</section>
 </template>
<script>
export default {
    data() {
        return {
            message: 'Hello World',
        }
    }
};
</script>
<style scoped>

.btn-outline-primary{
border-radius: 20px;
}
.bg-pink {
    background-color: #ffb2bd14;
}
</style>