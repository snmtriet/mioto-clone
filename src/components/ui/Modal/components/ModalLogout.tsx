import { useAuth } from '@/utils/hooks'

type ModalLogoutProps = {
  onClose: () => void
}

const ModalLogout = (props: ModalLogoutProps) => {
  const { onClose } = props
  const { signOut } = useAuth()

  const handleLogout = () => {
    signOut()
    onClose()
  }

  return (
    <div className="modal-confirm-body">
      <p className="font-14">Bạn chắc chắn muốn đăng xuất không?</p>
      <div className="wrap-btn has-2-btn">
        <button onClick={handleLogout} className="btn btn--m btn-primary">
          Đăng xuất
        </button>
      </div>
    </div>
  )
}

export default ModalLogout
