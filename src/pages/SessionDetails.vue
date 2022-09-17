<template>
  <q-page padding>
    <div class="row q-col-gutter-sm">
      <div class="col-6">
        <div class="text-h6 text-bold text-primary">
          Nome
        </div>
        <div class="text-body1 text-weight-medium">
          {{ session.name || '-' }}
        </div>
      </div>
      <div class="col-6">
        <div class="text-h6 text-bold text-primary">
          Valor Total
        </div>
        <div class="text-body1 text-weight-medium">
          {{ formatMoney(sessionStore.getSessionTotalValueById(sessionId)) }}
          ({{ formatMoney(getTippedValue(sessionStore.getSessionTotalValueById(sessionId))) }})
        </div>
      </div>
      <div class="col-12 row items-center">
        <div class="text-h6 text-bold text-primary">
          Gorjeta
        </div>
        <q-space />
        <q-input v-model="tipValue" type="number" inputmode="numeric" suffix="%" style="width: 50px" />
      </div>
      <div class="col-12">
        <div class="text-h6 text-bold text-primary row items-center">
          <q-btn @click="promptNewParticipant" icon="add" size="sm" color="primary" class="q-mr-sm" round />
          Participantes
        </div>
        <q-list v-if="session.participants.length > 0" class="q-mt-sm" separator>
          <q-item
            v-for="participant in session.participants"
            :key="participant.id"
            :to="{ name: 'SessionDetails', params: { sessionId: session.id } }"
            class="text-grey-10"
            clickable
          >
            <q-item-section class="text-body1 text-weight-medium">
              <q-item-label>
                {{ participant.name }}
              </q-item-label>
              <q-item-label caption>
                {{ formatMoney(sessionStore.getParticipantTotalValue(sessionId, participant.id)) }}
                ({{ formatMoney(getTippedValue(sessionStore.getParticipantTotalValue(sessionId, participant.id))) }})
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                @click="openParticipantDetails(participant)"
                icon="visibility"
                round
                flat
              />
              <q-btn
                @click="attemptParticipantDelete(participant)"
                icon="delete"
                round
                flat
              />
            </q-item-section>
          </q-item>
        </q-list>
        <div class="text-grey-9 q-pa-sm" v-else>
          Nenhum participante cadastrado
        </div>
      </div>
      <div class="col-12">
        <div class="text-h6 text-bold text-primary row items-center">
          <q-btn @click="promptNewItem" icon="add" size="sm" color="primary" class="q-mr-sm" round />
          Pedidos
        </div>
        <q-list v-if="session.items.length > 0" class="q-mt-sm text-grey-9" separator>
          <q-item
            v-for="item in session.items"
            :key="item.id"
            :to="{ name: 'SessionDetails', params: { sessionId: session.id } }"
            class="text-grey-10"
            clickable
          >
            <q-item-section class="text-body1 text-weight-medium">
              <q-item-label>
                {{ item.name }}
              </q-item-label>
              <q-item-label caption>
                {{ formatMoney(item.value) }}
                ({{ formatMoney(getTippedValue(item.value)) }})
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn
                @click="editItem(item)"
                icon="edit"
                round
                flat
              />
              <q-btn
                @click="attemptItemDelete(item)"
                icon="delete"
                round
                flat
              />
            </q-item-section>
          </q-item>
        </q-list>
        <div class="text-grey-9 q-pa-sm" v-else>
          Nenhum pedido cadastrado
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'SessionDetails'
})
</script>

<script setup>
import { useRoute } from 'vue-router'
import { useSessionStore } from 'src/stores/sessionStore'
import { formatMoney } from 'src/utils/formatters'
import { useQuasar } from 'quasar'
import ItemInfoDialog from 'src/components/dialogs/ItemInfoDialog.vue'
import ParticipantDetailsDialog from 'src/components/dialogs/ParticipantDetailsDialog.vue'

const $q = useQuasar()
const $route = useRoute()

const sessionStore = useSessionStore()

const { sessionId } = $route.params
const session = computed(() => sessionStore.getSessionById(sessionId))

const promptNewParticipant = () => {
  $q.dialog({
    title: 'Novo Participante',
    prompt: {
      model: '',
      isValid: val => !!val,
      label: 'Nome'
    },
    cancel: true
  }).onOk(name => {
    sessionStore.createParticipant(session.value.id, name)
  })
}

const promptNewItem = () => {
  $q.dialog({
    component: ItemInfoDialog,
    componentProps: { sessionId }
  })
}

const editItem = (item) => {
  $q.dialog({
    component: ItemInfoDialog,
    componentProps: { sessionId, itemId: item.id }
  })
}

const attemptItemDelete = (item) => {
  $q.dialog({
    title: 'Excluir Pedido',
    message: 'Confirmar exclusão desse pedido?',
    ok: {
      label: 'Excluir',
      color: 'negative'
    },
    cancel: {
      label: 'Cancelar',
      color: 'grey',
      flat: true
    }
  }).onOk(() => {
    sessionStore.deleteItem(sessionId, item.id)
  })
}

const openParticipantDetails = (participant) => {
  $q.dialog({
    component: ParticipantDetailsDialog,
    componentProps: { sessionId, participantId: participant.id }
  })
}

const attemptParticipantDelete = (participant) => {
  $q.dialog({
    title: 'Excluir Participante',
    message: 'Confirmar exclusão desse participante?',
    ok: {
      label: 'Excluir',
      color: 'negative'
    },
    cancel: {
      label: 'Cancelar',
      color: 'grey',
      flat: true
    }
  }).onOk(() => {
    sessionStore.removeParticipantById(sessionId, participant.id)
  })
}

const tipValue = ref(10)
const getTippedValue = (value) => {
  return value + (value * (tipValue.value / 100))
}
</script>
