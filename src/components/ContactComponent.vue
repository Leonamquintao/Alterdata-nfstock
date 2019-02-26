<template>
  <div class="container">

    <spinner size="large" message="Aguarde..." v-if="showSpinner"></spinner>
    
    <div class="row g-pad-bottom">
      <h1 class="g-pad-bottom"><i class="fa fa-crosshairs"></i> CONTATO  </h1> 
      <div class="col-md-6 ">
        <h2>Entre em Contato</h2>
          
        <p>
          <strong>End:</strong> &nbsp; Rua Pref. Sebastião Teixeira, 227 - Varzea, Teresópolis - RJ  
          <br>
          <strong>Telefone:</strong> 0800-704-1418 <br>
          A Alterdata tem o objetivo de estar sempre próxima de seus clientes. 
          Para isso, disponibiliza vários canais de comunicação, sempre procurando o máximo de 
          agilidade nos contatos.        
        </p>

        <form>
          <div class="row">

            <div class="col-md-6 ">
              <input type="text" class="form-control" name="Nome" placeholder="Nome completo" v-model="contact.name"
                v-validate="{ required: true, min: 4, regex: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/ }"
                :class="{ invalid: errors.has('Nome') }" data-vv-validate-on="blur">
              <span class="error">{{ errors.first('Nome') }}</span>
            </div>

            <div class="col-md-6 ">
              <div class="form-group required">
                <input type="email" name="Email" class="form-control" placeholder="email@host.com" v-model="contact.email"
                  v-validate="'required|email'" :class="{ invalid: errors.has('Email') }" data-vv-validate-on="blur">
                <span class="error">{{ errors.first('Email') }}</span>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col-md-12 ">
              <div class="form-group">
                <textarea name="message" required="required" class="form-control" v-model="contact.message" 
                rows="3" placeholder="Mensagem..." v-validate="{ required: true, min: 10 }" 
                :class="{ invalid: errors.has('Email') }" data-vv-validate-on="blur"></textarea>
                <span class="error">{{ errors.first('message') }}</span>
              </div>
              <div class="form-group">
                <button class="btn btn-primary" @click.prevent="sendMail()">Enviar</button>
              </div>
            </div>
          </div>
        </form>

      </div>
      <div class="col-md-6">
        <iframe class="cnt" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.4018280478117!2d-42.96568514911213!3d-22.413896826032083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xbdd44cf882aaa1%3A0x851065ab9c254d2d!2sAlterdata+Software+-+Matriz!5e0!3m2!1spt-BR!2sbr!4v1551103404461" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>

  import Spinner from '@/components/Spinner.vue';
  import firebase from 'firebase';

  export default {
    components: { Spinner },
    data() {
      return {
        showSpinner: false,
        contact: { }
      }
    },
    methods: {
      sendMail() {
        return this.$validator.validateAll().then((valid) => {
          if(valid) {
            this.showSpinner = true
            setTimeout(() => {
              this.showSpinner = false;
              this.showToast('success', 'Email enviado com sucesso', 'fa-check-circle');
              this.contact = { }
            }, 4000)
          } else {
            this.showSpinner = false
            this.showToast('info', 'Verifique os campos informados', 'fa-info-circle');
          }
			  });			
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
