<template>
  <button
    :class="[
      'lv-button',
      type ? 'lv-button--' + type : '',
      buttonSize ? 'lv-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    @click="handleClick"
  >
    <i v-if="loading" class="lv-icon-loading"></i>
    <i v-if="icon && !loading" :class="icon"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
<script lang="ts">

import { computed, inject, defineComponent } from 'vue'
import { isValidComponentSize } from '../../../utils/validators'
import { useGlobalConfig } from '../../../utils/util'
// import { elFormKey, elFormItemKey } from '@element-plus/form'

import type { PropType } from 'vue'
import type { ButtonType, ButtonNativeType } from './types'

var elFormKey = 'elForm'
var elFormItemKey = 'elFormItem'

export default defineComponent ({
  name: 'LvButton',
  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: 'default',
      validator: (val: string) => {
        return [
          'default',
          'primary',
          'success',
          'warning',
          'info',
          'danger',
          'text',
        ].includes(val)
      },
    },
    size: {
      type: String,
      validator: isValidComponentSize,
    },
    icon: {
      type: String,
      default: '',
    },
    nativeType: {
      type: String,
      default: 'button',
      validator: (val) => {
        return ['button', 'submit', 'reset'].includes(val)
      },
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean,
  },

  emits: ['click'],

  setup(props, ctx) {
    const $ELEMENT = useGlobalConfig()

    const elForm = inject(elFormKey, {} )
    const elFormItem = inject(elFormItemKey, {})

    const buttonSize = computed(() => {
      return props.size || elFormItem.size || $ELEMENT.size
    })
    const buttonDisabled = computed(() => {
      return props.disabled || elForm.disabled
    })

    //methods
    const handleClick = evt => {
      ctx.emit('click', evt)
    }

    return {
      buttonSize,
      buttonDisabled,
      handleClick,
    }
  },
})
</script>