export default function ErrorMessage({ message, onRetry }) {
  return (
    <div
      className="alert alert-danger d-flex align-items-center justify-content-between p-4 my-4 shadow-sm"
      role="alert"
    >
      <div>
        <h5 className="alert-heading fw-bold mb-1">Gagal Memuat Data!</h5>
        <p className="mb-0">{message}</p>
      </div>
      <button
        className="btn btn-outline-danger font-monospace"
        onClick={onRetry}
      >
        Coba Lagi
      </button>
    </div>
  );
}
