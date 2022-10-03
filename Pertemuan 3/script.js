console.log("ini console log");
//var, const, let
//alert("selamat datang")
var masuk = confirm("Klik OK untuk masuk dan CANCEL untuk batal ")
if (masuk == true){
    console.log("berhasil masuk");
    var a ="Var A ";
    let b = "let B " ;
    const c ="const C";

}else{
    // document.write(a);
    // document.write(b);
    // document.write(c);
}

var judul1 = document.getElementById('judul');
// var judul2 = document.getElementsByClassName

judul1.style.backgroundColor = "skyblue";
judul1.style.padding = "10px";