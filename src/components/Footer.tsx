import { Link } from 'react-router-dom'
import PokemonPic from '../assets/pikachu.png'
import LocationPic from '../assets/pointer.png'
import ItemsPic from '../assets/pokeball.png'
import Style from './footer.module.css'

const Footer = () => {
    return (
        <footer className={Style.footer}>
            <Link className={Style.footerLink} to="/Pokemons">
                <img className={Style.footerIcon} src={PokemonPic} alt="pikachu" />
                Pokemons
            </Link>
            <Link className={Style.footerLink} to="/items">
                <img className={Style.footerIcon} src={ItemsPic} alt="pokeball"/>
                Items
            </Link>
            <Link className={Style.footerLink} to="/location">
                <img className={Style.footerIcon} src={LocationPic} alt='pointer'/>
                Map
            </Link>
        </footer>
    )
}

export default Footer
