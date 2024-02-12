import { Link } from 'react-router-dom';
import './Header.scss';

export const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <nav>
          <ul>
            <li><Link to='/about'>О компании</Link></li>
            <li><Link to='/contacts'>Контакты</Link></li>
          </ul>
          <div className='header__links'>
            <a href='mailto:#'>
              <img width='20' height='20' src='/mail.svg' /> <span>
                example@mail.ru
              </span>
            </a>
            <a href='tel:#'>
              <img width='20' height='20' src='/phone.svg' />
              <span>
                +7 123 456 78 90
              </span>
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}