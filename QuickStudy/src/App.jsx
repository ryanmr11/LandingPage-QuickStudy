import './App.css';
import logo from './img/quickstudy.png';
import avatar1 from './img/avatar1.png';
import mascote from './img/mascQs.png';
import avatarSuporte from './img/suporte.png';
import line from './img/line.png';
import insta from './img/insta.png';
import tiktok from './img/ttk.png';
import ytb from './img/ytb.png';
import email from './img/email.png';
import tainara from './img/tainara.jpg';
import jc from './img/jc.jpg';
import ryan from './img/eu.jpg';
import tais from './img/tais.jpg';
import wly from './img/wly.jpg';

import emailjs from '@emailjs/browser';


import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const images = [ryan, tainara, jc, tais, wly];


function App() {
  const secaoRef = useRef(null);
  const refSuporte = useRef(null);
  const refSobre = useRef(null);
  const carousel = useRef();

  const [width, setWidth] = useState(0);

  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('');

  function sendEmail(e){
    e.preventDefault();

    if(email === '' || message === '' ){
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

  useEffect(() => {
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  }, [])

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

        <div className="container-suporte" ref={refSuporte} style={{ scrollMarginTop: '80px' }}>
          <div className="content-suporte-1">
            <img src={avatarSuporte} alt="avatar de suporte " id='avatarSuporte' />
          </div>
          <div className="content-suporte-2">
            <h1>Central de suporte</h1>
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

                <input className="butto" type="submit" value="Enviar"/>
              </form>
            </div>
          </div>
        </div>

        <div className="sobre" ref={refSobre} style={{ scrollMarginTop: '100px' }}>
          <h1>Sobre</h1>
          <p>O QuickStudy é um aplicativo interativo de estudos gamificados, criado especialmente para alunos que estão se preparando para vestibulares como ENEM, Fuvest, Unicamp, entre outros. Com uma abordagem divertida e eficiente, o app oferece quizzes, desafios diários, revisão por flashcards e simulados por matéria. Os usuários acumulam pontos, sobem de nível e desbloqueiam conquistas à medida que avançam, tornando o estudo mais leve, motivador e produtivo. Tudo isso com foco no conteúdo mais cobrado nas provas e com relatórios de desempenho personalizados.

          </p>
        </div>
        <div className="fundadores">
          <h1 id='h1-fundadores'>Fundadores</h1>


          <div className="app-carousel">
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
              <motion.div className='inner' drag="x" dragConstraints={{ right: 0, left: -width }}>
                {images.map(image => (
                  <motion.div className='item' key={image}>
                    <img src={image} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
