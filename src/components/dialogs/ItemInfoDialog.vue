<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-form @submit="onSubmit">
        <q-card-section class="text-h6">
          Novo Item
        </q-card-section>
        <q-card-section>
          <div class="row q-col-gutter-md">
            <div class="col-12">
              <q-input
                v-model="item.name"
                label="Nome *"
                :rules="[val => !!val || 'Obrigatório']"
                hide-bottom-space
              />
            </div>
            <div class="col-6">
              <MoneyInput
                v-model="item.value"
                label="Valor *"
                :rules="[val => !!val || 'Obrigatório']"
                hide-bottom-space
              />
            </div>
            <div class="col-12">
              <div class="text-body1 q-mb-sm">
                Participantes
              </div>
              <q-list separator>
                <q-item v-for="participant in session.participants" :key="participant.id" tag="label" v-ripple>
                  <q-item-section avatar>
                    <q-checkbox v-model="item.participantsIds" :val="participant.id" color="primary" />
                  </q-item-section>
                  <q-item-section>
                    <q-item-label>{{ participant.name }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </div>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn color="grey" label="Cancelar" @click="onDialogCancel" padding="sm md" flat />
          <q-btn color="primary" label="Salvar" type="submit" padding="sm md" />
        </q-card-actions>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { useDialogPluginComponent } from 'quasar'
import { reactive } from 'vue'
import { useSessionStore } from 'src/stores/sessionStore'
import MoneyInput from '../MoneyInput.vue'
import cloneDeep from 'lodash.clonedeep'

const props = defineProps({
  sessionId: {
    type: String,
    required: true
  },
  itemId: String
})

defineEmits([...useDialogPluginComponent.emits])

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()

const sessionStore = useSessionStore()

const session = sessionStore.getSessionById(props.sessionId)

const item = reactive(cloneDeep(
  props.itemId
    ? sessionStore.getItemById(props.sessionId, props.itemId)
    : {
        name: '',
        value: 0,
        participantsIds: []
      }
))

const onSubmit = () => {
  props.itemId
    ? sessionStore.updateItem(props.sessionId, props.itemId, item.name, item.value, item.participantsIds)
    : sessionStore.createItem(props.sessionId, item.name, item.value, item.participantsIds)

  onDialogOK()
}
</script>
