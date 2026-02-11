import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import Inicio from "../Inicio/Inicio"
import AcoesDaConnect from "../AcoesDaConnect/AcoesDaConnect"
import QuemSomos from "../QuemSomos/QuemSomos"
import Perfil from "../Perfil/Perfil"
import styles from './NavBar.module.scss'

import Logo from '../../assets/logo.png'
import ImgPerfil from '../../assets/Perfil.png'

export default function NavBar(){
    return(
        <BrowserRouter>
            <nav className={styles.navBar}>
                <Link to='/'>
                    <img src={Logo} alt="Logo Ações" />
                </Link>
                <ul>
                    <li>
                        <Link to='/'> Início </Link>
                    </li>
                    <li>
                        <Link to='/acoesDaConnect'>Ações da Connect</Link>
                    </li>
                    <li>
                        <Link to='/quemSomos'>Quem Somos</Link>
                    </li>
                </ul>

                    <Link to='/Perfil'>
                        <img className={styles.imgPerfil} src= {ImgPerfil} alt="Foto perfil" />
                    </Link>
                
            </nav>

            <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='acoesdaconnect' element={<AcoesDaConnect/>}/>
                <Route path='quemsomos' element={<QuemSomos/>}/>
                <Route path='perfil' element={<Perfil/>}/>
            </Routes>


        </BrowserRouter>
    )
}
