import React, { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {
  const [namaProduk, setNamaProduk] = useState('')
  const [keterangan, setKeterangan] = useState('')
  const [harga, setHarga] = useState('')
  const [jumlah, setJumlah] = useState('')
  const navigate = useNavigate()

  const saveProduct = async (e) => {
    e.preventDefault()
    try {
      await axios.post('http://localhost:5000/products', {
        nama_produk: namaProduk,
        keterangan,
        harga,
        jumlah
      })
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1 className="mt-5 mb-3">Tambah Produk</h1>
      <Form onSubmit={saveProduct}>
        <Form.Group className="mb-3">
          <Form.Label>Nama Produk</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nama Produk"
            value={namaProduk}
            onChange={(e) => setNamaProduk(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Keterangan</Form.Label>
          <Form.Control
            type="text"
            placeholder="Keterangan"
            value={keterangan}
            onChange={(e) => setKeterangan(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Harga</Form.Label>
          <Form.Control
            type="number"
            placeholder="Harga"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>jumlah</Form.Label>
          <Form.Control
            type="number"
            placeholder="jumlah"
            value={jumlah}
            onChange={(e) => setJumlah(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Simpan
        </Button>
      </Form>
    </div>
  )
}

export default AddProduct
