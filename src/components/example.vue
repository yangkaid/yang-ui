<template>
  <div class="example">
    <YButton type="success" @click.native="addNotice">提交</YButton>
  </div>
</template>

<script>
import Button from "../packages/button/button.vue";
export default {
  name: "Example",
  components: {
    YButton: Button,
  },
  data() {
    return {};
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
  },
};
</script>

<style lang="scss">
</style>