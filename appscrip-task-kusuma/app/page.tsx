import Head from "next/head";
import ProductCard from "../components/ProductCard";

export async function getServerSideProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Discover Products | Appscrip</title>
        <meta name="description" content="Explore latest products at best prices" />
      </Head>

      {/* HEADER */}
      <header className="header">
        <h2 className="logo">Appscrip Store</h2>
      </header>

      {/* TITLE */}
      <section className="title-section">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </section>

      {/* PRODUCT GRID */}
      <section className="grid">
        {products.map((item) => (
          <ProductCard key={item.id} product={item} />
        ))}
      </section>
    </>
  );
}