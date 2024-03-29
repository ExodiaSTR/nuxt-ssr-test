export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path === '/') {
    // setting the redirect code to '301 Moved Permanently'
    return navigateTo('/post/1', { redirectCode: 301 })
  }
})