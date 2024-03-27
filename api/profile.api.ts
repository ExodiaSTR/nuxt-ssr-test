import { PostSerializer, CommentSerializer, ProfileSerializer } from '@/serializer/profile'


async function getPosts() {
  try {
    const { data } = await useMyFetch<[]>('/posts')

    return data.value?.map(el => PostSerializer(el))
  }
  catch (e) {
    console.log('error', e)
  }
}

async function getComments() {
  try {
    const { data } = await useMyFetch<[]>('/comments')

    return data.value?.map(el => CommentSerializer(el))
  }
  catch (e) {
    console.log('error', e)
  }
}

async function getProfile() {
  try {
    const { data } = await useMyFetch<[]>('/profile')

    return data.value?.map(el => ProfileSerializer(el))
  }
  catch (e) {
    console.log('error', e)
  }
}

export { getPosts, getComments, getProfile }
