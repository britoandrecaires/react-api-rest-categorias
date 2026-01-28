import { useEffect, useState } from "react";

function App() {
  const [categorias, setCategorias] = useState([]);

  // buscar categorias à API
  useEffect(() => {
    fetch("http://localhost:8080/categorias/listar.php")
      .then(res => res.json())
      .then(data => {
        console.log("Categorias:", data); // 👈 ajuda a confirmar
        setCategorias(data);
      })
      .catch(err => console.error(err));
  }, []);

  const downloadCSV = () => {
    window.location.href =
      "http://localhost:8080/categorias/exportar_CSV.php";
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Categorias</h1>

      <button onClick={downloadCSV}>Download CSV</button>

      <ul>
        {categorias.map(cat => (
          <li key={cat.id}>
            <strong>{cat.nome}</strong> — {cat.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
