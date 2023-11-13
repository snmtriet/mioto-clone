import { Link } from 'react-router-dom'
import { IconArrowDown, IconBar } from '@/components/shared/Icon'

type UserDropdownProps = {
  onOpen: () => void
}

const UserDropdown = (props: UserDropdownProps) => {
  const { onOpen } = props
  return (
    <div className="dropdown-profile">
      <Link className="dropdown-profile" to="/account">
        <div className="avatar avatar--s">
          <img loading="lazy" src="/mfer.jpg" alt="Minh Triet" />
        </div>
        <span className="name">Minh Triet</span>
        <div className="wrap-svg">
          <IconArrowDown />
        </div>
      </Link>
      <div className="wrap-svg tab-menu" onClick={onOpen}>
        <IconBar />
      </div>
    </div>
  )
}

export default UserDropdown
