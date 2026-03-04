async function gerar() {
  const texto = document.getElementById("txt").value;
  if (!texto) return alert("Digite algo!");

  const resp = await fetch(`/api/gerar_qr?texto=${encodeURIComponent(texto)}`);
  const data = await resp.json();

  if (!data.ok) {
    document.getElementById("resultado").innerHTML = `<p>Erro ao gerar!</p>`;
    return;
  }

  // Exibir imagem base64
  document.getElementById("resultado").innerHTML =
    `<img src="data:image/png;base64,${data.qr_base64}" />`;
}