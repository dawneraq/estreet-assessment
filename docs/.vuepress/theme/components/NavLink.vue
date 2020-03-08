<template>
  <RouterLink
    v-if="isInternal"
    class="nav-link"
    :to="link"
    :exact="exact"
    @focusout.native="focusoutAction"
  >
    {{ item.text }}
  </RouterLink>
  <a
    v-else
    :href="link"
    class="nav-link external"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    <span
      v-if="!(item.text === 'Facebook' || item.text === 'Twitter')"
    >
      {{ item.text }}
    </span>
    <FaFacebook v-if="item.text === 'Facebook'"></FaFacebook>
    <FaTwitter v-if="item.text === 'Twitter'"></FaTwitter>
  </a>
</template>

<script>
import { isExternal, isMailto, isTel, ensureExt } from '../util'
import FaFacebook from '@theme/components/FaFacebook.vue'
import FaTwitter from '@theme/components/FaTwitter.vue'

export default {
  name: 'NavLink',

  components: {
    FaFacebook,
    FaTwitter
  },

  props: {
    item: {
      required: true
    }
  },

  computed: {
    link () {
      return ensureExt(this.item.link)
    },

    exact () {
      if (this.$site.locales) {
        return Object.keys(this.$site.locales).some(rootLink => rootLink === this.link)
      }
      return this.link === '/'
    },

    isNonHttpURI () {
      return isMailto(this.link) || isTel(this.link)
    },

    isBlankTarget () {
      return this.target === '_blank'
    },

    isInternal () {
      return !isExternal(this.link) && !this.isBlankTarget
    },

    target () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.target) {
        return this.item.target
      }
      return isExternal(this.link) ? '_blank' : ''
    },

    rel () {
      if (this.isNonHttpURI) {
        return null
      }
      if (this.item.rel) {
        return this.item.rel
      }
      return this.isBlankTarget ? 'noopener noreferrer' : ''
    }
  },

  methods: {
    focusoutAction () {
      this.$emit('focusout')
    }
  }
}
</script>

<style lang="stylus">
.nav-link
  padding-left 8px
  padding-right 8px
</style>