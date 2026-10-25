import ItemCard from "./ItemCard";

export default function ItemList({ items }) {
  if (items.length === 0) {
    return (
      <div className="text-center py-5 card shadow-sm">
        <p className="text-muted fs-5 mb-0">
          Belum ada data barang yang ditemukan.
        </p>
      </div>
    );
  }

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
