import { useEffect, useRef, useState } from "react";
// // import Product from "./Product";
// import Product from "./Product";

// const productsPerPage = 10;

// export default function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [page, setPage] = useState(0);
//   const [hasMore, setHasMore] = useState(true);
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch(
//         `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
//           page * productsPerPage
//         }`
//       );
//       const data = await response.json();

//       if (data.products.length === 0) {
//         setHasMore(false);
//       } else {
//         setProducts((prevProducts) => [...prevProducts, ...data.products]);
//         setPage((prevPage) => prevPage + 1);
//       }
//     };

//     const onIntersection = (items) => {
//       const loaderItem = items[0];

//       if (loaderItem.isIntersecting && hasMore) {
//         fetchProducts();
//       }
//     };

//     const observer = new IntersectionObserver(onIntersection);

//     if (observer && loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }

//     // cleanup
//     return () => {
//       if (observer) observer.disconnect();
//     };
//   }, [hasMore, page]);

//   return (
//     <div>
//       <div>Product List</div>

//       {products.map((product) => (
//         <Product
//           title={product.title}
//           price={product.price}
//           thumbnail={product.thumbnail}
//           key={product.id}
//         />
//       ))}

//       {hasMore && <div ref={loaderRef}>Loading more products...</div>}
//     </div>
//   );
// }

import Product from "./Product";
const productsPerPage = 10;

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);
  const isFetching = useRef(false); // To prevent overlapping fetches

  const fetchProducts = async () => {
    if (isFetching.current) return; // Avoid multiple fetches
    isFetching.current = true;

    const response = await fetch(
      `https://dummyjson.com/products?limit=${productsPerPage}&skip=${
        page * productsPerPage
      }`
    );
    const data = await response.json();

    if (data.products.length === 0) {
      setHasMore(false);
    } else {
      setProducts((prevProducts) => [...prevProducts, ...data.products]);
      setPage((prevPage) => prevPage + 1);
    }

    isFetching.current = false; // Allow subsequent fetches
  };

  useEffect(() => {
    const onIntersection = (entries) => {
      const loaderItem = entries[0];

      if (loaderItem.isIntersecting && hasMore && !isFetching.current) {
        fetchProducts();
      }
    };

    const observer = new IntersectionObserver(onIntersection);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // Cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  }, [hasMore]);

  return (
    <div>
      <div>Product List</div>

      <div className="flex flex-wrap justify-center mx-3">
        {products.map((product) => (
          <Product
            title={product.title}
            price={product.price}
            thumbnail={product.thumbnail}
            key={product.id}
          />
        ))}
      </div>
      {hasMore && <div ref={loaderRef}>Loading more products...</div>}
    </div>
  );
}
