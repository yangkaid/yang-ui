<template>
  <div class="example">
    <YButton type="success" @click.native="addNotice">提交</YButton>
    <div>
      <YInput :value="msg" @input="Listening"></YInput>
      <p>{{ msg }}</p>
    </div>
    <div>
      <YForm :model="formData" :rules="rules">
        <YInputItem label="账号" prop="username">
          <YInput v-model="formData.username"></YInput>
        </YInputItem>
        <YInputItem label="密码" prop="password">
          <YInput v-model="formData.password"></YInput>
        </YInputItem>
      </YForm>
    </div>
  </div>
</template>

<script>
import Button from "../packages/button/button.vue";
import Input from "../packages/input/input";
import  InputItem  from "../packages/input-item/input-item";
import Form from '../packages/form/form';
export default {
  name: "Example",
  components: {
    YButton: Button,
    YInput: Input,
    YInputItem: InputItem,
    YForm: Form
  },
  data() {
    return {
      msg: "",
      formData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {required: true, trigger: 'blur'}
        ]
      }
    };
  },
  mounted() {},
  methods: {
    addNotice() {
      this.$notice({
        title: "我完成了",
        content: "我就是神",
        duration: "1",
      });
    },
    Listening(value) {
      this.msg = value;
    },
  },
};
</script>

<style lang="scss">
</style>