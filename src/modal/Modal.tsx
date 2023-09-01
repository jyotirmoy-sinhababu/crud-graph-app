import ReactDOM from 'react-dom';
import './modalStyle.css';

const Modal = ({ isOpen: boolean }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className='modal-cnt'>{}</div>,
    document.getElementById('portal')
  );
};

export default Modal;
