// import React, { useState } from 'react'
// import "./productList.css"


// import { DataGrid } from '@mui/x-data-grid';
// import { Avatar } from '@mui/material';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import {productRows} from "../../dummyData";
// import { Link } from 'react-router-dom';
// import { DeleteOutline } from '@mui/icons-material';


// export default function ProductList() {
//     const [data, setData]= useState(productRows);

//     const handleDelete = (id) => {
//         setData(data.filter((item) => item.id !== id));
//       };


//       const columns = [
//           { field: "id", headerName: "ID", width: 90 },
//           {
//             field: "product",
//             headerName: "Product",
//             width: 200,
//             renderCell: (params) => {
//               return (
//                 <div className="productListItem">
//                   <img className="ProductListImg" src={params.row.img} alt="" />
//                   {params.row.name}
//                 </div>
//               );
//             },
//           },
//           { field: "stock", headerName: "Stock", width: 200 },
//           {
//             field: "status",
//             headerName: "Status",
//             width: 120,
//           },
//           {
//             field: "price",
//             headerName: "Price",
//             width: 160,
//           },
//           {
//             field: "action",
//             headerName: "Action",
//             width: 150,
//             renderCell: (params) => {
//               return (
//                 <>
//                   <Link to={"/product/" + params.row.id}>
//                     <button className="productListEdit">Edit</button>
//                   </Link>
//                   <DeleteOutline
//                     className="productListDelete"
//                     onClick={() => handleDelete(params.row.id)}
//                   />
//                 </>
//               );
//             },
//           },
//         ];
      

//   return (
//     <div className='productList'>
//            <DataGrid
//               rows={data}
//               disableSelectionOnClick
//               columns={columns}
//               pageSize={8}
//               checkboxSelection
//             /> 
//     </div>
//   )
// }


import React, { useState, useEffect } from 'react';
import "./productList.css";
import { DataGrid } from '@mui/x-data-grid';
import { Avatar } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { productRows } from "../../dummyData";
import { Link } from 'react-router-dom';
import { DeleteOutline } from '@mui/icons-material';

export default function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products')) || productRows;
    setData(storedProducts);
  }, []);

  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
    localStorage.setItem('products', JSON.stringify(newData));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='productList'>
      <div className="productListHeader">
        <h1 className="productListTitle">Products</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
