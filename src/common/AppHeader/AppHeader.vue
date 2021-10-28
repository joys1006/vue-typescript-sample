<template>
  <a-layout-header id="Header" style="background: #fff; padding: 0">
    <a-icon class="trigger" :type="collapsed ? 'menu-unfold' : 'menu-fold'" @click="asideToggleEvent" />
  </a-layout-header>
</template>

<script lang="ts" src="./AppHeader.ts"></script>
