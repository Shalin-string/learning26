import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { HeadrComponents } from './components/HeadrComponents'
import { FooterComponent } from './components/FooterComponent'
import { ContentComponent } from './components/ContentComponent'
import { NetflixNevbar } from './components/NetflixNevbar'
import { MapDemo1 } from './components/MapDemo1'
import { MapDemo2 } from './components/MapDemo2'
import { MapDemo3 } from './components/MapDemo3'
import { MapDemo5 } from './components/MapDemo5'
import { MapDemo4 } from './components/MapDemo4'
import { MapDemo6 } from './components/MapDemo6'
import { Link, Route, Routes } from 'react-router-dom'
import { NetflixHome } from './components/Netflix/NetflixHome'
import { NetflixShows } from './components/Netflix/NetflixShows'
import { Error404 } from './components/Error404'
import { Watch } from './components/Netflix/Watch'
import { NetflixMovies } from './components/Netflix/NetflixMovies'
import { IplTeams } from './components/Netflix/IplTeams'
import { Details } from './components/Netflix/Details'
import { Students } from './components/Students'
import { Result } from './components/Result'
import { UseCount1 } from './components/UseCount1'
import { Input1 } from './components/Input1'
import { FormDemo1 } from './components/form/FormDemo1'
import { FormDemo2 } from './components/form/FormDemo2'
import { FormDemo4 } from './components/form/FormDemo4'
import { FormDemo5 } from './components/form/FormDemo5'
import { FindGameBomb } from './components/FindGameBomb'
import { ApiDemo1 } from './components/API/ApiDemo1'
import { ApiDemo2 } from './components/API/ApiDemo2'
import { ApiDemo22 } from './components/API/ApiDemo22'
import { OmdbSearch } from './components/API/OmdbSearch'
import { ToastContainer } from 'react-toastify'
import { ApiDemo3 } from './components/API/ApiDemo3'
import { Login } from './components/API/Login'
import { ItemComponent } from './components/API/ItemComponent'
import { UpdateUser } from './components/API/UpdateUser'
import { AddProducts } from './components/API/AddProducts'
// import { Inputdemo1 } from './components/Inputdemo1'
// import { PracticeComponents } from './components/PracticeComponents'


function App() {
  
  return (
    <div>
     <NetflixNevbar></NetflixNevbar>
      <Routes>
        <Route path='/' element = {<NetflixHome/>}></Route>
        <Route path='/NetflixHome' element = {<NetflixHome/>}></Route>
        <Route path='/NetflixShows' element = {<NetflixShows/>}></Route>
        <Route path='/NetflixMovies' element = {<NetflixMovies/>}></Route>
        {/* <Route path='/IplTeams' element = {<IplTeams/>}></Route> */}
        <Route path='/Students' element = {<Students/>}></Route>
        <Route path='/Results/:id' element = {<Result/>}></Route>
        <Route path = '/UseCount1' element = {<UseCount1/>}></Route>
        {/* <Route path= '/inputdemo1' element = {<inputdemo1/>}></Route> */}
        {/* <Route path = '/InputDemo1' element = {<Inputdemo1/>}></Route> */}
        <Route path='/Input1' element = {<Input1/>}></Route>
        {/* <Route path='/details/:details' element = {<Details/>}></Route> */}
        <Route path='/watch/:name' element = {<Watch/>}></Route>
        <Route path='*' element = {<Error404/>}></Route>
        <Route path='/FormDemo1' element = {<FormDemo1/>}></Route>
        <Route path='/FormDemo2' element = {<FormDemo2/>}></Route>
        <Route path='/FormDemo4' element = {<FormDemo4/>}></Route>
        <Route path='/FormDemo5' element = {<FormDemo5/>}></Route>
        <Route path='/FindGameBomb' element = {<FindGameBomb/>}></Route>
        <Route path='/ApiDemo1' element = {<ApiDemo1/>}></Route>
        <Route path='/ApiDemo2' element = {<ApiDemo2/>}></Route>
        <Route path='/ApiDemo3' element = {<ApiDemo3/>}></Route>
        <Route path='/ApiDemo22' element = {<ApiDemo22/>}></Route>
        <Route path='/omdbSearch' element = {<OmdbSearch/>}></Route>
        <Route path='/Login' element = {<Login/>}></Route>
        <Route path='/ItemComponent' element = {<ItemComponent/>}></Route>
        <Route path='/UpdateUser/:id' element = {<UpdateUser/>}></Route>
        <Route path='/AddProducts' element = {<AddProducts/>}></Route>


      </Routes>

    </div>
    
  )
}

export default App
