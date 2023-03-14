import { createPortal } from 'react-dom';
import type { FC, PropsWithChildren } from 'react';
import closeIcon from 'assets/icons/close.svg';
import styles from './Modal.module.scss';

type ModalProps = {
  onClickOutside?: () => void;
  onClose?: () => void;
};

const MODAL_ROOT_ID = 'modal-root';

let modalRoot = document.getElementById(MODAL_ROOT_ID);

if (modalRoot == null) {
  modalRoot = document.createElement('div');
  modalRoot.id = MODAL_ROOT_ID;
  document.body.append(modalRoot);
}

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  onClickOutside,
  onClose,
}) =>
  createPortal(
    <div className={styles.modalWrapper} onMouseDown={onClickOutside}>
      <div
        className={styles.modalContainer}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.closePanel}>
          <div>Edit</div>
          {onClose && (
            <button type="button" onClick={onClose}>
              <img src={closeIcon} alt="close" />
            </button>
          )}
        </div>
        {children}
      </div>
    </div>,
    modalRoot as HTMLElement
  );

export default Modal;
