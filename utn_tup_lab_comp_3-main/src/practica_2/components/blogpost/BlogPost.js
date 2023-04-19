import Title from "../title/Title"
import Body from "../body/Body"

const newTitleAndBody = {
    newTitle :'Habló la novia del hombre acribillado mientras reparaba una bici: "Vino arrastrándose y murió encima mío"',
    newBody :'María, pareja del hombre asesinado, dio detalles del ataque. Dijo que sujetos en moto le dispararon a Damián cuando estaba en la vereda.'
};

const BlogPost = () => {
  return (
    <>
        <Title title={newTitleAndBody.newTitle}/>
        <Body body={newTitleAndBody.newBody}/>
    </>
  )
}

export default BlogPost