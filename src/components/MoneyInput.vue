<template>
  <q-field
    :model-value="modelVal"
    :autofocus="autofocus"
    :disable="disable"
    :rules="rules"
    :lazy-rules="lazyRules"
    :rounded="rounded"
    :label="label"
    :readonly="readonly"
    :filled="filled"
    :hide-bottom-space="hideBottomSpace"
    style="overflow: hidden"
  >
    <template #control="{ id, floatingLabel }">
      <currency-input
        v-model="modelVal"
        :id="id"
        v-show="floatingLabel"
        :options="computedOptions"
        class="q-field__input"
        :class="inputClass"
        :disable="disable"
      />
    </template>
  </q-field>
</template>

<script>
import { defineComponent, computed } from 'vue'

import { useCurrencyInputProps } from 'src/composables/currencyInput'

import CurrencyInput from 'src/components/CurrencyInput.vue'

const defaultOptions = {
  currency: 'BRL',
  locale: 'pt-BR',
  autoDecimalDigits: true,
  hideCurrencySymbolOnFocus: false,
  hideGroupingSeparatorOnFocus: false,
  hideNegligibleDecimalDigitsOnFocus: false
}

export default defineComponent({
  name: 'MoneyInput',
  components: { CurrencyInput },
  props: {
    ...useCurrencyInputProps()
  },
  setup (props, { emit }) {
    const modelVal = computed({
      get: () => props.modelValue,
      set: (newValue) => emit('update:model-value', newValue)
    })

    modelVal.value = isNaN(modelVal.value) ? 0 : Number(modelVal.value)

    const computedOptions = computed(() => {
      return {
        ...defaultOptions,
        ...props.options
      }
    })

    return {
      modelVal,
      computedOptions
    }
  }
})
</script>
