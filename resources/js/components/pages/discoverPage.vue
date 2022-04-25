<template>
    <div>
          <section class="Discover">
          <discover/>
          </section>
          <trend/>
          <historicalClassification/>
          <investmentCharacters/>
          <selectedCategories/>
          <company-you-follow/>
    </div>
</template>
<script>
import discover from '../discover.vue'
import trend from '../home/trend.vue'
import companyYouFollow from '../companyYouFollow.vue'
import historicalClassification from '../discover/historicalClassification.vue'
import investmentCharacters from '../discover/investmentCharacters.vue'
import selectedCategories from '../discover/selectedCategories.vue'
export default {
  components: 
        {
        selectedCategories,
        investmentCharacters,
        historicalClassification,
        discover,
        trend,
        companyYouFollow,
      },
    data() {
        
        return {
            message: 'Discover page'
        }
    }
};
</script>