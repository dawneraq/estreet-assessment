<template>
  <footer id="page-footer" class="row no-gutters">
    <div class="col-12 col-md-4">
      <!-- TODO Add real logo -->
      <span class="logo">
        Cindy Lerner
      </span>
      <!-- TODO Override Bootstrap theme colors (using Stylus) -->
      <div class="button-container my-5">
        <a class="btn btn-lg btn-block btn-primary mb-3 py-3 font-weight-bold">CONTRIBUTE</a>
        <a class="btn btn-lg btn-block btn-secondary py-3 font-weight-bold">VOLUNTEER</a>
      </div>
      <!-- TODO Turn these into icons -->
      <ul class="social-media-links list-inline">
        <li class="list-inline-item">
          <a href="http://www.facebook.com/Cindyfordistrict7">Facebook</a>
        </li>
        <li class="list-inline-item">
          <a href="http://www.twitter.com/CindyforDst7">Twitter</a>
        </li>
        <li class="list-inline-item">
          <a href="http://instagram.com/cindyfordistrict7">Instagram</a>
        </li>
      </ul>
    </div>
    <div class="col-12 col-md-8 text-center">
      <ul class="footer-nav list-inline mb-0">
        <li class="list-inline-item"><a href="/">Home</a></li>
        <li class="list-inline-item"><a href="/about/">Meet Cindy</a></li>
        <li class="list-inline-item"><a href="/priorities/">Priorities</a></li>
        <li class="list-inline-item"><a href="/contact/">Contact</a></li>
        <li class="list-inline-item"><a href="/district/">District</a></li>
      </ul>
      <ul class="contact-info list-unstyled my-5">
        <li>
          <a href="mailto:cindy@cindylerner.com">cindy@cindylerner.com</a>
        </li>
        <li>
          <a href="tel:+13059923433">305.992.3433</a>
        </li>
      </ul>
      <span class="disclaimer px-4 py-2">
        POLITICAL ADVERTISEMENT PAID FOR AND APPROVED BY CINDY LERNER FOR COUNTY COMMISSION DISTRICT 7
      </span>
      <a href="https://dawneraq.github.io" class="author-link mt-5">
        Website by Andrew Aquino
      </a>
    </div>
  </footer>
</template>

<style lang="stylus">

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
      background lighten($accentColor, 10%)
    .button-container
      width 295px
    .footer-nav
      li
        margin-left calc(31px/2)
        margin-right calc(31px/2)
        a
          font-weight 900
          &:hover
            text-decoration none
    .contact-info
      opacity 0.59
    .disclaimer
      opacity 0.73
      border 3px solid rgba(255, 255, 255, 0.23)
    .author-link
      opacity 0.3

  a
    color white
    opacity 0.76
    &:hover
      opacity 1

</style>