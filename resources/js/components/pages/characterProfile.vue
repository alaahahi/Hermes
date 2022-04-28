<template>
  <div class="bg-white">
    <characterDetailsNav/>
    <characterInfo/>
  </div>
</template>
<script>
import characterDetailsNav from '../characterDetails/characterDetailsNav.vue'
import characterInfo from '../characterDetails/characterInfo.vue'

export default {
  components: 
        {
        characterDetailsNav,
        characterInfo
        },
    data() {
        
        return {
            message: 'Discover page'
        }
    }
};
</script>