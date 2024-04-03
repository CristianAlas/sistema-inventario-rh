import React from 'react'

export const Footer = () => {
  return (
    <div className="container">
    <br />
    <br />
        <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                <li className="nav-item"><a href="/" className="nav-link px-2 text-body-secondary" >Home</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" >Sobre nosotros</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary" >Contactenos</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2023 CalasCompani, Inc</p>
        </footer>
    </div>
  )
}
