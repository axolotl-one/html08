import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Planets from '../pages/Planets'
import NotFound from '../pages/NotFound'
import InfoPlanet from '../pages/InfoPlanet'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/planets' element={<Planets/>}/>
        <Route path='/planets/:name' element={<InfoPlanet/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default AppRoutes