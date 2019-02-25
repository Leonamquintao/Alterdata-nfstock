<template>
  <div class="login-page">
    <spinner size="large" message="Aguarde..." v-if="showSpinner"></spinner>
    <div class="container">
      <img alt="alterdata logo" src="../../static/img/logo_alterdata.svg">

      <div class="form">
        <form>

          <!-- <div class="form-group" v-if="!formType">
            <label for="name">Nome</label>
            <input type="email" class="form-control" name="name" v-model="credentials.name" placeholder="Nome Completo">
          </div> -->

          <div class="form-group">
            <label for="email">Endereço de email</label>
            <input type="email" class="form-control" name="email" v-model="credentials.email" placeholder="email@host.com">
          </div>

          <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" class="form-control" name="password" v-model="credentials.password" placeholder="Senha">
          </div>

          <div class="form-group" v-if="!formType">
            <label for="password-confirm">Confirmação de Senha</label>
            <input type="password" class="form-control" name="ps_confirm" v-model="credentials.ps_confirm" placeholder="confirmação de senha">
          </div>

          <button class="btn btn-primary" v-if="formType" @click.prevent="login()">Entrar</button>
          <button class="btn btn-primary" v-if="!formType" @click.prevent="createUser()">Enviar</button>

          <br><br>

        </form>
      </div>
      <button type="button" class="btn btn-link" @click.prevent="changeForm(true)">Login</button>
      <button type="button" class="btn btn-link" @click.prevent="changeForm(false)">Registrar</button>
    </div>
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
      credentials: { name: '', email: 'leonamquintao@gmail.com', password: '', ps_confirm: '' },
    }
  },
  methods: {
    changeForm(val) { this.formType = val },

    login() {
      firebase.auth().signInWithEmailAndPassword(this.credentials.email, this.credentials.password)
      .then((res) => {
        console.log('user ', res.user);
      },(err) => {
        console.log('Opss => ', err);
      })
    },

    createUser() {
      console.log('passou', this.credentials);
      firebase.auth().createUserWithEmailAndPassword(this.credentials.email, this.credentials.password)
      .then((res) => {
        console.log('user ', res.user);
      },(err) => {
        console.log('Opss => ', err);
      })
    },

    storeCredentials(credentials) {
      localStorage.setItem('logged', 'true');
      localStorage.setItem('id', credentials.id);
      localStorage.setItem('api_token', credentials.api_token);
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


