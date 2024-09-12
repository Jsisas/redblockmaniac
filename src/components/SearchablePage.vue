<script setup lang="ts">
import type { Component } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{
  objs: [{
    name: string,
    path: string
  }]
}>()
</script>

<template>
  <RouterLink v-for="item in objs" v-bind:key="item.name" :to="'/b230/' + item.path">{{item.name}}</RouterLink>
</template>

<style scoped>

</style>