import React from 'react'
import './Modal.css'
import ModalImg from './modalImg.jpg'

const Modal = ({open, closeFunc}) => {

    if (!open) return null

    const Techs = [
        {id: 1, name: "HTML"},
        {id: 2, name: "CSS"},
        {id: 3, name: "SCSS"},
        {id: 4, name: "Tailwind CSS"},
        {id: 5, name: "JavaScript"},
        {id: 6, name: "React Js"},
    ]

  return (
    <section onClick={closeFunc} className='modal'>
        <div onClick={(e) => {
            e.stopPropagation()
        }} className="container">
            <img src={ModalImg} alt={ModalImg} />
            <div className="right">
                <div onClick={closeFunc} className="close-btn">X</div>
                <div className="content">
                    <div className="skills">
                        <h1>Dela Ricch</h1>
                        <h3>Front End Developer</h3>
                        <div className="lang">
                            {
                                Techs.map(tech => (
                                    <h5 key={tech.id}>{tech.name}</h5>
                                ))
                            }  
                        </div>     
                    </div>
                </div>
                <div className="buttons">
                    <button className='contact'>Contact</button>
                    <button className='resume'>Download Resume</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Modal