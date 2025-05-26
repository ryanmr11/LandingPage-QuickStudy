import './App.css';
import logo from './img/quickstudy.png';
import avatar1 from './img/avatar1.png';
import mascote from './img/mascQs.png';
import avatarSuporte from './img/suporte.png';
import insta from './img/insta.png';
import tiktok from './img/ttk.png';
import ytb from './img/ytb.png';
import emailIcon from './img/email.png';
import seta from './img/seta.png';

import emailjs from '@emailjs/browser';


import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Book from './components/book/animation.jsx';
import InfiniteSlider from './components/slider/slider.jsx';


function App() {
  const secaoRef = useRef(null);
  const refSuporte = useRef(null);
  const refSobre = useRef(null);
  const carousel = useRef();

  const [width, setWidth] = useState(0);

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    if (email === '' || message === '') {
      alert('preencha todos os campos');
      return;
    }

    const templateParams = {
      message: message,
      email: email
    }

    emailjs.send('service_6yoc3fl', 'template_j0h7fzf', templateParams, "G5yGSMGXHPaaRTFBd")
      .then((response) => {
        console.log("email enviado", response.status, response.text)
        setEmail('');
        setMessage('');

      }, (err) => {
        console.log("ERRO: ", err)
      })
  }

  const scrollParapremium = () => {
    secaoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollParaSuporte = () => {
    refSuporte.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollParaSobre = () => {
    refSobre.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div>
        <div className="appBar">

          <div className="logo-container">
            <img src={logo} alt="logo" id='logo' />
            <h1>Quick Study</h1>
          </div>

          <div className="links">
            <ul>
              <li className='link'>Início</li>
              <li className='link' onClick={scrollParapremium}>Premium</li>
              <li className='link' onClick={scrollParaSuporte}>Suporte</li>
              <li className='link' onClick={scrollParaSobre}>Sobre</li>
            </ul>
          </div>

        </div>
        <main>
          <div className="main-content-1">
            <h1>Estudar não precisa ser <span>chato</span>.</h1>
            <h2>Vem aprender & jogar!</h2>
            <div className="line"></div>
            <button className="btn-primary">
              Conheça agora
              <i class="ri-arrow-drop-right-line" id='arrow-right'></i>
            </button>
          </div>
          <div className="main-content-2">
            <img src={avatar1} alt="imagem" id='avatar' />
          </div>
        </main>

        <div className="main2" ref={secaoRef} >
          <img src={mascote} alt="mascote" id='mascotePremium' />
          <div className="content-premium">
            <h1 className='h1-premium'>Premium</h1>
            <h1 className='h1-desc'>QUER GABARITAR A PROVA?</h1>
            <h2 className='h1-desc'>O premium te leva até lá com diversão e estratégia</h2>
            <button className='btn-confira'>Confira</button>
          </div>
        </div>

        <div className="container-suporte" ref={refSuporte} style={{ scrollMarginTop: '20px' }}>
          <div className="content-suporte-1">
            <img src={avatarSuporte} alt="avatar de suporte " id='avatarSuporte' />
          </div>
          <div className="content-suporte-2">
            <h1 className='h1-suporte'>Central de suporte</h1>
            <h2>Perguntas frequentes:</h2>


            <p>Como funciona o modo de jogo?</p>
            <p>Como acessar o conteúdo premium?</p>
            <p id='ult-p'>Estou com problemas de acesso, e agora?</p>

            <h2 id='h2-sugestao'>
              Sugestões:
            </h2>

            <div className="input-sugestao">
              <form className='form' onSubmit={sendEmail}>
                <input
                  className="input"
                  type="text"
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />

                <textarea
                  className="textarea"
                  placeholder="Digite sua mensagem..."
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                />

                <input className="butto" type="submit" value="Enviar" />
              </form>
            </div>
          </div>
        </div>

        <div className="sobre" ref={refSobre} style={{ scrollMarginTop: '10px' }}>

          <div className="title-arrow">
            <img src={seta} alt="seta" className='seta' />
            <h1 className='saiba1pouco'>Saiba um pouco sobre nós</h1>
          </div>
          <Book />
        </div>
        <div className="fundadores">
          <h1 id='h1-fundadores'>Fundadores</h1>
          <InfiniteSlider />
        </div>
        <footer>
          <div className="footer">
            <div className="line-gray"></div>
            <h1>Onde nos encontrar</h1>
            <div className="line-gray"></div>
          </div>

          <div className="redes-sociais">
            <a href="https://www.instagram.com/quickstudy_0?igsh=cXgwcjNuaWR5ZTI2" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="instagram" className='redesQs' />
            </a>

            <a href="https://www.youtube.com/@QuickStudy-r2o" target="_blank" rel="noopener noreferrer">
              <img src={ytb} alt="youtube" className='redesQs' />
            </a>
          </div>
          <div className="email">
            <img src={emailIcon} alt="" id='icon-email' />
            <p>quickstudy983@gmail.com</p>
          </div>
          <div className="rodape">

          </div>
        </footer>
      </div>

    </>
  )
}

export default App
