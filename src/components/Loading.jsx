export default function LoadingSpinner() {
  return (
    <div className="text-center py-5">
      <div
        className="spinner-border text-primary"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
      <p className="text-muted mt-3 fw-semibold">
        Memuat data dari API server...
      </p>
    </div>
  );
}
