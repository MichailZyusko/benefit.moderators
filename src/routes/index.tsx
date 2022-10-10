import { Route, Routes } from 'react-router-dom';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<div />} />
      <Route path="/dumps" element={<span>123</span>} />
    </Routes>
  );
}
