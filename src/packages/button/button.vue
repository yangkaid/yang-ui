<template>
  <button
    class="yang-button"
    :class="{ [`yang-button-${type}`]: true, [`yang-button-${size}`]:true }"
    type="button"
    size="default"
  >
    <slot></slot>
  </button>
</template>

<script>
import { oneOf } from "../../utils/assist";
export default {
    name:'Button',
    props:{
        type:{
            validator(value) {
                return oneOf(value,['default', 'primary', 'dashed', 'text', 'info', 'success', 'warning', 'error']);
            },
            type:String,
            default:'default'
        },
        size:{
            validator(value) {
                return oneOf(value,['small','large','default']);
            },
            default:'default'
        }
    }
};
</script>

<style lang="scss" scoped>
@import '../../styles/button.scss'

</style>