function cep(){
    var cep = document.getElementById("cep").value;
    var url = 'https://viacep.com.br/ws/' + cep + '/json/';
    var servico = new XMLHttpRequest();

    servico.open('GET', url);
    
    servico.onerror = function(e){
        document.getElementById("endereco").innerHTML = "error: " + e.message;
    }
    servico.onload = () => {
        var resposta  = JSON.parse(servico.responseText);
    


        if(resposta.erro == true){
            document.getElementById('endereco').innerHTML ="CEP inválido";
        }
        else{
            document.getElementById('endereco').innerHTML = "CEP: " + resposta.cep + '<br>' +
            "" + resposta.logradouro + '<br>' +
            "Bairro: " + resposta.bairro;


              }                                                               
        }

        servico.send();
    }
