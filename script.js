const form = document.getElementById("formContato");
const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function () {
  let valor = this.value.replace(/\D/g, "");

  if (valor.length > 11) {
    valor = valor.slice(0, 11);
  }

  if (valor.length > 6) {
    valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
  } else if (valor.length > 2) {
    valor = valor.replace(/(\d{2})(\d{0,5})/, "($1) $2");
  } else {
    valor = valor.replace(/(\d*)/, "($1");
  }

  this.value = valor;
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = encodeURIComponent(
`Olá, meu nome é ${nome}
 Telefone: ${telefone}
 Email: ${email}
 Mensagem: ${mensagem}`
  );

  const numero = "5511982873063";

  this.reset();

  mostrarMensagem();

  setTimeout(() => {
    window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
  }, 1000);
});

function mostrarMensagem() {
  const msg = document.createElement("div");
  msg.textContent = "Mensagem enviada com sucesso!";
  msg.classList.add("mensagem-sucesso");

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 3000);
}