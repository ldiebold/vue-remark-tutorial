<template>
  <div :style="`border: 2px solid ${color}; padding: 18px;`">
    <h1>sdfsdf</h1>
    <slot />
  </div>
</template>

<script>


export default {
  props: {
    color: {
      required: false,
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