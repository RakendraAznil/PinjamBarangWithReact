import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import ItemList from "./components/ItemList";
import AddForm from "./components/AddForm";
import ErrorMessage from "./components/Error";
import LoadingSpinner from "./components/Loading";

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [keyword, setKeyword] = useState("");
  const [selectedKategori, setSelectedKategori] = useState("");

  // Fungsi untuk mengambil data dari API
  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=6",
      );

      if (!response.ok) {
        throw new Error("Terjadi kesalahan koneksi saat menyambung ke API.");
      }

      const data = await response.json();

      const formattedItems = data.map((item, index) => ({
        id: item.id,
        nama: item.title.slice(0, 25),
        kategori: index % 2 === 0 ? "Elektronik" : "Praktikum",
        pemilik: `Mahasiswa SE-${item.userId}`,
        deskripsi: item.body,
        gambar:
          index % 2 === 0
            ? "https://tokocentralpc.com/wp-content/uploads/2024/10/Untitled-222.jpg"
            : "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=500&q=80",
        status: index % 3 !== 0,
      }));

      setItems(formattedItems);
    } catch (err) {
      setError(err.message || "Gagal mengambil data dari server.");
    } finally {
      setLoading(false);
    }
  };

  // Menggunakan useEffect untuk memanggil fetchItems saat komponen pertama kali dimuat
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchItems();
  }, []);

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
    <div className="min-vh-100 bg-white">
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

        {/* Conditional Rendering State: Loading, Error, atau Success */}
        {loading && <LoadingSpinner />}

        {error && <ErrorMessage message={error} onRetry={fetchItems} />}

        {!loading && !error && <ItemList items={filteredItems} />}
      </main>

      <footer className="bg-dark text-white text-center py-3 mt-5">
        <p className="mb-0">
          &copy; 2026 PinjamBarang - Proyek React Ajax & API
        </p>
      </footer>
    </div>
  );
}

export default App;
