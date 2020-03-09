<template>
  <div
    class="newsletter-signup"
    :style="style"
  >
    <p class="lead text-light">{{ secondaryText }}</p>
    <h1 class="text-white">{{ heading }}</h1>
    <form>
      <input type="text" placeholder="Name">
      <input type="text" placeholder="Email">
      <button class="btn btn-lg btn-light">
        GET INVOLVED
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NewsletterSignup',
  props: ['heading', 'secondaryText', 'backgroundImage'],
  computed: {
    style() {
      return 'background-image: url(' + this.backgroundImage + ')';
    }
  }
}
</script>

<style lang="stylus">
.newsletter-signup
  background-size cover
  background-repeat no-repeat
  background-position center
  width 100%
  // slot="page-top"
  &:first-of-type
    height 715px
    margin-top: 3rem
  // slot="page-bottom"
  &:last-of-type
    height 565px
    margin-bottom -2rem
</style>