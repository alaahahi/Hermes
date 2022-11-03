<template>
  <div>
    <discover/>
    <trend/>
    <best-company-last-month/>
    <companiesRecommend/>
    <companySubscription/>
    <mostSearchedCompanies/>
    <newCompany/>
  </div>
</template>
<script>
import bestCompanyLastMonth from '../company/bestCompanyLastMonth.vue'
import companiesRecommend from '../company/companiesRecommend.vue'
import mostSearchedCompanies from '../company/mostSearchedCompanies.vue'
import companySubscription from '../company/companySubscription.vue'
import newCompany from '../company/newCompany.vue'
import discover from '../home/discover.vue'
import trend from '../home/cal.vue'
export default {
  components: 
        {
        companySubscription,
        mostSearchedCompanies,
        newCompany,
        companiesRecommend,
        bestCompanyLastMonth,
        discover,
        trend
        },
    data() {
        
        return {
            message: 'Discover page'
        }
    }
};
</script>