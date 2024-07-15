let amigo = {nome:'José', 
idade: 62, 
peso: 80.5, 
engorda(p = 0) {
    console.log('Engordou');
    this.peso += p;
}};

amigo.engorda(2);

console.log(`Seu nome é ${amigo.nome}, você tem ${amigo.idade}, pesa ${amigo.peso} kg`);