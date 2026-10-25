export default function ItemCard({ item }) {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm position-relative">
        <span
          className={`badge position-absolute top-0 end-0 m-2 ${item.status ? "bg-success" : "bg-secondary"}`}
        >
          {item.status ? "Tersedia" : "Dipinjam"}
        </span>
        <img
          src={item.gambar}
          className="card-img-top"
          style={{ height: "200px", objectFit: "cover" }}
          alt={item.nama}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{item.nama}</h5>
          <p className="text-muted small mb-1">
            <strong>Pemilik:</strong> {item.pemilik}
          </p>
          <p className="card-text text-muted small">{item.deskripsi}</p>
          <button
            className="btn btn-outline-primary btn-sm mt-auto"
            onClick={() => alert(`Detail: ${item.nama}`)}
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
