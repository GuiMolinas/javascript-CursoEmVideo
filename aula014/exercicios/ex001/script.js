function contar() {
    var inicio = window.document.getElementById('iinicio');
    var fim = window.document.getElementById('ifim');
    var passo = window.document.getElementById('ipasso');
    var res = window.document.querySelector('div#res');

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERROR] Faltam dados!')
    }

    else {
       let i = Number(inicio.value);
       let f = Number(fim.value);
       let p = Number(passo.value);
       if(p <= 0) {
        window.alert("A opção PASSO foi considerada valendo 1");
        p = 1;
       }

       if(i < f) {
        //Crescente
        for(var c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{27A1}`;
        }
       }

       else {
        for(var c = i; c >= f; c -= p) {
            res.innerHTML += `${c} \u{27A1}`;
        }
       }
       res.innerHTML += `\u{1F6D1}`;
    }

}