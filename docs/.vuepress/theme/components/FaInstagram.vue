<template>
  <span class="fontawesome-container">
    <font-awesome-icon :icon="theIcon"></font-awesome-icon>
  </span>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faInstagram);

export default {
  name: 'FaInstagram',
  components: { FontAwesomeIcon },
  computed: {
    theIcon() { return faInstagram; }
  }
}
</script>