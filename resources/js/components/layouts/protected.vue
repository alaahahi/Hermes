<template>
<div>
        <!--<headers/>-->
        .
          <router-view></router-view>
        <!--<footers/>-->
        
</div>
</template>
<script>
import headers from '../home/header.vue'
import footers from '../home/footers.vue'
export default {
    components: {
        headers,
        footers
      },
};
</script>