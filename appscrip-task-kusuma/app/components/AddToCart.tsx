export default function ProductCard({ product }) {
  return (
    <div className="card">
      <img src={product.image} alt={product.title} />

      <div className="card-content">
        <h2>{product.title.substring(0, 40)}...</h2>
        <p className="price">₹{product.price}</p>
      </div>
    </div>
  );
}