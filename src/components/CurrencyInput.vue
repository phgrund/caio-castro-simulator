<template>
  <input ref="inputRef" :disabled="disable" />
</template>

<script>
import { watch } from 'vue'
import { useCurrencyInput } from 'vue-currency-input'

export default {
  name: 'CurrencyInput',
  props: {
    modelValue: Number,
    options: Object,
    disable: Boolean
  },
  setup (props) {
    const { inputRef, setOptions, setValue } = useCurrencyInput(props.options)

    watch(
      () => props.modelValue,
      (value) => {
        setValue(value)
      }
    )

    watch(
      () => props.options,
      (options) => {
        setOptions(options)
      }
    )

    return { inputRef }
  }
}
</script>
