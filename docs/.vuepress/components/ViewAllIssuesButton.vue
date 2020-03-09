<template>
  <div class="row">
    <RouterLink
      :to="'/priorities/'"
      class="view-all-issues-button btn btn-lg btn-light mx-auto mt-5 py-3"
    >
      VIEW ALL ISSUES
    </RouterLink>
  </div>
</template>

<style lang="stylus">
.btn.view-all-issues-button
  width 374px
  color $primaryColor
  box-shadow none
  &:hover
    background-color $primaryColor !important
</style>