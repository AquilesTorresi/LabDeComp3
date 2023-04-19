import Main from "../main/Main"
import Header from "../header/Header"
const Page = ({title, body}) => {
  return (
    <>
      <Header>{title}</Header>
      <Main>{body}</Main>
    </>
  )
}

export default Page