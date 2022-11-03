<template>
    <div>
          <cal></cal>
    </div>
</template>
<script>
import cal from '../home/cal.vue'
export default {
         components: 
        {
        cal,
      },
    data() {
        
        return {
            message: 'Hello World'
        }
    }
};
</script>