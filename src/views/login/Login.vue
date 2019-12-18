 <template>
  <div class="login">
    <a-form :form="form" @submit="handleSubmit" class="login_form">
      <h3 class="login_title">YSHOP 后台管理系统</h3>
      <a-form-item >
        <a-input
          v-decorator="['username', { rules: [{ required: true, message: '用户名不能为空' }] }]"
        >
         <a-icon slot="prefix" type="user" />
        </a-input>
      </a-form-item>
      <a-form-item >
        <a-input
          v-decorator="['password', { rules: [{ required: true, message: '密码不能为空' }] }]"
        >
         <a-icon slot="prefix" type="lock" />
        </a-input>
      </a-form-item>
      
      <a-form-item style="text-align:center;">
        <a-button type="primary" html-type="submit" style="width:100%;">登录</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
export default {
  name: "login",
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" })
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
    handleSelectChange(value) {
      console.log(value);
      this.form.setFieldsValue({
        note: `Hi, ${value === "male" ? "man" : "lady"}!`
      });
    }
  }
};
</script>
<style lang="less" rel="stylesheet/less" scoped>
@import "../../assets/css/index.less";
.login {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  background-image: url(./img/bg.jpg);
  background-size: cover;
}
.login_form {
  border-radius: 6px;
  background: #fff;
  width: 300px;
  padding: 25px 25px 5px;
}
.login_title {
    margin: 0 auto 30px;
    text-align: center;
    color: #707070;
}
</style>
