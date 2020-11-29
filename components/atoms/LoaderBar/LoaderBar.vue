<template>
  <div class="loader">
    <div class="bar" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component
export default class LoaderBar extends Vue {
}
</script>
<style>
@keyframes loader-animation {
    0% {
        width: 0%;
    }
    100% {
        width: 100%;
        left: 0%
    }
}
.loader {
    height: 5px;
    width: 100%;
}
.loader .bar {
    position: relative;
    height: 5px;
    background-color: #007bff;
    animation-name: loader-animation;
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in;
}
</style>
