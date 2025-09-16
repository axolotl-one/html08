import { Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Citas from '../pages/Citas'
import InfoCita from '../pages/InfoCita'
import NotFound from '../pages/NotFound'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/citas' element={<Citas/>}/>
      <Route path='/citas/:id' element={<InfoCita/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes