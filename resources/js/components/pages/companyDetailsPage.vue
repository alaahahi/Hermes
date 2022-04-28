<template>
  <div class="bg-white">
    <companyDetailsNav/>
    <companyInfo/>
  </div>
</template>
<script>
import companyDetailsNav from '../companyDetails/companyDetailsNav.vue'
import companyInfo from '../companyDetails/companyInfo.vue'

export default {
  components: 
        {
        companyDetailsNav,
        companyInfo
        },
    data() {
        
        return {
            message: 'Discover page'
        }
    }
};
</script>