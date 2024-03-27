<template>
  <div class="layout">
    <header>
      <h1 class="layout__title">
        Posts
      </h1>
    </header>

    <div class="slot">
      <slot />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.layout {
  margin: 2rem;

  &__title {
    font-size: 32px;
  }
}

.slot {
  margin-top: 2rem;
}
</style>