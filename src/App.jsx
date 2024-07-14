import { useState } from 'react'
import './App.css'
import logo from "./assets/imgs/logo.svg";
import searchIcon from "./assets/imgs/searchIcon.svg";
import earthIcon from "./assets/imgs/earthIcon.svg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className='header'>
      <section className='header__one'>
        <div className="container header__one__container">
          <img src={logo} className='logo' alt="logo.svg" />
          <div className="search">
            <img src={searchIcon} alt="searchIcon.svg" className="searchIcon" />
            <input type="search" name="searchText" id="searchText" placeholder='Cari apapun disini...' />
          </div>
          <div className="earth">
            <img src={earthIcon} alt="earthIcon.svg" />
            <select name="address1" id="address1">
              <option value="">Bahasa Indonesia</option>
            </select>
          </div>
        </div>
      </section>
    </header>

    </>
  )
}

export default App
