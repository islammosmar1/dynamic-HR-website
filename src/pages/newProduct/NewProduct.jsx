// import "./newProduct.css";

// export default function NewProduct() {
//   return (
//     <div className="newProduct">
//       <h1 className="addProductTitle">New Product</h1>
//       <form className="addProductForm">
//         <div className="addProductItem">
//           <label>Image</label>
//           <input type="file" id="file" />
//         </div>
//         <div className="addProductItem">
//           <label>Name</label>
//           <input type="text" placeholder="Apple Airpods" />
//         </div>
//         <div className="addProductItem">
//           <label>Stock</label>
//           <input type="text" placeholder="123" />
//         </div>
//         <div className="addProductItem">
//           <label>Active</label>
//           <select name="active" id="active">
//             <option value="yes">Yes</option>
//             <option value="no">No</option>
//           </select>
//         </div>
//         <button className="addProductButton">Create</button>
//       </form>
//     </div>
//   );
// }

import React, { useState } from 'react';
import "./newProduct.css";

export default function NewProduct() {
  const [product, setProduct] = useState({
    id: Math.floor(Math.random() * 1000),
    name: '',
    stock: '',
    status: 'yes',
    price: '$0.00',
    releaseDate: '',
    img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevProduct => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProduct(prevProduct => ({
          ...prevProduct,
          img: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = [...storedProducts, product];
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    alert('Product added successfully!');
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={handleImageUpload}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Apple Airpods"
            required
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="123"
            required
          />
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select
            name="status"
            value={product.status}
            onChange={handleChange}
            required
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={product.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <button className="addProductButton">Create</button>
      </form>
    </div>
  );
}