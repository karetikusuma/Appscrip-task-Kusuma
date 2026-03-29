export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title.substring(0, 50)}</h2>
      <p className="price">₹{product.price}</p>
    </div>
  );
}