<script setup lang="ts">
import Vacuum from '@/components/b230/literature/Vacuum.vue'
import { type Component, ref } from 'vue'
import Sidenav from '@/components/b230/Sidenav.vue'
import InjectorEctSensor from '@/components/b230/literature/InjectorEctSensor.vue'
import O2Sensor from '@/components/b230/literature/O2Sensor.vue'

const selectedComponent: Component = ref(null)
</script>

<template>
  <h1>B230</h1>
  <div style="">
    <Sidenav
      :side-nav-objs="[
        { name: 'Vacuum', component: Vacuum },
        { name: 'Injector ECT', component: InjectorEctSensor },
        { name: 'O2 Sensor', component: O2Sensor }
      ]"
      @onNavObjClicked="(item) => (selectedComponent = item.component)"
    ></Sidenav>

    <div class="content">
      <component v-bind:is="selectedComponent"></component>
    </div>
  </div>
</template>

<style scoped></style>
