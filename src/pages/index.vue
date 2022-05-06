<script setup lang="ts">
import { useUser } from '~/composables/useUser'
const { loggedIn, user, logout } = useUser()
</script>

<template>
  <router-link v-if="!loggedIn" to="Login">
    Login
  </router-link>
  <router-link v-if="loggedIn" to="Login" @click.prevent="logout">
    Logout ({{ user.username }})
  </router-link>
  <div>
    <div i-carbon-campsite text-4xl inline-block />
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse-lite" target="_blank">
        Vitesse Lite
      </a>
    </p>
    <div py-4 />
  </div>
</template>
