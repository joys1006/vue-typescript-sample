<template>
  <a-layout id="App">
    <router-view name="Aside" />
    <a-layout id="container">
      <router-view name="Header" />
      <a-layout-content id="content">
        <router-view name="Contents" />
      </a-layout-content>
      <router-view name="Footer" />
    </a-layout>
  </a-layout>
</template>

<script lang="ts" src="./App.ts" />

<style lang="scss">
@import 'assets/sass/main.scss';
</style>
