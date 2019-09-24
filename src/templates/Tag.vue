<template>
  <div>
    <h1>{{ $page.tag.id }}</h1>
    
    <div v-for="edge in $page.tag.belongsTo.edges" :key="edge.node.id">
      <g-link :to="edge.node.path">{{ edge.node.title }}</g-link>
    </div>
  </div>
</template>

<page-query>
query Tag($id: ID!) {
  tag(id: $id) {
    id
    belongsTo {
      edges {
        node {
          ... on Post {
            title
            path
          }
        }
      }
    }
  }
}
</page-query>

<script>

export default {
  props: {

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