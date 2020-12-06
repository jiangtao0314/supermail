<template>
  <div>
    <cartnavbar>

    </cartnavbar>
    <cartlist>

    </cartlist>
    <cartbottombar>

    </cartbottombar>
  </div>
</template>

<script>
import Cartbottombar from './childComps/cartbottombar.vue'
import Cartlist from './childComps/cartlist.vue'
import Cartnavbar from './childComps/cartnavbar.vue'

export default {
  components:{
    Cartnavbar,
    Cartlist,
    Cartbottombar,
  }
}
</script>

<style>
  
</style>