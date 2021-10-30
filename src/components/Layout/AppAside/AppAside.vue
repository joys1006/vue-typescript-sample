<template>
  <a-layout-sider id="Aside" v-model="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item key="1">
        <router-link :to="{ name: 'Home' }">
          <a-icon type="user" />
          <span>Home</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link :to="{ name: 'About' }">
          <a-icon type="video-camera" />
          <span>About</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" src="@/components/Layout/AppAside/AppAside.ts" />
