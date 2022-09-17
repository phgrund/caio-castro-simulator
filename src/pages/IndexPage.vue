<template>
  <q-page padding>
    <q-list v-if="sessions.length > 0" bordered separator>
      <q-item
        v-for="session in sessions"
        :key="session.id"
        :to="{ name: 'SessionDetails', params: { sessionId: session.id } }"
        clickable
      >
        <q-item-section class="text-body1 text-weight-medium ellipsis">
          {{ session.name }}
        </q-item-section>
        <q-item-section side>
          <q-chip color="primary" text-color="white">
            {{ formatMoney(sessionStore.getSessionTotalValueById(session.id)) }}
          </q-chip>
        </q-item-section>
      </q-item>
    </q-list>
    <div v-else class="text-center text-grey-9">
      Nenhuma sessão cadastrada
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn @click="promptNewSession" fab icon="add" color="secondary" unelevated />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>

<script setup>
import { useSessionStore } from 'src/stores/sessionStore'
import { useQuasar } from 'quasar'
import { formatMoney } from 'src/utils/formatters'

const $q = useQuasar()

const sessionStore = useSessionStore()

const sessions = computed(() => sessionStore.getSessions)

const promptNewSession = () => {
  $q.dialog({
    title: 'Nova Sessão',
    prompt: {
      model: '',
      isValid: val => !!val
    },
    cancel: true,
    persistent: true
  }).onOk(name => {
    sessionStore.createSession(name)
  })
}
</script>
