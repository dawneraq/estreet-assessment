<!-- TODO Add (responsive) styles, maybe with Bootstrap utility classes? -->
<template>
  <footer id="page-footer">
    <div>
      <span class="logo">
        Cindy Lerner
      </span>
      <div class="button-container">
        <a>Contribute</a>
        <a>Volunteer</a>
      </div>
      <div class="social-media-links">
        <ul>
          <li>
            <a href="http://www.facebook.com/Cindyfordistrict7">Facebook</a>
          </li>
          <li>
            <a href="http://www.twitter.com/CindyforDst7">Twitter</a>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about/">Meet Cindy</a></li>
        <li><a href="/priorities/">Priorities</a></li>
        <li><a href="/contact/">Contact</a></li>
        <li><a href="/district/">District</a></li>
      </ul>
      <span class="disclaimer">
        POLITICAL ADVERTISEMENT PAID FOR AND APPROVED BY CINDY LERNER FOR COUNTY COMMISSION DISTRICT 7
      </span>
      <a href="https://dawneraq.github.io">
        Website by Andrew Aquino
      </a>
    </div>
  </footer>
</template>

<style lang="stylus">

footer#page-footer
  background $accentColor
  color white

  a
    color white
    opacity 0.76
    &:hover
      opacity 1

</style>