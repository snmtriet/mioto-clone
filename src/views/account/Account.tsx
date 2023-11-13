import { Content, Sidebar } from './components'

const Account = () => {
  return (
    <div className="account-section sec space">
      <div className="m-container">
        <div className="account-container">
          <Sidebar />
          <Content />
        </div>
      </div>
    </div>
  )
}

export default Account
