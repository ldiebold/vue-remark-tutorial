<template>
  <div style="margin: 0 auto; max-width: 700px;">
    <h1>{{ $page.post.title }}</h1>

    <strong>Author: </strong><span>{{ $page.post.author }}</span>

    <br />

    <span>{{ $page.post.created_at }}</span>

    <VueRemarkContent />
  </div>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
    author
    created_at
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