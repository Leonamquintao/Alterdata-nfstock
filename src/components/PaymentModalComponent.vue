<template>
  <div class="box" transition="pop-out">

    <spinner size="large" message="Aguarde..." v-if="showSpinner"></spinner>


    <h1>Confirmação de Pagamento</h1>

    <div class="body">
      <div class="card">

        <div style="text-align: center">
          <img class="card-logo" src="../../static/img/logo_alterdata_br.png" alt="logo">
        </div>

        <span class="card-number">{{ payment.cardNumber || '000000000000' | numMask }}</span>

        <div class="row">
          <div class="col-md-6">
            <p class="details">{{ payment.validThru || '0101' | validThruMask }}</p>
          </div>
          <div class="col-md-6">
            <p class="details">{{ payment.cvc || '000' | cvcMask }}</p>
          </div>
        </div>

        <div>
          <span class="card-name">{{ payment.cardName || 'Nome impresso' | upperName }}</span>
        </div>

      </div>

      <div class="payment">
        <h5>Dados para Pagamento</h5>
        <form>
  
          <div class="form-group required">
            <input type="text" name="número" class="form-control" placeholder="Número do cartão" v-model="payment.cardNumber"
            v-validate="{ required: true, min: 16, max: 16 }" data-vv-validate-on="blur"
            :class="{ invalid: errors.has('número') }">
            <span class="error">{{ errors.first('número') }}</span>
          </div>

          <div class="row">

            <div class="col-md-6">

              <div class="form-group required">
                <input type="text" name="validade" class="form-control" placeholder="validade do cartão" v-model="payment.validThru"
                v-validate="{ required: true, min: 4, max: 5 }" data-vv-validate-on="blur"
                :class="{ invalid: errors.has('validade') }">
                <span class="error">{{ errors.first('validade') }}</span>
              </div>

            </div>
            <div class="col-md-6">

              <div class="form-group required">
                <input type="text" name="cvc" class="form-control" placeholder="codigo de verificação" v-model="payment.cvc"
                v-validate="{ required: true, min: 3, max: 3 }" data-vv-validate-on="blur"
                :class="{ invalid: errors.has('cvc') }">
                <span class="error">{{ errors.first('cvc') }}</span>
              </div>

            </div>
           
        </div>

          <div class="form-group required">
            <input type="text" name="nome" class="form-control" placeholder="Nome completo" v-model="payment.cardName"
            v-validate="{ required: true, min: 5, max: 40, regex: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/ }"
            :class="{ invalid: errors.has('nome') }" data-vv-validate-on="blur">
            <span class="error">{{ errors.first('nome') }}</span>
          </div>

          <span class="confirm-text"> * confima o pagamento do plano <strong>{{data.name}}</strong> no valor de <strong>R${{data.value}}</strong>?</span>

          <div class="row btn-row">
            <div class="col-md-6">
              <button class="btn btn-primary btn-block" @click.prevent="submitPayment()">Pagar R${{ data.value }}</button>
            </div>
            <div class="col-md-6">
              <button class="btn btn-default btn-block" @click.prevent="closeByEvent()">Cancelar</button>
            </div>
          </div>

        </form>
      </div>
    </div>

  </div>
</template>

<script>
  import Spinner from '@/components/Spinner.vue';
  import firebase from 'firebase'

  export default {
    props: { data: Object },
    components: { Spinner },
    data () {
      return {
        showSpinner: false,
        payment: { cardNumber: '', cardName: '', cvc: '', validThru: '' }
      }
    },
    methods: {
      closeByEvent() { this.$emit('close'); },

      submitPayment() {
        return this.$validator.validateAll().then((valid) => {

          if(valid) {
            this.showSpinner = true;
            
            const userId =  localStorage.getItem('uid');
            const plan = this.data;
            const dt = new Date();

            firebase.database().ref('product/' + userId).set({
              plan: plan.name,
              value: plan.value,
              acquisition: dt.toLocaleString()
            }.then((res) => {
              this.showToast('success', 'Transação efetuada com Sucesso, Parabéns!!!', 'fa-check-circle');
              this.showSpinner = false;
              this.closeByEvent();
            }));
          } else {
            this.showToast('error', 'Verifique os campos informados', 'fa-info-circle');
          }

        })
      },
      showToast(type, message, icon) {
      return this.$toasted.show( message, {
        type : type, //'success', 'info', 'error'
        icon : icon, // 'fa-check-circle', 'fa-info-circle','fa-warning'
        duration : 3000
      });
    },
    },
    filters: {
      numMask(num) {
        if(num) {
          num = num.replace(/\D/g,"");
          num = num.replace(/(\d{4})/g, "$1  ");
          num = num.replace(/\.$/, "");
          num = num.substring(0, 22);
          return num;
        }
      },
      upperName(val) {
        if(val) {
          return val.toUpperCase();
        }
      },
      validThruMask(num) {
        num = num.replace(/\D/g,"");
        num = num.replace(/(\d{2})/g, "$1/");
        num = num.replace(/\.$/, "");
        num = num.substring(0, 5);
        return num
      },
      cvcMask(cvc) {
        cvc = cvc.replace(/\D/g,"");
        cvc = cvc.replace(/\.$/, "");
        cvc = cvc.substring(0, 3);
        return cvc;
      }
    }
  }
</script>
<style scoped>
  .box {
    text-align: center;
  }
  .body {
    width: 400px;
    height: 500px;
    margin: 0 auto;
  }
  .card {
    width: 400px;
    height: auto;
    background-color: purple;
    border-radius: 8px;
  }
  .card-logo {
    padding: 10px;
    width: 150px;
  }
  .card-number {
    color: #DDD;
    font-size: 30px;
  }
  .card-name {
    color: #DDD;
    font-size: 20px;
  }
  .details {
    color: #DDD;
  }
  .btn-row {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .confirm-text {
    color: dimgrey;
    font-size: 12px;
    font-style: italic;
  }
  input.invalid { border: 1px solid #e02c50; }
  .error { text-align: left; color: #e02c50; font-size: 10px;}
</style>

