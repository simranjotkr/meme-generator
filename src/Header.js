import trollface from './images/TrollFace.svg'
import './Header.css'

export default function Header() {
    return (
        <header className='header'>
            <img className='header--img' src={trollface} alt='troll-face' />
            <h1 className='header--h1'>Meme Generator</h1>
            <h2 className='header--h2'>React Course - Project 3</h2>
        </header>
    )
}