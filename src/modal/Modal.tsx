import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal-cnt'>{children}</div>,
    document.getElementById('portal') as Element
  );
};

export default Modal;
