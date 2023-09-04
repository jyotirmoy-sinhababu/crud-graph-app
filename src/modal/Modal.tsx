import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal-cnt fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.6)] flex justify-center items-center'>
      {children}
    </div>,
    document.getElementById('portal') as Element
  );
};

export default Modal;
