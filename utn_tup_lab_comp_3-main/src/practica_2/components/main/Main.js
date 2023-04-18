import Body from "../body/Body"

const Main = ({pageBody }) => {
  return (
    <Body pageBody={pageBody}>
      <nav>
        <ul>
          <li><a href="https://www.twiter.com">twiter</a></li>
          <li><a href="https://www.facebook.com">facebook</a></li>
        </ul>
      </nav>
    </Body>
  )
}

export default Main