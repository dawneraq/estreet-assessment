<template>
  <footer id="page-footer" class="row no-gutters">
    <div class="col-12 col-md-4 px-4">
      <div class="logo"></div>
      <div id="button-container" class="w-100 my-5">
        <a
          href="https://secure.ngpvan.com/vzmYqShz10Sf6bl63BQOJw2"
          class="btn btn-lg btn-block btn-primary mb-3 py-3 font-weight-bold"
        >
          CONTRIBUTE
        </a>
        <a
          href="https://secure.ngpvan.com/2ZxFe8eFoU6k8Azuj2Icdw2"
          class="btn btn-lg btn-block btn-secondary py-3 font-weight-bold"
        >
          VOLUNTEER
        </a>
      </div>
      <ul id="social-media-links" class="list-inline">
        <li class="list-inline-item">
          <a href="http://www.facebook.com/Cindyfordistrict7">
          <FaFacebook></FaFacebook>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="http://www.twitter.com/CindyforDst7">
            <FaTwitter></FaTwitter>
          </a>
        </li>
        <li class="list-inline-item">
          <a href="http://instagram.com/cindyfordistrict7">
            <FaInstagram></FaInstagram>
          </a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-8 px-5 text-center">
      <ul id="footer-nav" class="list-inline mb-0">
        <li class="list-inline-item"><RouterLink :to="'/'">Home</RouterLink></li>
        <li class="list-inline-item"><RouterLink :to="'/about/'">Meet Cindy</RouterLink></li>
        <li class="list-inline-item"><RouterLink :to="'/priorities/'">Priorities</RouterLink></li>
        <!-- TODO Add District page, with map from bottom of cindylerner.com/district-priorities -->
        <!-- <li class="list-inline-item"><RouterLink :to="'/district/'">District</RouterLink></li> -->
      </ul>
      <ul id="contact-info" class="list-unstyled my-5">
        <li>
          <a href="mailto:cindy@cindylerner.com">cindy@cindylerner.com</a>
        </li>
        <li>
          <a href="tel:+13059923433">305.992.3433</a>
        </li>
      </ul>
      <span id="disclaimer" class="px-4 py-2">
        POLITICAL ADVERTISEMENT PAID FOR AND APPROVED BY CINDY LERNER FOR COUNTY COMMISSION DISTRICT 7
      </span>
      <a href="https://dawneraq.github.io" id="author-link" class="mt-5 text-decoration-none">
        Website by Andrew Aquino
      </a>
    </div>
  </footer>
</template>

<script>
import FaFacebook from '@theme/components/FaFacebook.vue'
import FaTwitter from '@theme/components/FaTwitter.vue'
import FaInstagram from '@theme/components/FaInstagram.vue'

export default {
  name: 'PageFooter',

  components: {
    FaFacebook,
    FaTwitter,
    FaInstagram
  }
}
</script>

<style lang="stylus">
$leftContentWidth = 295px

footer#page-footer
  background $accentColor
  color white
  > div
    display flex
    flex-direction column
    justify-content center
    align-items center
    height 580px
    &:first-child
      background $primaryColor
    .logo
      width 100%
      height 90px
      max-width $leftContentWidth
      background-image url("../../public/logo-white.png")
      background-size contain
      background-repeat no-repeat
      background-position center
    #button-container
      max-width $leftContentWidth
      .btn
        box-shadow 7px 7px 17px 0px rgba(0,0,0,.1)
      .btn-primary
        background-color $lightColor
      .btn-secondary
        background-color $accentColor
    #social-media-links > li:not(:last-child)
      margin-right 13px
    .fontawesome-container
      // Setting width and height doesn't work for some reason, so resort to this hacky solution
      padding-top 8px
      padding-bottom 8px
      padding-left 12px
      padding-right 12px
      border-radius 50%
      border 2px solid white
    #footer-nav
      li
        margin-left calc(31px/2)
        margin-right calc(31px/2)
        a
          font-weight 900
          &:hover
            text-decoration none
    #contact-info
      opacity 0.59
    #disclaimer
      opacity 0.73
      border 3px solid rgba(255, 255, 255, 0.23)
      max-width 350px
    #author-link
      opacity 0.3
      text-transform uppercase
  a:not(.btn)
    color white
    opacity 0.76
    &:hover
      opacity 1

</style>