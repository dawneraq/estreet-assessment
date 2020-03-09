<template>
  <div
    class="newsletter-signup position-relative"
    :style="style"
  >
    <div class="container h-100 d-flex align-items-center justify-content-end">
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
    <div
      v-if="heading === `It's Time for ACTION`"
      id="cindy"
    ></div>
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
  // TODO At $MQMobile and smaller, wrap #signup-content into its own row
  // TODO Add blue gradient on the right
  #signup-content
    width 370px
    z-index 1
    input
      width 50%
      &:not(:last-child)
        border-right 1px solid rgb(210, 210, 210)
    button
      height 60px
      margin-top 10px
  #cindy
    height 95%
    width 80%
    position absolute
    bottom 0
    left 0
    background-image url("https://static.wixstatic.com/media/5a3786_cda77562733045a79b1c888c96ab6d3d~mv2.png")
    background-size contain
    background-repeat no-repeat
    background-position bottom
</style>