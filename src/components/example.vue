<template>
  <div class="example">
    <YButton type="success" @click.native="addNotice">提交</YButton>
    <YInput :value="msg" @input="Listening"></YInput>
    <p>{{msg}}</p>
  </div>
</template>

<script>
import Button from "../packages/button/button.vue";
import Input from "../packages/input/input";
export default {
  name: "Example",
  components: {
    YButton: Button,
    YInput: Input
  },
  data() {
    return {
      msg:''
    };
  },
  mounted() {},
  methods: {
    addNotice() {
      this.$notice({
        title: "我完成了",
        content: "我就是神",
        duration: '1',
      });
    },
    Listening(value) {
      this.msg = value
    }
  },
};
</script>

<style lang="scss">
</style>