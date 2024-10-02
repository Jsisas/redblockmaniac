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
    <b v-if="sources.length > 1">Sources:</b>
    <b v-else>Source: </b>
    <a v-for="item in sources" v-bind:key="item.url" :href="item.url">{{item.name}}</a>
  </div>
</template>

<style scoped>
</style>