<script setup lang="ts">
import type { Component } from 'vue'

interface SideNavObj {
  name: string,
  component: Component,
}

defineProps<{
  sideNavObjs: SideNavObj[]
}>()
</script>

<template>
  <div class="sidenav-wrapper">
    <ul>
      <li v-for="item in sideNavObjs" v-bind:key="item.name" @click="$emit('onNavObjClicked', item)">
        {{ item.name }}
      </li>
    </ul>
  </div>

</template>

<style scoped>
.sidenav-wrapper {
  padding-right: 48px;

  ul {
    list-style-type: none;

    li {
      padding-bottom: 8px;
    }

    li:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
}
</style>