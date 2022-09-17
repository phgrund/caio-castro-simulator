<template>
  <q-layout view="hHh lpr fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title class="text-center">
          <router-link :to="{ name: 'Home' }" class="text-white" style="text-decoration: none">
            <q-img width="50px" src="~assets/caio_castro.png" />
            Caio Castro Simulator
          </router-link>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>
