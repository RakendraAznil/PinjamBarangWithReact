import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ItemList from "./components/ItemList";
import AddForm from "./components/AddForm";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      nama: "Proyektor Epson EB-X400",
      kategori: "Elektronik",
      pemilik: "Rakendra Aznil",
      deskripsi:
        "Proyektor Epson EB-X400 berkualitas tinggi untuk presentasi bisnis dan pendidikan.",
      gambar:
        "https://tokocentralpc.com/wp-content/uploads/2024/10/Untitled-222.jpg",
      status: true,
    },
    {
      id: 2,
      nama: "Tripod Kamera Takara",
      kategori: "Elektronik",
      pemilik: "Rakendra Aznil",
      deskripsi:
        "Tripod stabil dan ringan, cocok untuk kebutuhan fotografi dan videografi tugas kuliah.",
      gambar:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
      status: false,
    },
    {
      id: 3,
      nama: "Wireless Microphone",
      kategori: "Elektronik",
      pemilik: "Rakendra Aznil",
      deskripsi:
        "Mikrofon tanpa kabel jernih untuk keperluan seminar, acara organisasi, atau presentasi.",
      gambar:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=500&q=80",
      status: true,
    },
  ]);

  const [keyword, setKeyword] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("");

  const handleAddItem = (newItem) => {
    setItems([newItem, ...items]);
  };

  const filteredItems = items.filter((item) => {
    const matchKeyword = item.nama
      .toLowerCase()
      .includes(keyword.toLowerCase());
    const matchKategori =
      selectedKategori === "" || item.kategori === selectedKategori;
    return matchKeyword && matchKategori;
  });

  return (
    <div className="bg-light min-vh-100">
      <Navbar />

      <main className="container my-4">
        <div className="mb-4">
          <h2 className="h4 text-primary fw-bold">Katalog Peminjaman Barang</h2>
          <p className="text-muted">
            Total Barang Tersedia: <strong>{filteredItems.length}</strong> item
          </p>
        </div>

        <SearchForm
          keyword={keyword}
          setKeyword={setKeyword}
          selectedKategori={selectedKategori}
          setSelectedKategori={setSelectedKategori}
        />

        <AddForm onAddItem={handleAddItem} />

        <ItemList items={filteredItems} />
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">&copy; 2026 PinjamBarang - Proyek React Dasar</p>
      </footer>
    </div>
  );
}

export default App;
