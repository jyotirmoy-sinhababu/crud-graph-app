import { useState } from 'react';

import { GrAdd } from 'react-icons/gr';
import Modal from '../../modal/Modal';
import CreateContactForm from '../formComp/CreateContactForm';

const ContactComp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen);
  };
  console.log(isOpen);
  return (
    <div>
      <div>
        <p>Contact Page</p>
      </div>
      <div>
        <button type='button' onClick={handleModal}>
          Create Contacts <GrAdd />{' '}
        </button>
      </div>
      <div>
        <Modal isOpen={isOpen}>
          <CreateContactForm />
        </Modal>
      </div>
    </div>
  );
};

export default ContactComp;
