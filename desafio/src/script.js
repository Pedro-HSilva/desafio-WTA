
      function despesaUsuario() {
        let descricaoDespesa = prompt('Qual a descricao de sua despesa?')
        let valorDespesa = parseInt(prompt('Qual o valor de sua despesa?'))

        if (isNaN(despesa)) {
            alert('Este campo deve ser preenchido com um valor numérico')
        }

        const despesa = {
            descricao: descricaoDespesa,
            valor: valorDespesa,
            categoria: "Despesa"
        }

        financas.transacoes.push(despesa)
        financas.saldo = financas.saldo - valor
    }

     function receitaUsuario() {
        let descricaoReceita = prompt('Qual a descricao de sua receita?')
        let valorReceita = parseInt(prompt('Qual o valor de sua receita?'))
        
        if (isNaN(receita)) {
            alert('Este campo deve ser preenchido com um valor numérico')
        }

        const receita = {
            descricao: descricaoReceita,
            valor: valorReceita,
            categoria: "Receita"
        }
        financas.transacoes.push(receita)
        financas.saldo = financas.saldo + valor
    }

    const financas = 
    {saldo: 10, 
    transacoes: [
        {
      descricao: 'Salgado na faculdade',
      categoria: 'Despesa',
      valor: 5.5
    },
    {
      descricao: 'Livro Clean Code',
      categoria: 'Despesa',
      valor: 50
    },
    {
      descricao: 'Grana do estágio',
      categoria: 'Receita',
      valor: 80
    },
    {
      descricao: 'Capinha pro celular',
      categoria: 'Despesa',
      valor: 15
    },
    ]} 

    function formatarValor(valor) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
}

    function exibirFinancas() {
        console.log("Saldo:" + formatarValor(financas.saldo));
        financas.transacoes.forEach((Transacao,i) =>{
            console.log('Transação', i +1, ':');
            console.log("[", Transacao.categoria, ']', Transacao.descricao);
            console.log(formatarValor(Transacao.valor));
        } )
    }

    function exibirSaldo() {
      const saldo = document.getElementById('saldo')
    }

    // adicionarDespesa();

    // adicionarReceita();

    // exibirFinancas();
    /*
    * * * * * * * *
    
    DESAFIO PLANILHA DE GASTOS:
    
    Nesse exercício é necessário preencher na tela os dados do objeto 'financas'.
    
    1. Desenvolva uma função que exibe o financas.saldo no lugar do texto
    'Carregando saldo...'.
    
    2. Desenvolva uma função que exibe financas.transacoes na tabela no lugar do
    texto 'Carregando dados...'. Para cada transacao será necessário criar
    uma nova linha na tabela, e para cada propriedade uma nova coluna. As
    colunas devem ter o atributo classe como 'coluna-*****' substituindo o
    ***** pelo nome da propriedade, como 'coluna-descricao', 'coluna-categoria'
    ou 'coluna-valor'.
    
    3. Para que os botões Adicionar despesa e Adicionar receita funcionem é
    necessário atribuir as funções de prompt criadas na primeira semana ao clique
    desses botões. E depois de adicionar o resultado ao objeto financas, chame as 
    funções de exibicação de dados criadas nos exercícios acima para que os valores
    da tela sejam atualizados.
    
    * * * * * * * *
*/
    
    
    
    