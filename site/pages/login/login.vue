<template>
  <div :class="`main login ${isMng ? 'isMng' : ''}`">
    <a-card class="login-card" :bordered="false">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="用户名密码登录">
          <a-form
            id="formLogin"
            class="user-layout-login"
            ref="formLogin"
            :form="form"
            @submit="handleSubmit"
          >
            <a-form-item v-if="!isMng">
              选择角色
              <a-radio-group
                style="margin-left: 25px;"
                name="type"
               
                >
                <a-radio value="1">
                  中心人员
                </a-radio>
                <a-radio value="2">
                  银行人员
                </a-radio>
                <a-radio value="3">
                  开发商人员
                </a-radio>
              </a-radio-group>
            </a-form-item>
            <a-form-item v-if="!isMng">
              <a-input
                size="large"
                type="text"
                placeholder="请输入身份证号码"
              >
                <div class="input-icon" slot="prefix">
                  <i class="iconfont iconcredentials_icon"></i>
                </div>
              </a-input>
            </a-form-item>
            <a-form-item v-if="!isMng">
              <a-input
                size="large"
                type="text"
                placeholder="请输入手机号码"
              >
                <template #prefix>
                  <i class="iconfont iconshoujihao"></i>
                </template>
              </a-input>
            </a-form-item>
            <a-row :gutter="16" v-if="!isMng">
              <a-col>
                <a-form-item>
                  <a-input
                    size="large"
                    type="text"
                    class="pd-0"
                    placeholder="请输入手机验证码">
                    <div class="input-icon" slot="prefix">
                      <i class="iconfont iconduanxin"></i>
                    </div>
                    <div slot="suffix">
                      <a-button style="border-radius: 5px;" type="primary" :disabled="state.sendSms" ghost @click="handleGetSmsVerifyCode">{{ !state.sendSms ? '发送手机验证码' : state.time }}</a-button>
                    </div>
                  </a-input>
                </a-form-item>
              </a-col>
            </a-row>
            <a-form-item v-if="isMng">
              <a-input
                size="large"
                type="text"
                placeholder="请输入登录用户名"
              >
                <template #prefix>
                  <i class="iconfont iconcredentials_icon">1</i>
                </template>
              </a-input>
            </a-form-item>
            <a-form-item v-if="isMng">
              <a-input-password
                size="large"
                type="text"
                placeholder="请输入登录密码"
              >
                <div class="input-icon" slot="prefix">
                  <i class="iconfont iconmima"></i>
                </div>
              </a-input-password>
            </a-form-item>
            <a-row :gutter="8">
              <a-col :span="16">
                <a-form-item style="margin-bottom: 0;">
                  <a-input
                    size="large"
                    type="text"
                    placeholder="请输入验证码">
                    <div class="input-icon" slot="prefix">
                      <i class="iconfont iconyanzhengma"></i>
                    </div>
                  </a-input>
                </a-form-item>
              </a-col>
              <a-col :span="8">
                <div class="captcha-wrap" @click="initCaptcha" style="width: 100%;margin-top: -10px;">
                  <img :src="`data:image/png;base64,${captchaInfo.image}`" v-show="captchaInfo.image" style="width: 100%;" alt="验证码">
                </div>
              </a-col>
            </a-row>
            <div style="text-align: right;margin: 10px 0;">
              <a class="refresh-captcha" @click="initCaptcha">换一张</a>
            </div>
            <a-form-item style="clear: both;margin: 0;">
              <a-button
                size="large"
                type="primary"
                htmlType="submit"
                class="login-button"
                :loading="state.loginBtn"
                :disabled="state.loginBtn"
              >
                登 录
              </a-button>
            </a-form-item>
          </a-form>
        </a-tab-pane>
        <a-tab-pane key="2" tab="刷脸登录" disabled v-if="!isMng">
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
// import { timeFix } from '@/utils/util'
// import { getCaptcha, getSmsVerifyCode } from '@/api/login'
// import store from '@/store'

