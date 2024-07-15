var num = document.getElementById('inum');
var tab = document.getElementById('seltab');
let res = document.querySelector('div#res');
let valores = [];

function isNumero (n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    }

    else {
        return false;
    }
}

function isLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    }

    else {
        return false;
    }
}

function adicionar() {
    if(isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.innerHTML = `Valor ${num.value} foi adicionado com sucesso`;
        tab.appendChild(item);
    }

    else {
        window.alert('[ERROR] Valor inválido ou já se encontra na lista');
    }

    num.value = '';
    num.focus();
}

function finalizar() {
    if(valores.length == 0) {
        window.alert('[ERROR] Adicione valores para finalizar');
    }

    else {
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;

        for(let pos in valores) {
            soma += valores[pos];
            if(valores[pos] > maior) {
                maior = valores[pos];
            }

            if(valores[pos] < menor) {
                menor = valores[pos];
            }

        }

        media = soma / total;

        res.innerHTML = '';
        res.innerHTML += `<p> Forama adicionados ${total} elementos. </p>`;
        res.innerHTML += `<p> O maior valor digitado foi ${maior}. </p>`;
        res.innerHTML += `<p> O menor valor digitado foi ${menor}. </p>`;
        res.innerHTML += `<p> Somando os valores digitados: ${soma}. </p>`;
        res.innerHTML += `<p> A média dos elementos é igual a ${media}. </p>`;
    }
}