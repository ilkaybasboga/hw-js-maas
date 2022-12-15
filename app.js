let asgariUcret = 5500;
let maas = Number(prompt("Maaşınızı giriniz"));

if (maas >= asgariUcret){
    maas = Math.floor(maas*1.1)
    alert(`Güncel Maaşınız: ${maas}.`)
}
else if (maas < asgariUcret){
    maas = Math.floor(maas*1.5)
    alert(`Güncel Maaşınız: ${maas}.`)
}else{
    alert("Lütfen geçerli bir değer giriniz.")
}