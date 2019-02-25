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
						<li v-if="logged"><a href="#">SAIR</a></li>
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
			<div class="container">
				<div class="row ">
					<h1 class="g-pad-bottom"><i class="fa fa-crosshairs"></i> SERVIÇOS </h1>               
						<div class="text-center g-pad-bottom">
							<div class="col-md-4 col-sm-4">
								<i class="fa fa-cogs fa-5x faa-vertical animated c-main "></i>
								<h4>Produtividade</h4>
								<p class="adjust">
									O Alterdata Pack importa os dados e lança a nota no Escrita Fiscal. Você será notificado da importação através do Gerente Eletrônico Alterdata. É possível visualizar e fazer o download do XML ou da DANFE sempre que precisar.
									Você pode enviar as notas fiscais eletrônicas por e-mail ou pelo Pack UP Alterdata para seus clientes sempre que precisar. Seu cliente também pode acessá-las diretamente no site.
									Organize automaticamente os documentos fiscais, direcionando os XMLs recebidos e emitidos para cada cliente do escritório. Segurança na organização dos documentos fiscais, sem necessidade de intervenção manual.
									Busca rápida de documentos fiscais, com diferentes filtros para localização de notas fiscais e conhecimentos de transporte sem complicação, entre eles: número da nota, chave de acesso, emitente, fornecedor, data de emissão, status e tipo.
								</p>         
							</div>
							<div class="col-md-4 col-sm-4">
								<i class="fa fa-lock fa-5x faa-ring animated c-main "></i>
								<h4>Segurança</h4>
									<p class="adjust">
										O NF-Stock protege seu cliente contra fraudes! Todas as notas emitidas contra o CNPJ do seu cliente serão automaticamente baixadas do site da Receita Federal ou da Prefeitura, evitando que as notas geradas indevidamente passem despercebidas. Além disso, todos os arquivos DANFE recebidos junto com a mercadoria podem ser comparados com os arquivos XML disponíveis no NF-Stock, assim o produto não será recebido com documentos falsificados. É possível, inclusive, manifestar as notas diretamente no sistema.
										Para os documentos de saída, tenha também o controle de NF-e faltante, facilitando as auditorias. Canceladas e inutilizadas também podem ser gerenciadas.
										Defina o tempo de armazenamento dos documentos fiscais de cada cliente!
										Com liberdade para downloads e visualizações, o seu cliente também terá um usuário próprio para acesso web ao sistema e pode baixar e visualizar os arquivos. 
									</p>	
							</div>
                   
							<div class="col-md-4 col-sm-4">
								<i class="fa fa-gavel fa-5x faa-shake animated c-main "></i>
								<h4>Confiabilidade </h4>
								<p class="adjust">
									Em geral, o NF-Stock é a capacidade de uma pessoa ou sistema de realizar e manter seu funcionamento em circunstâncias de rotina, bem como em circunstâncias hostis e inesperadas.
									Confiabilidade é a probabilidade de um item desempenhar uma função, sob condições especificas, de forma adequada, como previsto no projeto, durante um período de tempo pré-determinado.
									Confiabilidade também está associada a garantia de execução de funcionalidades sistemicas para atender requisitos não-funcionais.
									A Engenharia de confiabilidade é um campo específico no estudo de sistemas e seu funcionamento.
								</p>
                          
							</div>
						</div>
					</div>

        </div>
    </section>

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

	export default {
		components: { Spinner, ContactComponent },
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
				console.log('Plano ', plan);
			}
		},
		mounted() {

		}
	};
</script>

<style scoped>
  
</style>
