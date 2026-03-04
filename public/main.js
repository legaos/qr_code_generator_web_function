async function gerar() {
  const texto = document.getElementById("txt").value;

  if (!texto) {
    alert("Digite algum texto!");
    return;
  }

  const resp = await fetch(`/api/gerar_qr?texto=${encodeURIComponent(texto)}`);
  const data = await resp.json();

  if (!data.ok) {
    document.getElementById("resultado").innerHTML = "<p>Erro!</p>";
    return;
  }

  document.getElementById("resultado").innerHTML =
    `data:image/png;base64,${data.qr_base64}`;
}