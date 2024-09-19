<script setup lang="ts">

interface Source {
  name: string,
  url: string,
}

defineProps<{
  sources: Source[]
}>()
</script>

<template>
  <div>
    <b>Sources: </b>
    <a v-for="item in sources" v-bind:key="item.url" :href="item.url">{{item.name}}</a>
  </div>
</template>

<style scoped>
div {
  padding-top: 25px;
}
</style>