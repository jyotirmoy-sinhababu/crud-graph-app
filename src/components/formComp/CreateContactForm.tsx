import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../assest/slice/ContactSlice';

interface ModalProps {
  closeModal: any;
}

const CreateContactForm: React.FC<ModalProps> = ({ closeModal }) => {
  const [createContactData, setCreateContactData] = useState<{
    [key: string]: any;
  }>({});

  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state?.contact);
  console.log(contacts);

  const handleDispatch = () => {
    dispatch(
      addContact({ ...contacts, ...{ id: Date.now(), ...createContactData } })
    );
    setCreateContactData({});
  };

  return (
    <div>
      <button type='button' onClick={closeModal}>
        <RxCross1 />{' '}
      </button>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          handleDispatch();
        }}
      >
        <input
          onChange={(e) => {
            setCreateContactData({
              ...createContactData,
              [e.target.name]: e.target.value,
            });
          }}
          name='firstName'
          type='text'
          required
          placeholder='First Name'
        />
        <input
          onChange={(e) => {
            setCreateContactData({
              ...createContactData,
              [e.target.name]: e.target.value,
            });
          }}
          name='secondName'
          type='text'
          required
          placeholder=' Second Name'
        />
        <input
          onChange={(e) => {
            setCreateContactData({
              ...createContactData,
              [e.target.name]: e.target.value,
            });
          }}
          name='isActive'
          type='checkbox'
        />
        <input
          onChange={(e) => {
            setCreateContactData({
              ...createContactData,
              [e.target.name]: e.target.value,
            });
          }}
          name='isInActive'
          type='checkbox'
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateContactForm;
