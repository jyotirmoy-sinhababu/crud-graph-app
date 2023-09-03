import { useState } from 'react';

import { GrAdd } from 'react-icons/gr';
import Modal from '../../modal/Modal';
import CreateContactForm from '../formComp/CreateContactForm';

const ContactComp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const closeModal = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <div>
        <div>
          <p>Contact Page</p>
        </div>
        <div>
          <button type='button' onClick={handleModal}>
            Create Contacts <GrAdd />{' '}
          </button>
        </div>
      </div>

      <div>
        <Modal isOpen={isOpen}>
          <CreateContactForm closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default ContactComp;
