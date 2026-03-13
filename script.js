// PRESENTES
function darPresente(botao) {
  let card = botao.parentElement;
  let id = card.getAttribute("data-id");
  let msg = card.querySelector("textarea").value.trim();
  localStorage.setItem(id, msg);
  botao.disabled = true;
  card.querySelector(".status").innerText = "🎁 Presente já escolhido!";
}

// PIX MODAL
function abrirPIX() {
  document.getElementById("pixModal").style.display = "block";
}

function fecharPIX() {
  document.getElementById("pixModal").style.display = "none";
}

function doarPIX() {
  let value = document.getElementById("pixValue").value;
  if (value === "" || Number(value) < 100) {
    alert("O valor mínimo para doação é R$100 😊");
    return;
  }
  alert("Obrigado pela doação de R$" + value + " ❤️");
}

// CARREGAR STATUS PRESENTES
window.onload = function () {
  document.querySelectorAll(".card").forEach((card) => {
    let id = card.getAttribute("data-id");
    if (localStorage.getItem(id)) {
      card.querySelector("button").disabled = true;
      card.querySelector(".status").innerText = "🎁 Presente já escolhido!";
    }
  });
};

// CONTAGEM REGRESSIVA
const dataCasamento = new Date("junho 20, 2026 09:30:00").getTime();
setInterval(function() {
  const agora = new Date().getTime();
  const distancia = dataCasamento - agora;
  const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
  dias + " dias " + horas + "h " + minutos + "m " + segundos + "s ";

  if (distancia < 0) {
    document.getElementById("timer").innerHTML = "💍 Chegou o grande dia!";
  }
}, 1000);

// CONFIRMAÇÃO DE PRESENÇA
function confirmarPresenca() {
  const nome = document.getElementById("nome").value;
  const presenca = document.getElementById("presenca").value;
  if (nome === "" || presenca === "") {
    alert("Preencha todas as informações!");
    return;
  }
  document.getElementById("mensagemConfirmacao").innerHTML =
    "Obrigado " + nome + "! Sua resposta foi registrada: " + presenca + " ❤️";
}