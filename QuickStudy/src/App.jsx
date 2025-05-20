import './App.css';
import logo from './img/quickstudy.png';
import avatar1 from './img/avatar1.png';
import mascote from './img/mascQs.png';
import avatarSuporte from './img/suporte.png';
import elipse from './img/elipse.png';
import circle from './img/circle.png';
import triangle from './img/triangle.png';
import line from './img/line.png';
import quad from './img/quadrado.png';
import insta from './img/insta.png';
import tiktok from './img/ttk.png';
import ytb from './img/ytb.png';
import email from './img/email.png';
import tainara from './img/tainara.jpg';
import jc from './img/jc.jpg';
import ryan from './img/eu.jpg';
import tais from './img/tais.jpg';
import wly from './img/wly.jpg';

import React, { useRef, useState, useEffect } from 'react';
import {motion} from 'framer-motion';

const images = [ryan, tainara, jc, tais, wly];


function App() {
  const secaoRef = useRef(null);
  const refSuporte = useRef(null);
  const refSobre = useRef(null);
  const carousel = useRef();
  const [width, setWidth] = useState(0);

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
            <img src={avatar1} alt="imagem" id='avatar'/>
          </div>
        </main>

        <div className="main2" ref={secaoRef} >
          <div className="background">
            <div className="relative w-full h-[200vh] overflow-hidden">
      <svg
        viewBox="0 0 1440 700"
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="100%" height="100%" fill="#407BFF" />

        <path
          d="M0,500 C400,600 1000,400 1440,550 L1440,600 L0,600 Z"
          fill="#ffffff"
          opacity="1"
          transform="translate(0, 100)"
          
        />

        <circle cx="100" cy="100" r="20" fill="white" opacity="0.05" />
        <circle cx="150" cy="300" r="30" fill="white" opacity="0.05" />
        <rect x="60" y="200" width="50" height="50" rx="8" fill="white" opacity="0.05" />
        <polygon
          points="250,120 270,160 230,160"
          fill="white"
          opacity="0.05"
        />

        <circle cx="1100" cy="200" r="20" fill="white" opacity="0.05" />
        <circle cx="1200" cy="400" r="20" fill="white" opacity="0.05" />
      </svg>
    </div>
          </div>
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
              <input type="text" id='input-text-sugestao' placeholder='Escreva aqui ...' />
              <i class="ri-arrow-drop-right-line"></i>
            </div>

            <img src={elipse} id='elipse' />
            <img src={circle} className='circle' />
            <img src={triangle} className='triangle' />
            <img src={line} id='line-gray' />
            <img src={quad} id='quadrado' />

          </div>

        </div>

        <div className="sobre" ref={refSobre} style={{ scrollMarginTop: '100px' }}>
          <h1>Sobre</h1>
          <p>O QuickStudy é um aplicativo interativo de estudos gamificados, criado especialmente para alunos que estão se preparando para vestibulares como ENEM, Fuvest, Unicamp, entre outros. Com uma abordagem divertida e eficiente, o app oferece quizzes, desafios diários, revisão por flashcards e simulados por matéria. Os usuários acumulam pontos, sobem de nível e desbloqueiam conquistas à medida que avançam, tornando o estudo mais leve, motivador e produtivo. Tudo isso com foco no conteúdo mais cobrado nas provas e com relatórios de desempenho personalizados.

</p>
        </div>
        <div className="fundadores">
          <h1 id='h1-fundadores'>Fundadores</h1>
          <div className="relative w-full h-[600px] bg-black overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="scale(1, -1) translate(0, -320)">
          <path
            fill="#006AFF"
            d="M0,160 C360,0 1080,320 1440,160 L1440,0 L0,0 Z"
          />
        </g>
      </svg>
      <svg
        viewBox="0 0 1440 320"
        className="absolute top-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1F8CFF"
          d="M0,160 C360,0 1080,320 1440,160 L1440,0 L0,0 Z"
        />
      </svg>

      <div className="app-carousel">
        <motion.div ref={carousel} className="carousel" whileTap={{cursor: 'grabbing'}}>
          <motion.div className='inner' drag="x" dragConstraints={{right: 0, left: -width}}>
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

        <footer>
          <div className="title">
            <img src={line} alt="linha" className='line'/>
            <h1>Onde nos encontrar</h1>
            <img src={line} alt="linha" className='line'/>
          </div>
          <div className="redes-sociais">
            <img src={insta} alt="img insta" className='redesQs'/>
            <img src={tiktok} alt="img tiktok" className='redesQs'/>
            <img src={ytb} alt="img youtube" className='redesQs'/>
          </div>
            <p id='title-email'>Email</p>
          <div className="email">
            <img src={email} alt="img email" id='icon-email' />
            <p>quickstudy983@gmail.com</p>
          </div>
        </footer>

        <div className="rodape">

        </div>
    </div>
    </>
  )
}

export default App
