import { useEffect, useState } from "react";
import "../assets/css/categories.css"
import { getProducts } from "../apis/product";
import { Link } from "react-router-dom";

export const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((res) => setProducts(res.data)).catch((e) => console.log(e))
  }, [])


  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="container mt-5">
      <CategoryFilter
        onCategoryClick={handleCategoryClick}
        selectedCategory={selectedCategory}
      />
      <hr className="border border-black border-3" />
      <ProductList products={filteredProducts} />
    </div>
  );

  function CategoryFilter({ onCategoryClick, selectedCategory }) {
    const img = [
      "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/T-Shirts/tbuvzqlxkcdhlondtvno",
      "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Jeans/q0ivpfkbpgp2oxl7qlzd",
      "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Shirts/hasikqrhziy516vlwfot",
      "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Lowers/cedvkefuptxtazezforh",
      "https://res.cloudinary.com/dq6ewdwlv/image/upload/f_auto,q_auto/v1/Insta%20Shop/Shorts/hhnmg62anrel62ntko5m"
    ]
    const categories = ["T-Shirt", "Jeans", "Shirt", "Lower"];
    return (
      <div className="mb-4">
        <h2 className="shop-heading mt-5">CATEGORIES</h2>

        <ul className="row">
          {categories.map((category, index) => (
            <div className='col-lg-3 px-1 col-md-4 my-2 cat-card'>
              <div className='position-relative' onClick={() => onCategoryClick(category)} style={{ cursor: "pointer" }}>
                <img src={img[index]} alt="categoryimage" className='w-100 my-3' style={{ height: "18rem" }} />
                <div className='position-absolute bottom-0 m-2 py-3 px-2 fs-3 fw-normal text-white cat-text'>{category}</div>
              </div>
            </div>
          ))}







        </ul>
      </div>
    );
  }


  function ProductList({ products }) {
    return (
      <div className="row">
        {products.length >= 0 ? products.map((data) => (
          <div className='col-lg-4 col-md-6 my-3 mb-5'>
            <Link to={`/singleproduct/${data.id}/${data.category}`} className='card border-0 text-decoration-none'>
              {data.img && data.img.length > 0 ? (
                <img src={data.img[0]} alt="product img" height="367" />
              ) : null}
              <div className='small text-secondary mx-2 mt-2'>{data.brand}</div>
              <div className='m-2 fs-6'>{data.title} </div>
              <div className='fs-6 fw-bold mx-2'> ₹ {data.price}  </div>
            </Link>
          </div>
        )) : ""}
      </div>
    );
  }
}

