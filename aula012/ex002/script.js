function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.getElementById('itxtano');
    var res = window.document.querySelector('div#res');

    if(fano.value.lenght == 0 || fano.value > ano) {
        window.alert("[ERROR] Verifique os dados inseridos e tente novamente!");
    }

    else {
       var sexo = window.document.getElementsByName('rsex');
       var idade = ano - Number.parseInt(fano.value);
       var genero = '';
       var imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto');

       if(sexo[0].checked) {
        genero = 'homem';

        if(idade > 0 && idade < 10) {
            //Kid
            imagem.setAttribute('src', 'bebe-h.jpg')
        }

        else if(idade < 18) {
            imagem.setAttribute('src', 'boy.jpg')
        }

        else if (idade < 21) {
            //jovem
            imagem.setAttribute('src', 'jovem-h.jpg')
        }

        else if (idade < 60) {
            //adulto
            imagem.setAttribute('src', 'adulto-h.jpg')
        }

        else {
            //idoso
            imagem.setAttribute('src', 'idoso-h.jpg')
        }
       }

       else {
        genero = 'mulher';

        if(idade > 0 && idade < 10) {
            //Kid
            imagem.setAttribute('src', 'bebe-h.jpg')
        }

        else if(idade < 18) {
            imagem.setAttribute('src', 'girl.jpg')
        }

        else if (idade < 21) {
            //jovem
            imagem.setAttribute('src', 'jovem-m.jpg')
        }

        else if (idade < 60) {
            //adulto
            imagem.setAttribute('src', 'adulta-m.jpg')
        }

        else {
            //idoso
            imagem.setAttribute('src', 'idosa-m.jpg')
        }
       }
       res.style.textAlign = 'center';
       imagem.style.margin = 'auto';
       res.innerHTML =  `Você é ${genero} e tem ${idade} anos`;
       //res.appendChild(imagem);

    }
}