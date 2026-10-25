export default function SearchForm({
  keyword,
  setKeyword,
  selectedKategori,
  setSelectedKategori,
}) {
  return (
    <div className="card shadow-sm p-4 mb-4">
      <h3 className="h5 text-primary mb-3">Cari Barang Kampus</h3>
      <div className="row g-3">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Cari berdasarkan nama barang..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={selectedKategori}
            onChange={(e) => setSelectedKategori(e.target.value)}
          >
            <option value="">Semua Kategori</option>
            <option value="Elektronik">Elektronik & Media</option>
            <option value="Praktikum">Alat Praktikum</option>
          </select>
        </div>
      </div>
    </div>
  );
}
