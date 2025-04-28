// components/AdminRoute.jsx
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { selectCurrentRole } from '../redux/authSlice'

const AdminRoute = () => {
  const role = useSelector(selectCurrentRole)
  return role === 'admin' ? <Outlet /> : <Navigate to="/login" replace />
}

export default AdminRoute