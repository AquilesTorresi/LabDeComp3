import Body from "../body/Body"
import BlogPost from "../blogpost/BlogPost"

const Main = ({children}) => {
  return (
    <>
    <div className="Main">
      <Body body={children}/>
    </div>
    <BlogPost/>
      <nav>
          <ul>
              <li><a href="https://www.twitter.com">twiter</a></li>
              <li><a href="https://www.facebook.com">facebook</a></li>
              <h3> Hola esto es la practica DOS de Lab de Comp. </h3>
          </ul>
      </nav>
    </>
  )
}

export default Main