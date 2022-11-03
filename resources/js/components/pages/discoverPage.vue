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
import discover from '../home/discover.vue'
import trend from '../home/cal.vue'
import companyYouFollow from '../home/companyYouFollow.vue'
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