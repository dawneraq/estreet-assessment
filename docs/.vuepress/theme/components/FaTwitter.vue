<template>
  <span class="fontawesome-container">
    <font-awesome-icon :icon="theIcon"></font-awesome-icon>
  </span>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

library.add(faTwitter);

export default {
  name: 'FaTwitter',
  components: { FontAwesomeIcon },
  computed: {
    theIcon() { return faTwitter; }
  }
}
</script>