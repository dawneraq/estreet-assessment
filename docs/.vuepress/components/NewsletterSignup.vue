<template>
  <div
    class="newsletter-signup"
    :style="style"
  >
    <div class="container h-100 d-flex align-items-center">
      <div id="signup-content" class="text-center">
        <p class="lead text-light">{{ secondaryText }}</p>
        <h1 class="text-white mb-3">{{ heading }}</h1>
        <form class="container-fluid p-0">
          <div class="row no-gutters">
            <input type="text" placeholder="Name" required>
            <input type="text" placeholder="Email" required>
          </div>
          <button class="btn btn-lg btn-block btn-light">
            GET INVOLVED
          </button>
        </form>
      </div>
    </div>
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
  #signup-content
    width 370px
    input
      width 50%
      &:not(:last-child)
        border-right 1px solid rgb(210, 210, 210)
    button
      height 60px
      margin-top 10px
</style>