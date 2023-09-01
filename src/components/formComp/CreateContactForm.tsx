import { RxCross1 } from 'react-icons/rx';

interface ModalProps {
  closeModal: any;
}

const CreateContactForm: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <div>
      <button type='button' onClick={closeModal}>
        <RxCross1 />{' '}
      </button>
      <form>
        <input type='text' required placeholder='First Name' />
        <input type='text' required placeholder=' Second Name' />
        <input name='isActive' type='checkbox' />
        <input name='isInActive' type='checkbox' />
      </form>
    </div>
  );
};

export default CreateContactForm;
