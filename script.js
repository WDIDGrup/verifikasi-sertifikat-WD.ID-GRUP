async function verify() {
  const inputID = document.getElementById("inputID").value.trim();
  const resultDiv = document.getElementById("result");

  try {
    const response = await fetch("data.json");
    const data = await response.json();

    const match = data.find(entry => entry.id === inputID);

    if (match) {
      resultDiv.innerHTML = `
        ✅ <strong>ID valid!</strong><br/>
        Nama: <strong>${match.name}</strong><br/>
        ID: <code>${match.id}</code>
      `;
    } else {
      resultDiv.innerHTML = `
        ❌ <strong>ID tidak ditemukan.</strong><br/>
        Periksa kembali ID Credential Anda.
      `;
    }
  } catch (error) {
    resultDiv.innerHTML = "⚠️ Terjadi kesalahan saat memverifikasi.";
    console.error("Error loading data:", error);
  }
}
