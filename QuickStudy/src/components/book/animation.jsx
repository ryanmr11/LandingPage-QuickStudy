import React, { useState, useEffect, useRef } from "react";
import "./animation.css";
import logoAlt from '../../img/logo-outraCor.png'

function Book(){
    const [opened, setOpened] = useState(false); // controla rotação da capa
    const [textRevealed, setTextRevealed] = useState(false); // controla cor do texto
    const coverRef = useRef(null);

    useEffect(() => {
        const handleTransitionEnd = () => {
            setTextRevealed(true);
        };

        const cover = coverRef.current;
        if (cover) {
            cover.addEventListener("transitionend", handleTransitionEnd);
        }

        return () => {
            if (cover) {
                cover.removeEventListener("transitionend", handleTransitionEnd);
            }
        };
    }, []);

    const handleClick = () => {
        setOpened(true);
    };

    return (
        <div className="book-scene" onClick={handleClick}>
            <div className="book">
                <div
                    className={`book-cover ${opened ? "open" : ""}`}
                    ref={coverRef}
                >
                    <div className={`book-title ${textRevealed ? "revealed" : ""}`}>
                        <img src={logoAlt} alt="logo" className="img-logo" />
                    </div>
                </div>
                <div className="book-pages">
                    <p>O QuickStudy é um aplicativo interativo de estudos gamificados, criado especialmente para alunos que estão se preparando para vestibulares como ENEM, Fuvest, Unicamp, entre outros. Com uma abordagem divertida e eficiente, o app oferece quizzes, desafios diários, revisão por flashcards e simulados por matéria. Os usuários acumulam pontos, sobem de nível e desbloqueiam conquistas à medida que avançam, tornando o estudo mais leve, motivador e produtivo. Tudo isso com foco no conteúdo mais cobrado nas provas e com relatórios de desempenho personalizados.</p>
                </div>
            </div>
        </div>
    );
};

export default Book;
