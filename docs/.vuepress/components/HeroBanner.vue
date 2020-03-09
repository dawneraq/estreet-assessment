<template>
  <div
    class="hero-banner w-100 d-flex"
    v-bind:class="{ 'about': heading === 'Meet Cindy', 'has-image': backgroundImage }"
    :style="style"
  >
    <div class="content ml-4 mb-4">
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
      let computedStyle = 'height: ' + (this.backgroundImage ? 434 : 362) + 'px;';

      if (this.backgroundImage) {
        computedStyle += 'background-image: url(' + this.backgroundImage + ');';
      }

      return computedStyle;
    }
  }
}
</script>

<style lang="stylus">
.hero-banner
  margin-bottom 7rem
  background-color $primaryColor
  text-align center
  justify-content center
  align-items center
  &.has-image
    text-align left
    justify-content left
    align-items flex-end
    background-repeat: no-repeat;
    background-size: cover;
  &.about
    background-position-y 20%
  .content
    width 480px
</style>