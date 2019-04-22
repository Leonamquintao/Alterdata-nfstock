<template>
  <div class="login-page">
    <spinner size="large" message="Aguarde..." v-if="showSpinner"></spinner>
    <div class="container">
      <img alt="alterdata logo" src="../../static/img/logo_alterdata.svg">

      <div class="form">
        <form>
          
          <div class="form-group required">
            <label class="control-label" for="Email" :class="{invalid: errors.has('Email')}"> Endereço de email </label>
            <input type="email" name="Email" class="form-control" placeholder="usuario@email.com" v-model="credentials.email"
              v-validate="'required|email'" :class="{ invalid: errors.has('Email') }" data-vv-validate-on="blur">
            <span class="error">{{ errors.first('Email') }}</span>
          </div>

          <div class="form-group required">
            <label for="senha" class="control-label" :class="{ invalid: errors.has('senha')}"> Senha </label>
            <input :type="fieldType" class="form-control input-btn" name="senha" placeholder="Senha"
            data-vv-validate-on="blur" v-model="credentials.password"
            v-validate="'required|min:4'" :class="{invalid: errors.has('senha')}">
            <span class="error">{{ errors.first('senha') }}</span>
          </div>

          <div class="form-group" v-if="!formType">
            <label for="confirm" :class="{ invalid: errors.has('confirm')}"> Confirmação </label>
            <input :type="fieldType" class="form-control" name="confirm" placeholder="confirmação de senha"
            v-model="credentials.ps_confirm" v-validate="{ confirmed: credentials.password, required: true }" 
            data-vv-validate-on="blur" :class="{invalid: errors.has('confirm')}">
            <span class="error" v-if="errors.first('confirm')">Senha e confirmação devem ser iguais</span>
          </div>

          <button class="btn btn-primary" v-if="formType" @click.prevent="login()">Entrar</button>
          <button class="btn btn-primary" v-if="!formType" @click.prevent="createUser()">Enviar</button>


          <div style="float: right;">
            <input class="form-check-input" type="checkbox" @click="passVisibility">
            <label class="form-check-label"> &nbsp; &nbsp;Exibir senha </label>
          </div>

          <br><br>

        </form>
      </div>
      <button type="button" class="btn btn-link" @click.prevent="changeForm(true)">Login</button>
      <button type="button" class="btn btn-link" @click.prevent="changeForm(false)">Registrar</button>
    </div>
    <br>
    <button class="btn btn-link" @click.prevent="goBack()">Voltar</button>
  </div>
</template>

<script>
  import firebase from 'firebase';
  import Spinner from '@/components/Spinner.vue';

export default {
	components: { Spinner },
	data() {
    return {
      formType: true,
      showSpinner: false,
      fieldType: 'password',
      credentials: { name: '', email: '', password: '', ps_confirm: '' },
    }
  },
  methods: {
    changeForm(val) { this.formType = val },

    passVisibility() { this.fieldType = this.fieldType === 'password' ? 'text' : 'password' },

    goBack() { this.$router.push({ path: '/'}); },

    login() {
      return this.$validator.validateAll().then((valid) => {
        if(valid) {
          this.showSpinner = true;
          firebase.auth().signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
          .then((res) => {
            this.storeCredentials(res.user.uid, res.user.refreshToken);
            this.showToast('success', 'Login realizado com Sucesso, aguarde...', 'fa-check-circle');
            setTimeout(() => this.goBack(), 2000);
            this.showSpinner = false;
          },(err) => {
            this.showSpinner = false;
            this.showToast('error', `Não foi possível realizar a ação ${err} !`, 'fa-warning');
          })
        } else {
          this.showToast('info', 'Verifique os campos informados', 'fa-info-circle');
        }
      })
    },

    createUser() {
      return this.$validator.validateAll().then((valid) => {
        if(valid) {
          this.showSpinner = true;
          firebase.auth().createUserWithEmailAndPassword(this.credentials.email, this.credentials.password)
          .then((res) => {
            this.storeCredentials(res.user.uid, res.user.refreshToken);
            this.showToast('success', 'Cadastro Criado com sucesso, aguarde...', 'fa-check-circle');
            setTimeout(() => this.goBack(), 2000);
            this.showSpinner = false;
          },(err) => {
            this.showSpinner = false;
            this.showToast('error', `Não foi possível realizar a ação ${err} !`, 'fa-warning');
          });
        } else {
          this.showToast('info', 'Verifique os campos informados', 'fa-info-circle');
        }
      })
    },

    storeCredentials(uid, token) {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('uid', uid);
      localStorage.setItem('token', token);
    },

    showToast(type, message, icon) {
      return this.$toasted.show( message, {
        type : type, //'success', 'info', 'error'
        icon : icon, // 'fa-check-circle', 'fa-info-circle','fa-warning'
        duration : 3000
      });
    },

  }
}
</script>

<style scoped>
  .login-page {
    width: 100%;
    text-align: center;
  }
  .container {
    display: inline-block;
    border-radius: 5px;
    padding: 20px;
    background-color: #DDD;
    margin-top: 100px;
  }
  .container img {
    width: 40%;
    height: auto;
  }
  .form {
    width: 500px;
    height: auto;
    background-color: #fff;
    padding: 30px;
    text-align: left;
    margin: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>


