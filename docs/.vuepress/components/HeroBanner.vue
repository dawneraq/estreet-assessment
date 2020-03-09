<template>
  <div
    class="hero-banner w-100 text-center d-flex align-items-center justify-content-center"
    :style="style"
  >
    <div class="content">
      <p class="lead text-light">{{ secondaryText }}</p>
      <h1 class="text-white">{{ heading }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroBanner',
  props: ['heading', 'secondaryText', 'backgroundImage'],
  computed: {
    style() {
      return 'height: ' + (this.backgroundImage ? 434 : 362) + 'px';
    }
  }
}
</script>

<style lang="stylus">
.hero-banner
  margin-bottom 7rem
  background-color $primaryColor
  .content
    width 480px
</style>