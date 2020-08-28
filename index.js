let angka1 = document.getElementById("angka1");
let angka2 = document.getElementById("angka2");
let tambah = document.getElementById("tambah");
let kurang = document.getElementById("kurang");
let kali = document.getElementById("kali");
let bagi = document.getElementById("bagi");
let hasil = document.getElementById("hasil");

function cek() {
    
}

tambah.addEventListener("click", function (){
    if(angka1.value == '' || angka2.value == '') {
        alert("Angka Kosong");
    }
    let a = Number(angka1.value);
    let b = Number(angka2.value);
    hasil.innerText = a+b;
})

kurang.addEventListener("click", function (){
    if(angka1.value == '' || angka2.value == '') {
        alert("Angka Kosong");
    }
    let a = Number(angka1.value);
    let b = Number(angka2.value);
    hasil.innerText = a-b;
})

kali.addEventListener("click", function (){
    if(angka1.value == '' || angka2.value == '') {
        alert("Angka Kosong");
    }
    let a = Number(angka1.value);
    let b = Number(angka2.value);
    hasil.innerText = a*b;
})

bagi.addEventListener("click", function (){
    if(angka1.value == '' || angka2.value == '') {
        alert("Angka Kosong");
    }
    let a = Number(angka1.value);
    let b = Number(angka2.value);
    hasil.innerText = a/b;
})