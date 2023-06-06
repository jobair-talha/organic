import Heading from "./Heading";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <>
      <section className="mt-14">
        <Heading />
        <div className="max-w-screen-xl mx-auto mt-7 p-4 categories translate-[-50%,-50%]">
          <div className="grid md:grid-cols-6 grid-cols-2 gap-4">
            {[...Array(24)].map((item, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
