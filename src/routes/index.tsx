import { Route, Routes } from 'react-router-dom';
import ProductsPage from '../pages/products';

export default function Router() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
    </Routes>
  );
}
