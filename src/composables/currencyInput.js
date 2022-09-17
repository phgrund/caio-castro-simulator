export const useCurrencyInputProps = () => ({
  modelValue: [Number, String],
  disable: {
    type: Boolean,
    default: false
  },
  inputClass: {
    type: [String, Array, Object]
  },
  inputStyle: {
    type: [String, Array, Object]
  },
  filled: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },
  rules: {
    type: Array,
    default: () => []
  },
  lazyRules: {
    type: Boolean,
    default: true
  },
  readonly: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
  },
  options: {
    type: Object,
    default: () => ({})
  },
  hideBottomSpace: {
    type: Boolean,
    default: true
  }
})
