import { useState } from "react";

export default function AddForm({ onAddItem }) {
  const [nama, setNama] = useState("");
  const [kategori, setKategori] = useState("Elektronik");
  const [pemilik, setPemilik] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama.trim() || !pemilik.trim()) return;

    const newItem = {
      id: Date.now(),
      nama,
      kategori,
      pemilik,
      deskripsi: deskripsi || "Tidak ada deskripsi tambahan.",
      gambar:
        "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=500&q=80",
      status: true,
    };

    onAddItem(newItem);

    // Reset Form
    setNama("");
    setPemilik("");
    setDeskripsi("");
  };

  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="h5 text-primary mb-3">Tawarkan Barang Baru</h3>
      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">Nama Barang</label>
            <input
              type="text"
              className="form-control"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
              placeholder="Contoh: Kabel Roll"
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Kategori</label>
            <select
              className="form-select"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
            >
              <option value="Elektronik">Elektronik & Media</option>
              <option value="Praktikum">Alat Praktikum</option>
            </select>
          </div>
          <div className="col-md-4">
            <label className="form-label">Nama Pemilik</label>
            <input
              type="text"
              className="form-control"
              value={pemilik}
              onChange={(e) => setPemilik(e.target.value)}
              required
              placeholder="Nama Anda"
            />
          </div>
          <div className="col-12">
            <label className="form-label">Deskripsi Singkat</label>
            <textarea
              className="form-control"
              rows="2"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Kondisi atau spesifikasi barang..."
            ></textarea>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success">
              Tambah ke Katalog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
