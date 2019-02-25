<template>

  <div class="home">
        
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
						<div class="col-md-4 col-sm-4">
							<ul class="plan">		
								<li class="plan-head"> 15 mil Notas</li>	
								<li><strong>15K</strong> em arquivos*</li>
								<li>Suporte <strong>Gratuíto</strong> </li>
								<li><small>não inclui a assinatura do sistema.</small></li>
									<li class="main-price"> R$24,99 <br>
									<small> * Somente</small></li>
								<li class="bottom">
									<a href="#" class="btn btn-primary btn-lg">Contrate</a>
								</li>
							</ul>
						</div>

						<div class="col-md-4 col-sm-4">
							<ul class="plan">
								<li class="plan-head">45 mil Notas</li>
								<li><strong>45K</strong> em arquivos*</li>
								<li>Suporte <strong>Gratuíto</strong> </li>
								<li><small>não inclui a assinatura do sistema.</small></li>
								<li class="main-price"> R$40,99 <br>
									<small> * Somente</small>
								</li>
								<li class="bottom">
									<a href="#" class="btn btn-primary btn-lg ">Contrate</a>
								</li>
							</ul>
						</div>

						<div class="col-md-4 col-sm-4">
								<ul class="plan">
									<li class="plan-head">Ilimitado</li>
									<li>Suporte <strong>Gratuíto</strong> </li>
									<li><small>não inclui a assinatura do sistema.</small></li>
									<li><small>Este valor se refere ao serviço de hospedagem.</small></li>
									<li class="main-price"> R$69,99 <br>
										<small> * Somente</small>
									</li>
								
									<li class="bottom">
										<a href="#" class="btn btn-primary btn-lg ">Contrate</a>
									</li>
								</ul>
						</div>
                

                </div>
            </div>


        </div>
    </section>
    <!-- END PRICE SECTION-->
    
    <section  id="contact-sec">
			<div class="container"> 
				<div class="row g-pad-bottom">
					<h1 class="g-pad-bottom"><i class="fa fa-crosshairs"></i> CONTATO  </h1> 
					<div class="col-md-6 ">
						<h2>Entre em Contato</h2>
							
						<p>
							<strong>End:</strong> &nbsp; Rua Pref. Sebastião Teixeira, 227 - Varzea, Teresópolis - RJ  
							<br />
							A Alterdata tem o objetivo de estar sempre próxima de seus clientes. 
							Para isso, disponibiliza vários canais de comunicação, sempre procurando o máximo de 
							agilidade nos contatos.            
						</p>

						<form>
								<div class="row">
										<div class="col-md-6 ">
												<div class="form-group">
														<input type="text" class="form-control" required="required" placeholder="Name">
												</div>
										</div>
										<div class="col-md-6 ">
												<div class="form-group">
														<input type="text" class="form-control" required="required" placeholder="Email address">
												</div>
										</div>
								</div>
								<div class="row">
										<div class="col-md-12 ">
												<div class="form-group">
														<textarea name="message" id="message" required="required" class="form-control" rows="3" placeholder="Message"></textarea>
												</div>
												<div class="form-group">
														<button type="submit" class="btn btn-success">Submit Request</button>
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
    </section>

    <div id="footer">
      &copy; 1989 - 2019 - Alterdata Software - Direitos reservados  
    </div>

	</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {

  components: {
   
  },
  methods: {
    navigate() {
      window.open('https://www.alterdata.com.br/', '_blank');
    }
  },
};
</script>

<style scoped>
  .img-logo {
	width: 20%;
	height: auto;
}

</style>

