const textoInp = document.querySelector("#texto");
const textoResultado = document.querySelector("#textoResultado");

const btncriptografar = document.querySelector("#encri");
const btnDescriptografar = document.querySelector("#desencri");
const btnCopiar = document.querySelector("#copiar");

function criptografar() {
  let texto = textoInp.value.toLowerCase();
  let textoCriptog = texto
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = textoCriptog;

  document.getElementById("texto").value = "";
}

function descriptografar() {
  let textoCriptog = textoInp.value.toLowerCase();
  let texto = textoCriptog
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

  document.getElementById("noResuelto").style.visibility = "hidden";
  document.getElementById("copiar").style.visibility = "visible";

  textoResultado.value = texto;

  document.getElementById("texto").value = "";
}

function copiar() {
  let textoCriptog = textoResultado.value;
  navigator.clipboard.writeText(textoCriptog);
}

btncriptografar.onclick = criptografar;
btnDescriptografar.onclick = descriptografar;

btnCopiar.onclick = copiar;
