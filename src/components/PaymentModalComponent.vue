<template>
  <modal name="payment-modal-component" transition="pop-out" :width="modalWidth" :height="500">
    <div class="box">
      <h1>TESTE DA MODAL DE PAGAMENTOS</h1>

      <div style="text-align: center">
        <i class="fa fa-times fa-5x" @click.prevent="$modal.hide('payment-modal-component')"></i>
      </div>
    </div>
  </modal>
</template>

<script>
const MODAL_WIDTH = 656
export default {
  data () {
    return {
      modalWidth: MODAL_WIDTH
    }
  },
  methods: {
    
  },
  created () {
    this.modalWidth = window.innerWidth < MODAL_WIDTH
    ? MODAL_WIDTH / 2
    : MODAL_WIDTH
  }
}
</script>
