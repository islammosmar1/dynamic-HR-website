import React, { useState, useEffect } from 'react';
import "./product.css";
import { Link, useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from "../../dummyData";
import { Publish } from '@mui/icons-material';

export default function Product() {
  const { productId } = useParams();
  const [product, setProduct] = useState({
    id: productId,
    name: 'Apple Airpods',
    stock: 123,
    status: 'active',
    price: '$120.00',
    releaseDate: '2023-01-01',
    img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
  });

  useEffect(() => {
    // جلب البيانات من localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const currentProduct = storedProducts.find(p => p.id === parseInt(productId));
    if (currentProduct) {
      setProduct(currentProduct);
    } else {
      // إذا لم يتم العثور على المنتج، قم بإضافته إلى localStorage
      const newProduct = {
        id: productId,
        name: 'Apple Airpods',
        stock: 123,
        status: 'active',
        price: '$120.00',
        releaseDate: '2023-01-01',
        img: 'https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      };
      localStorage.setItem('products', JSON.stringify([...storedProducts, newProduct]));
      setProduct(newProduct);
    }
  }, [productId]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    const updatedProducts = storedProducts.map(p => p.id === parseInt(productId) ? product : p);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    alert('Product updated successfully!');
  };

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

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} title="Sales Performance" grid dataKey="Sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.name}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product.id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">{product.status}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.stock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm" onSubmit={handleUpdate}>
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Apple AirPod"
              required
            />
            <label>In Stock</label>
            <input
              type="number"
              name="stock"
              value={product.stock}
              onChange={handleChange}
              placeholder="123"
              required
            />
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
            <label>Release Date</label>
            <input
              type="date"
              name="releaseDate"
              value={product.releaseDate}
              onChange={handleChange}
              required
            />
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: "none" }}
                onChange={handleImageUpload}
                required
              />
            </div>
            <button type="submit" className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}