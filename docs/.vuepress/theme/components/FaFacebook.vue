<template>
  <span>
    <font-awesome-icon :icon="theIcon"></font-awesome-icon>
  </span>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook);

export default {
  name: 'FaFacebook',
  components: { FontAwesomeIcon },
  computed: {
    theIcon() { return faFacebook; }
  }
}
</script>