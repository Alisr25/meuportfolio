// Navegação suave
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Função para abrir o modal com a imagem
function openModal(imgSrc) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modal.style.display = "flex";

  // Verifica se o caminho da imagem está correto
  if (imgSrc) {
    modalImg.src = imgSrc;
  } else {
    console.error("Caminho da imagem não encontrado:", imgSrc);
  }
}

// Função para fechar o modal
function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
  document.getElementById("modal-img").src = ""; // Limpa o src para garantir o recarregamento
}