export default {
  // components: {},
  data () {
    return {
      title: '账号密码登录',
      customActiveKey: 'tab1',
      loginBtn: false,
      // login type: 0 email, 1 username, 2 telephone
      loginType: 0,
      isLoginError: false,
      // form: this.$form.createForm(this),
      state: {
        time: 60,
        loginBtn: false,
        loginType: 0,
        sendSms: false
      },
      captchaInfo: {
        image: '',
        key: ''
      },
      smsTime: 0,
      isMng: false,
      timer: null
    }
  },
  destroyed () {
    clearInterval(this.timer)
  },
  mounted () {
    this.isMng = this.$route.name === 'manageLogin'
    this.initCaptcha()
  },
  methods: {
    // ...mapActions(['Login', 'Logout', 'MngLogin']),
    // handler
    initCaptcha () {
      // getCaptcha()
      //   .then(res => {
      //     this.captchaInfo = res
      //     this.$nextTick(_ => {
      //       this.form.setFieldsValue({ captcha: '' })
      //     })
      //   })
      //   .catch(err => {
      //     this.requestFailed(err, '获取验证码失败')
      //     this.captchaInfo = {
      //       image: '',
      //       key: ''
      //     }
      //   })
    },
    handleGetSmsVerifyCode () {
      this.form.validateFields(['mobile'], {}, (err, values) => {
        if (!err) {
          const { mobile } = values
          // getSmsVerifyCode({ mobile })
          //   .then(res => {
          //     this.state.time = 60
          //     this.state.sendSms = true
          //     this.timer = setInterval(() => {
          //       this.state.time = this.state.time - 1
          //       if (this.state.time <= 0) {
          //         this.state.sendSms = false
          //         clearInterval(this.timer)
          //       }
          //     }, 1000)
          //   })
          //   .catch(err => {
          //     this.requestFailed(err, '获取手机验证码失败')
          //   })
        }
      })
    },
    handleSubmit (e) {
      e.preventDefault()
      const {
        form: { validateFields },
        state,
        Login,
        MngLogin
      } = this

      state.loginBtn = true

      const validateFieldsKey = ['idCard', 'type', 'captcha', 'mobile', 'verifyCode']
      const mngValidateFieldsKey = [ 'userCode', 'password', 'captcha' ]

      validateFields(this.isMng ? mngValidateFieldsKey : validateFieldsKey, { force: true }, (err, values) => {
        if (!err) {
          const loginParams = { ...values, captchaKey: this.captchaInfo.key };
          (this.isMng ? MngLogin(loginParams) : Login(loginParams))
            .then((res) => {
              this.loginSuccess(res)
            })
            .catch(err => {
              this.initCaptcha()
              this.requestFailed(err, '登录失败')
              this.state.loginBtn = false
            })
        } else {
          setTimeout(() => {
            state.loginBtn = false
          }, 600)
        }
      })
    },
    loginSuccess (res) {
      // store.dispatch('GetInfo').then(res => {
      //   this.$router.push({ path: this.isMng ? '/mng/dashboard' : '/' })
      //   // 延迟 1 秒显示欢迎信息
      //   setTimeout(() => {
      //     this.$notification.success({
      //       message: '欢迎',
      //       description: `，欢迎回来`
      //     })
      //   }, 1000)
      //   this.state.loginBtn = false
      //   this.isLoginError = false
      // }).catch(err => {
      //   this.requestFailed(err, '获取用户信息错误')
      // })
    },
    requestFailed (err, title) {
      this.isLoginError = true
      this.$notification['error']({
        message: title,
        description: ((err.response || {}).data || {}).message || err.message || '请求出现错误，请稍后再试',
        duration: 4
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .dividing-line {
    display: block;
    margin: 10px auto 0 auto;
    width: 410px;
  }

  .logo-title {
    font-size: 20px;
  }

  .login-card {
    * {
      user-select: none;
    }
    .ant-form-item {
      position: relative;
      margin-bottom: 20px;
      .ant-form-explain {
        position: absolute;
        bottom: -20px;
        left: 0;
      }
    }
    .ant-card-body {
      padding: 25px 60px 45px;
    }
    .ant-tabs-nav {
      width: 100%;
      margin: 0 auto;
      display: block;
      .ant-tabs-tab {
        width: 50%;
        margin-right: 0;
        text-align: center;
      }
      .ant-tabs-ink-bar {
        width: 50% !important;
      }
    }
    input {
      border: none;
      border-bottom: 1px solid #d9d9d9;
      padding-left: 55px!important;
      color: #888;
      box-shadow: none!important;
      border-radius: 0!important;
      font-size: 16px;
    }
    .ant-input-affix-wrapper:hover .ant-input:not(.ant-input-disabled) {
      border: none;
      border-bottom: 1px solid #40a9ff;
    }
    .has-error .ant-input-affix-wrapper .ant-input:focus {
      border: none;
      border-bottom: 1px solid #40a9ff;
    }
    .pd-0 {
      input {
        padding-right: 0;
      }
      .ant-input-suffix {
        right: 0;
      }
    }
    .input-icon {
      width: 34px;
      height: 16px;
      line-height: 16px;
      border-right: 1px solid #bfbfbf;
      padding-right: 5px;
      text-align: center;
      i {
        line-height: 16px;
        font-size: 20px;
        color: #b0b0b0!important;
      }
    }
  }

  .isMng {
    .ant-tabs-nav {
      .ant-tabs-tab {
        width: 100%;
      }
      .ant-tabs-ink-bar {
        width: 100% !important;
      }
    }
  }

  .user-layout-login {
    label {
      font-size: 14px;
    }

    .getCaptcha {
      display: block;
      width: 100%;
      height: 40px;
    }

    .forge-password {
      font-size: 14px;
    }

    button.login-button {
      padding: 0 15px;
      font-size: 16px;
      height: 40px;
      width: 100%;
    }

    .user-login-other {
      text-align: left;
      margin-top: 24px;
      line-height: 22px;

      .item-icon {
        font-size: 24px;
        color: rgba(0, 0, 0, 0.2);
        margin-left: 16px;
        vertical-align: middle;
        cursor: pointer;
        transition: color 0.3s;

        &:hover {
          color: #1890ff;
        }
      }

      .register {
        float: right;
      }
    }
  }
</style>
