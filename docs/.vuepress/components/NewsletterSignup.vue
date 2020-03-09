<template>
  <div
    class="newsletter-signup position-relative"
    :style="style"
  >
    <div class="container h-100 d-flex align-items-center justify-content-end">
      <div class="signup-content text-center">
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
    <div class="background-images h-100 w-100 position-absolute">
      <div class="overlay h-100 w-100 position-absolute"></div>
      <div
        v-if="heading === `It's Time for ACTION`"
        class="cindy"
      ></div>
    </div>
    <div
      v-if="heading === `It's Time for ACTION`"
      class="button-row w-100 row no-gutters"
    >
      <div class="btn-group col-8">
        <a href="https://secure.ngpvan.com/2ZxFe8eFoU6k8Azuj2Icdw2" class="btn btn-lg btn-dark">VOLUNTEER</a>
        <a href="https://secure.ngpvan.com/vzmYqShz10Sf6bl63BQOJw2" class="btn btn-lg btn-primary">DONATE</a>
        <a href="https://www8.miamidade.gov/global/service.page?Mduid_service=ser1512065909614490" class="btn btn-lg btn-light">ENROLL IN VOTE-BY-MAIL</a>
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
$ctaButtonsHeight = 78px

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
  .signup-content
    width 370px
    z-index 1
    input
      width 50%
      &:not(:last-child)
        border-right 1px solid rgb(210, 210, 210)
    button
      height 60px
      margin-top 10px
  .background-images
    top 0
    .cindy
      height 95%
      width 80%
      position absolute
      bottom 0
      background-image url("https://static.wixstatic.com/media/5a3786_cda77562733045a79b1c888c96ab6d3d~mv2.png")
      background-size contain
      background-repeat no-repeat
      background-position bottom
    .overlay
      top 0
      background-image linear-gradient(110deg,rgba(0,0,0,0) 0%,$primaryColor 100%)
      opacity .7
  .button-row
    margin-top "calc(-%s / 2)" % $ctaButtonsHeight
    .btn-group
      box-shadow -2px 5px 26px 0px rgba(0,0,0,.14)
      .btn
        box-shadow none
        height $ctaButtonsHeight
        display flex
        align-items center
        justify-content center
</style>