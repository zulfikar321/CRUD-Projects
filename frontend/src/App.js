import Container from 'react-bootstrap/Container'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AddProduct from './components/AddProduct'
import EditProduct from './components/EditProduct'
import ProductList from './components/ProductList'

function App() {
  return (
    <div className="App">
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="add" element={<AddProduct />} />
            <Route path="edit/:id" element={<EditProduct />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  )
}

export default App
