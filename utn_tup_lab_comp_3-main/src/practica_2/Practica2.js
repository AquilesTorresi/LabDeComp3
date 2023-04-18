import Header from "./components/header/Header.js";
import Main from "./components/main/Main.js";
const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};

const twiter = "https://www.twiter.com";
const facebook = "https://www.facebook.com";

const Practica2 = () => {
    return (
        <div>
            <Header pageTitle= {site.pageTitle}/>
            <Main twiter={twiter} facebook = {facebook}/>
        </div>
    );
};

export default Practica2;