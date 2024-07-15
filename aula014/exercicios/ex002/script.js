function tabuada() {
    var num = window.document.getElementById('inumero');
    var tab = window.document.getElementById('seltab');

    if(num.value.length == 0 ) {
        window.alert('[ERROR] Por favor, insira um número.');
    }

    else {
        let n = Number(num.value);
        tab.innerHTML = '';
        for(var c = 1; c <= 10; c++) {
            let item = document.createElement('option');
            let m = n * c;
            item.text = `${n} x ${c} = ${m}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
        }
    }
}