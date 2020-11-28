<template>
  <div
    :class="{ 'is-active': isActive }"
    class="hamburger hamburger--elastic"
    type="button"
    aria-label="Menu"
    aria-controls="navigation"
    @click="toggleActive"
  >
    <span class="hamburger-box">
      <span class="hamburger-inner" />
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Emit } from 'nuxt-property-decorator'

@Component
export default class BurgerIcon extends Vue {
  isActive: boolean = false;

  @Emit()
  toggleActive (): boolean {
    this.isActive = !this.isActive
    return this.isActive
  }
}
</script>

<style>
/*!
 * Hamburgers
 * @description Tasty CSS-animated hamburgers
 * @author Jonathan Suh @jonsuh
 * @site https://jonsuh.com/hamburgers
 * @link https://github.com/jonsuh/hamburgers
 */
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; }
  .hamburger:hover {
    opacity: 0.7; }
  .hamburger.is-active:hover {
    opacity: 0.7; }
  .hamburger.is-active .hamburger-inner,
  .hamburger.is-active .hamburger-inner::after {
    background-color: white; }

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; }

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; }
  .hamburger-inner, .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: white;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease; }
  .hamburger-inner::after {
    content: "";
    display: block; }

/*
   * Elastic
   */
.hamburger--elastic .hamburger-inner {
  top: 2px;
  transition-duration: 0.275s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55); }
  .hamburger--elastic .hamburger-inner::after {
    top: 20px;
    transition: transform 0.275s cubic-bezier(0.68, -0.55, 0.265, 1.55); }

.hamburger--elastic.is-active .hamburger-inner {
  transform: translate3d(0, 10px, 0) rotate(135deg);
  transition-delay: 0.075s; }
  .hamburger--elastic.is-active .hamburger-inner::after {
    transform: translate3d(0, -20px, 0) rotate(-270deg);
    transition-delay: 0.075s; }

</style>
