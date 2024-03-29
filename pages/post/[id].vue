<script setup lang="ts">
import { getPosts, getComments } from '@/api/profile.api'

const posts = await getPosts()
const comments = await getComments()
const route = useRoute()

const post = ref({
  post: posts?.[+route.params.id - 1],
  comment: comments?.[+route.params.id - 1]
})

onMounted(() => {
  if (posts?.length)
    if (+route.params.id > posts.length)
      navigateTo('/404')
})
</script>

<template>
  <h1>
    post {{ post.post?.id }}
  </h1>
  <pre>
    {{ post.post }}
  </pre>

  <h2>
    Comment {{ post.comment?.id }}
  </h2>
  <pre>
    {{ post.comment }}
  </pre>

  <div class="pagination">
    <nuxt-link :to="`/post/${id + 1}`" v-for="(post, id) in posts?.length" :key="id" class="pagination__button">
      {{ id + 1 }}
    </nuxt-link>
  </div>

</template>

<style scoped lang="postcss">
.pagination {
  display: flex;
  gap: 20px;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 10px;
    color: white;
    background-color: gray;
  }
}
</style>