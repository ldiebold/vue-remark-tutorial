<template>
  <button :style="`padding: 22px; background: ${color}`">
    Big Button
  </button>
</template>

<script>


export default {
  props: {
    color: {
      type: String,
      default: 'black',
    }
  },

  components: {

  },

  computed: {

  },

  methods: {
    
  },

  data() {
    return {
      
    }
  },
}

</script>