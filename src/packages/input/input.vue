<template>
  <div class="yang-input-container">
    <input
      type="text"
      class="yang-input"
      :class="inputClass"
      @input="handleInput"
      @blur="handleBlur"
      :value="value"
    />
  </div>
</template>

<script>
import { oneOf } from "../../utils/assist";
import Emitter from "../../mixins/emitter";
export default {
  name: "YInput",
  mixins: [Emitter],
  props: {
    value: {
      type: String,
      default: "",
    },
    size: {
      validator: (value) => {
        return oneOf(value, ["small", "large", "default"]);
      },
      default: "default",
    },
  },
  data() {
    return {
      currentValue: this.value,
    };
  },
  watch: {
    value(v) {
      this.currentValue = v;
    },
  },
  computed: {
    inputClass() {    
      const prefix = "yang-input";
      return {
        [`${prefix}-${this.size}`]: true,
      };
    },
  },
  methods: {
    handleInput(_event) {
      console.log(_event);
      const value = _event.target.value;
      this.currentValue = value;
      this.$emit("input", value);
      this.dispatch("lFormItem", "on-form-change", value); // 通知FormItem值有所改变
    },
    handleBlur() {
      this.dispatch("lFormItem", "on-form-blur", this.currentValue);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/input.scss'
</style>