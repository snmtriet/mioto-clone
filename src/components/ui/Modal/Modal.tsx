import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { useClickOutside } from '@/utils/hooks'

type ModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
  className?: string
  headerTitle?: string
}

const Modal = (props: ModalProps) => {
  const { open, onClose, children, className, headerTitle } = props
  const [fadeIn, setFadeIn] = useState(false)
  const modalRef = useClickOutside(() => onCloseWithFadeOut())

  useEffect(() => {
    if (typeof document !== 'undefined' && open) {
      document.body.className = 'modal-open'
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = '6px'
      setFadeIn(true)
    } else {
      document.body.removeAttribute('class')
      document.body.removeAttribute('style')
      setFadeIn(false)
    }
  }, [open])

  const onCloseWithFadeOut = () => {
    setFadeIn(false)
    setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!open) return null

  return ReactDOM.createPortal(
    <div role="dialog">
      <div
        onClick={onCloseWithFadeOut}
        className={classNames('modal-backdrop fade', fadeIn && 'in')}
      ></div>
      <div
        role="dialog"
        className={classNames('fade modal', fadeIn && 'in')}
        style={{ display: 'block' }}
      >
        <div className={classNames('modal-dialog', className)}>
          <div className="modal-content" ref={modalRef}>
            <div className="modal-header">
              <button
                type="button"
                className="close"
                onClick={onCloseWithFadeOut}
              >
                <span aria-hidden="true">×</span>
                <span className="sr-only" />
              </button>
              <h5>{headerTitle}</h5>
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default Modal
