<template>
  <div class="campaign-media">
    <div class="text-center">
      <p class="lead">The Latest</p>
      <h2>From the Campaign</h2>
    </div>
    <div class="row">
      <div
        v-for="(post, index) in posts"
        class="social-media-post-column col-12 col-md-4 mb-4"
      >
        <a
          v-bind:href="post.url"
          target="_blank"
          class="text-decoration-none"
        >
          <div class="social-media-post-card text-white p-4 d-flex flex-column justify-content-between">
            <!-- TODO Add .far.fa-newspaper -->
            <FaFacebook v-if="post.source === 'Facebook'"></FaFacebook>
            <FaTwitter v-if="post.source === 'Twitter'"></FaTwitter>
            <p>{{ truncateText(post.text) }}</p>
            <small class="timestamp">{{ post.timestamp }}</small>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import FaFacebook from '@theme/components/FaFacebook.vue'
import FaTwitter from '@theme/components/FaTwitter.vue'

export default {
  name: 'CampaignMedia',
  components: {
    FaFacebook,
    FaTwitter
  },
  data() {
    return {
      posts: [
        {
          source: 'Press',
          text: 'South Florida’s leaders must take bold action now to save the region from the threats posed by the warming climate',
          timestamp: '3 months ago',
          url: 'https://www.theinvadingsea.com/2019/12/11/south-floridas-leaders-must-take-bold-action-now-to-save-the-region-from-the-threats-posed-by-the-warming-climate/'
        },
        {
          source: 'Twitter',
          text: 'Tremendously important legislation to assure our tax dollars are invested with SLR planning in place ! Congratulations for getting it through the Fl Senate.',
          timestamp: '2 days ago',
          url: 'https://twitter.com/CindyforDst7/status/1236450511815159809'
        },
        {
          source: 'Facebook',
          text: 'League of Women Voters of Miami -Dade County 100th Anniversary celebrated at the #WomenWhoShine event. #Vote2020 Congratulations To the Women Honorees ; Marie Osborne for Lifetime Achievement , Carole Ann Taylor, Michelle Marie Ortiz, and Valencia Gunder. A ballroom FULL of extraordinary women !',
          timestamp: '9 days ago',
          url: 'https://www.facebook.com/CindyforDistrict7/posts/505135493519162'
        }
      ]
    }
  },
  methods: {
    truncateText(text) {
      const maxChars = 140;
      return (text.length < maxChars) ? text : text.substring(0, 140) + '...';
    }
  }
}
</script>

<style lang="stylus">
.campaign-media
  width 94%
  margin-top 7rem
  margin-left auto
  margin-right auto
  .social-media-post-column
    &:nth-child(3n+1) .social-media-post-card
      background $darkColor
    &:nth-child(3n+2) .social-media-post-card
      background $primaryColor
    &:nth-child(3n) .social-media-post-card
      background $lightColor
    .social-media-post-card
      height 460px
      transition .3s
      &:hover
        background $secondaryColor
        transform translateY(-6px)
      p
        font-weight bold
      .timestamp
        text-transform uppercase
</style>