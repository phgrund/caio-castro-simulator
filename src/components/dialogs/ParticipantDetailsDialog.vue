<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section class="text-h6">
        Pedidos de {{ participant.name }}
      </q-card-section>
      <q-card-section>
        <q-list v-if="items.length > 0" class="q-mt-sm" separator>
          <q-item
            v-for="item in items"
            :key="item.id"
            class="text-grey-10"
            clickable
          >
            <q-item-section class="text-body1 text-weight-medium">
              <q-item-label>
                {{ item.name }}
              </q-item-label>
              <q-item-label caption>
                {{ formatMoney(sessionStore.getParticipantTotalValue(sessionId, participantId)) }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              {{ formatMoney(item.value) }}
            </q-item-section>
          </q-item>
        </q-list>
        <div class="text-grey-9 q-pa-sm" v-else>
          Nenhum pedido cadastrado
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="grey" label="Fechar" @click="onDialogCancel" padding="sm md" flat />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from 'quasar'
import { useSessionStore } from 'src/stores/sessionStore'
import { computed } from 'vue'
import { formatMoney } from 'src/utils/formatters'

const props = defineProps({
  sessionId: {
    type: String,
    required: true
  },
  participantId: {
    type: String,
    required: true
  }
})

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, /* onDialogOK, */ onDialogCancel } = useDialogPluginComponent()

const sessionStore = useSessionStore()

const items = computed(() => sessionStore.getParticipantItemsById(props.sessionId, props.participantId))
const participant = computed(() => sessionStore.getParticipantById(props.sessionId, props.participantId))
</script>
