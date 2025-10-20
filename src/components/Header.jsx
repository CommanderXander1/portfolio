import '../styles/Header.css'
import name from'../assets/title-name.png'

const Header = () => {
    return (
        <div className='header' id='home'>
            <p className='header' id='header-top'>Hello! I am</p>
            <img className='header' src={name}></img>
            <p className='header' id='header-bottom'>I am proficient in</p>
        </div>
    )
}

export default Header