import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const response = await axios.get('http://localhost:5000/products')
    setProducts(response.data)
  }

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`)
      getProducts()
    } catch (error) {
      console.log(error)
    }
  }

  const convertToIDR = (number) => {
    var formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    })

    return formatter.format(number)
  }

  return (
    <div>
      <h1 className="mt-5 mb-3">List Produk</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama Produk</th>
            <th>Keterangan</th>
            <th>Harga</th>
            <th>Jumlah</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>{product.nama_produk}</td>
              <td>{product.keterangan}</td>
              <td>{convertToIDR(product.harga)}</td>
              <td>{product.jumlah}</td>
              <td>
                <Link to={'/edit/' + product.id}>
                  <Button variant="primary m-1">Edit</Button>
                </Link>
                <Button
                  variant="danger m-1"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to="/add">
        <Button variant="success m-1">Tambah Produk</Button>
      </Link>
    </div>
  )
}

export default ProductList
