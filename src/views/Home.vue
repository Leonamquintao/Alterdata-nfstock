<template>

  <div class="home">

		<spinner size="large" message="Aguarde..." v-if="showSpinner"></spinner>
        
		<div class="navbar navbar-inverse navbar-fixed-top">
       
			<div class="container">

				<div class="navbar-header">
					<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="#">
						<img class="img-logo" alt="alterdata logo" src="../../static/img/logo_alterdata.svg" @click.prevent="navigate()"/>
					</a>
				</div>

				<div class="navbar-collapse collapse">
					<ul class="nav navbar-nav navbar-right">
						<li><a href="#home-sec">HOME</a></li>
						<li><a href="#technology-sec">TECNOLOGIA</a></li>
						<li><a href="#services-sec">SERVIÇOS</a></li>
						<li><a href="#price-sec">PLANOS</a></li>
						<li><a href="#contact-sec">CONTATO</a></li>
						<li v-if="!logged"><router-link to="/login">ENTRAR</router-link></li>
						<li v-if="logged" @click="logout()"><a href="/">SAIR</a></li>
					</ul>
				</div>

			</div>
    </div>

    <div id="home-sec">
			<div class="container"  >
				<div class="row text-center">
					<div  class="col-md-12" >
						<span class="head-main">NF-Stock</span>
						<h2></h2>
						<h3 class="head-last col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
							Tenha Seu Escritório Contábel na Nuvem*
						</h3>
					</div>
				</div>
			</div>
		</div>

		<section id="technology-sec">
			<div class="container">
				<div class="row ">
					<h1 class="g-pad-bottom"><i class="fa fa-crosshairs"></i> TECNOLOGIA </h1>
					<P>
						Chega de ligar várias vezes para seus clientes cobrando as notas eletrônicas. O NF-Stock Alterdata faz a importação automática de todas as notas recebidas por seus clientes direto do site da Receita Federal, utilizando o certificado digital.
						Além de importar as notas de seus clientes, o NF-Stock é uma ferramenta que armazena as NF-es/CT-es recebidas e emitidas por seis anos com toda segurança e praticidade. Acabe com a digitação de notas fiscais eletrônicas!
						E as notas emitidas pelo cliente? Ele pode enviá-las por e-mail ou instalar um aplicativo desktop. Toda vez que uma nova nota fiscal for emitida pela empresa, o sistema envia para o NF-Stock e as notas armazenadas serão importadas pelo Escrita Fiscal.
					</P>
				</div>
			</div>
		</section>

    <section  id="services-sec">
			<services-component />
    </section>

		<v-dialog/>

    <section id="price-sec">
			<div class="container">
				<div class="row g-pad-bottom">
					<h1 class="g-pad-bottom"><i class="fa fa-crosshairs"></i> PLANOS </h1>
                      
					<div class="col-md-12 text-center ">
						<div class="col-md-4 col-sm-4" v-for="(plan, idx) in plans" :key="idx">
							<ul class="plan">
								<li class="plan-head"> {{plan.name}} </li>	
								<li><strong>{{plan.size}}</strong> em arquivos*</li>
								<li>Suporte <strong>Gratuíto</strong> </li>
								<li><small>não inclui a assinatura do sistema.</small></li>
									<li class="main-price"> R${{plan.value}} <br>
									<small> * Somente</small></li>
								<li class="bottom">
									<button class="btn btn-primary btn-lg" @click.prevent="hirePlan(plan)">Contrate</button>
								</li>
							</ul>
						</div>

					</div>
				</div>
      </div>
    </section>
    
    <section  id="contact-sec">
			<contact-component />
    </section>

    <div id="footer">
			<img alt="alterdata logo" src="../../static/img/logo_alterdata_br.png" />
			&copy; 1989 - 2019 - Alterdata Software - Direitos reservados
		</div>

	</div>
</template>

<script>
	// @ is an alias to /src
	import Spinner from '@/components/Spinner.vue';
	import ContactComponent from '@/components/ContactComponent.vue';
	import ServicesComponent from '@/components/ServicesComponent.vue';
	import PaymentModalComponent from '@/components/PaymentModalComponent.vue';

	export default {
		components: { Spinner, ContactComponent, ServicesComponent },
		data() {
			return {
				showSpinner: false,
				logged: false,
				plans: [
					{ name: '15 mil Notas', size: '15K', value: '24,99', message: 'Suporte Gratuíto', optionalMessage: 'não inclui a assinatura do sistema.'},
					{ name: '45 mil Notas', size: '45K', value: '40,99', message: 'Suporte Gratuíto', optionalMessage: 'não inclui a assinatura do sistema.'},
					{ name: 'Ilimitado', size: 'Ilimitado', value: '69,99', message: 'Suporte Gratuíto', optionalMessage: 'não inclui a assinatura do sistema.'},
				]
			}
		},
		methods: {
			navigate() {
				window.open('https://www.alterdata.com.br/', '_blank');
			},

			hirePlan(plan) {
				
				if(localStorage.getItem('logged')) {
					this.renderPaymentModal(plan);
				} else {
					this.renderSignInSignUpModal();
				}
			},

			renderSignInSignUpModal() {
				this.$modal.show('dialog', {
					title: 'Atenção!',
					text: 'Para adquirir um de nossos planos é necessário estar logado ou criar uma conta caso não seja registrado!',
					buttons: [
						{
							title: 'Logar ou criar conta',
							handler: () => { this.$router.push({ path: '/login'}); }
						},
						{ title: 'Cancelar' }
					]
				})
			},

			renderPaymentModal(plan) {
				this.$modal.show(PaymentModalComponent,
					{ data: plan },
					{
						name: 'dynamic-modal',
						resizable: true,
						adaptive: true,
						draggable: true,
						height: 'auto'
					}
				);
			},

			logout() {
				localStorage.clear();
				this.showToast('success', 'Ação realizada com Sucesso', 'fa-check-circle');
			},

			showToast(type, message, icon) {
				return this.$toasted.show( message, {
					type : type, //'success', 'info', 'error'
					icon : icon, // 'fa-check-circle', 'fa-info-circle','fa-warning'
					duration : 3000
				});
    	},
		},
		mounted() {
			this.logged = localStorage.getItem('logged');
		}
	};
</script>

<style scoped>
  
</style>
