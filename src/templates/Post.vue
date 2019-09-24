<template>
  <div style="margin: 0 auto; max-width: 700px;">
    <h1>{{ $page.post.title }}</h1>

    <strong>Author: </strong><span>{{ $page.post.author }}</span>

    <br />

    <span>{{ $page.post.created_at }}</span>

    <br />

    <strong>Tags: </strong>

    <span
      v-for="tag in $page.post.tags"
      :key="tag.id"
      :style="`background: ${tag.color}; border-radius: 4px; margin: 12px; padding: 4px;`"
    >
      <g-link :to="tag.path">{{ tag.id }}</g-link>
    </span>

    <VueRemarkContent>
      <template v-slot:ad>
        <Ad />
      </template>
    </VueRemarkContent>
  </div>
</template>

<page-query>
query Post($id: ID!) {
  post(id: $id) {
    title
    author
    created_at
    tags {
      id
      color
      path
    }
  }
}
</page-query>

<script>
import Ad from '../components/Ad'

export default {
  props: {

  },

  components: {
    Ad,
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