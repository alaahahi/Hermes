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
import discover from '../discover.vue'
import discoverTitle from '../discover/discoverTitle.vue'
import trend from '../home/trend.vue'
import trendSearch from '../trendSearch.vue'
import topTen from '../home/topTen.vue'
import bestCompanyGroups from '../bestCompanyGroups.vue'
import companyYouFollow from '../companyYouFollow.vue'
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