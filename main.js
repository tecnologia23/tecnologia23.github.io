function exportarExcel() {
  const data = localStorage.getItem("pagos");
  const blob = new Blob([data], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "reporte.json";
  a.click();
}

function exportarPDF() {
  const doc = new jsPDF();
  doc.text("Reporte Contable Jardín Infantil", 10, 10);
  const datos = localStorage.getItem("pagos");
  doc.text(datos, 10, 20);
  doc.save("reporte.pdf");
}
