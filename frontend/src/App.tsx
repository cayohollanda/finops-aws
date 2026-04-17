import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Environments from './pages/Environments'
import EnvironmentDetail from './pages/EnvironmentDetail'
import Schedules from './pages/Schedules'
import Recommendations from './pages/Recommendations'
import Resources from './pages/resources/Resources'
import EC2 from './pages/resources/EC2'
import EKS from './pages/resources/EKS'
import RDS from './pages/resources/RDS'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/environments" element={<Environments />} />
          <Route path="/environments/:id" element={<EnvironmentDetail />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/resources" element={<Resources />}>
            <Route index element={<Navigate to="/resources/ec2" replace />} />
            <Route path="ec2" element={<EC2 />} />
            <Route path="eks" element={<EKS />} />
            <Route path="rds" element={<RDS />} />
          </Route>
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
