 <template>
<section >
<nav class="navbar navbar-light bg-white shadow-sm ">
  <div class="container">
    <ul class="nav">
        <li class="nav-item">
            <a class="nav-link btn btn-outline-primary" href="#">السيرة الذاتية</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">أحدث الأخبار</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">أخبار بقلم بدر جعفر</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">أقرباء بدر جعفر</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">أسئلة وأجوبة</a>
        </li>
    </ul>
    <form class="d-flex">
        <button class="btn btn-outline-primary w-75" type="submit">أضف شخصية</button>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    </form>
  </div>
</nav>
</section>
 </template>
<script>
export default {
    data() {
        return {
            
        }
    }
};
</script>
<style>

.bg-pink {
    background-color: #ffb2bd14;
}
</style>