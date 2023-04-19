import Title from "../title/Title"

const Header = ({children}) => {
  return (
    <div className="Header-container">
      <Title title = {children}/>
    </div>
  )
}
// <Etiqueta propiedades={valorDeLaPropiedad}></Etiqueta>
export default Header