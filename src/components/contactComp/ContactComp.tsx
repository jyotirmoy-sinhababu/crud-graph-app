import { useState } from 'react';

import { GrAdd } from 'react-icons/gr';
import Modal from '../../modal/Modal';

const ContactComp = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModal = () => {
    isOpen ? setIsOpen(!isOpen) : setIsOpen(isOpen);
  };

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
        <Modal isOpen={isOpen}></Modal>
      </div>
    </div>
  );
};

export default ContactComp;
