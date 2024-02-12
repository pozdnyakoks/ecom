import './Footer.scss';

export const Footer = () => {
  const year = new Date();
  return (
    <footer className='footer'>
      <div className='container'>

        <p>© ДВ МЕХАНИКА, {year.getFullYear()}</p>
      </div>
    </footer>
  )
}