import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useNavigate, useParams } from 'react-router-dom'

const EditProduct = () => {
  const [namaProduk, setNamaProduk] = useState('')
  const [keterangan, setKeterangan] = useState('')
  const [harga, setHarga] = useState('')
  const [jumlah, setJumlah] = useState('')
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    getUserById()
  }, [])

  const updateProduct = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(`http://localhost:5000/products/${id}`, {
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

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/products/${id}`)
    setNamaProduk(response.data.nama_produk)
    setKeterangan(response.data.keterangan)
    setHarga(response.data.harga)
    setJumlah(response.data.jumlah)
  }

  return (
    <div>
      <h1 className="mt-5 mb-3">Edit Produk</h1>
      <Form onSubmit={updateProduct}>
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
          Update
        </Button>
      </Form>
    </div>
  )
}

export default EditProduct
