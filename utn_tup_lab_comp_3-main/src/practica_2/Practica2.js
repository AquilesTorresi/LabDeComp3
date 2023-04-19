import Page from "../practica_2/components/page/Page";

const site = {
    pageTitle: 'Unidad 1.2 - Práctica',
    pageBody: 'Implementación de árbol de componentes y propiedades en React.'
};


export default function Practica2 () {
    return (
        <div>
            <Page title={site.pageTitle}
            body={site.pageBody}/>
        </div>
    );
}
