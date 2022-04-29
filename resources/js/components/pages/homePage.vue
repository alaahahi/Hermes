<template>
    <div>
        <section class="Discover">
            <discoverTitle/>
          <discover></discover>
        </section>
          <trend></trend>
          <trend-search></trend-search>
          <top-ten></top-ten>
          <company-you-follow></company-you-follow>
          <best-company-groups></best-company-groups>
    </div>
</template>
<script>
import discover from '../home/discover.vue'
import discoverTitle from '../discover/discoverTitle.vue'
import trend from '../home/trend.vue'
import trendSearch from '../home/trendSearch.vue'
import topTen from '../home/topTen.vue'
import bestCompanyGroups from '../home/bestCompanyGroups.vue'
import companyYouFollow from '../home/companyYouFollow.vue'
export default {
         components: 
        {
        discover,
        discoverTitle,
        trend,
        bestCompanyGroups,
        topTen,
        companyYouFollow,
        trendSearch
      },
    data() {
        
        return {
            message: 'Hello World'
        }
    }
};
</script>