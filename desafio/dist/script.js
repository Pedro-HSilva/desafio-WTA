
    function despesaUsuario() {
        let descricaoDespesa = prompt('Qual a descricao de sua despesa?')
        let despesa = parseInt(prompt('Qual o valor de sua despesa?'))

        if (isNaN(despesa)) {
            alert('Este campo deve ser preenchido com um valor numérico')
             return
        }
        if (despesa.indexOf(',') > 0) {
            alert('Números com ponto, não com vírgula!')
            return
        }
    }

    function receitaUsuario() {
        let descricaoReceita = prompt('Qual a descricao de sua receita?')
        let receita = parseInt(prompt('Qual o valor de sua receita?'))
        
        if (isNaN(receita)) {
            alert('Este campo deve ser preenchido com um valor numérico')
        }
    }
    
 
    
    