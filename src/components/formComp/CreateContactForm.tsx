import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../assest/slice/ContactSlice';

interface ModalProps {
  closeModal: any;
}

const CreateContactForm: React.FC<ModalProps> = ({ closeModal }) => {
  const [createContactData, setCreateContactData] = useState<any>();

  const dispatch = useDispatch();
  const contacts = useSelector((state: any) => state?.contact?.contacts);

  const handleDispatch = () => {
    const newContact = {
      ...createContactData,
      id: idGenerator(),
    };
    console.log(contacts);
    dispatch(addContact([...contacts, newContact]));
    setCreateContactData({});
  };

  const idGenerator = () => {
    return Math.floor(Math.random() * 100000) + 1;
  };
  console.log(createContactData);

  return (
    <div className='w-full max-w-[380px] p-4 relative border border-borderGrey mx-auto rounded-lg'>
      <button
        className='text-xl bg-transparent border-none absolute top-2 right-2 '
        type='button'
        onClick={closeModal}
      >
        <RxCross1 />{' '}
      </button>
      <form
        className='flex flex-col gap-4 pb-3 pt-5 px-1 '
        onSubmit={(e: any) => {
          e.preventDefault();
          handleDispatch();
        }}
      >
        <input
          className='border border-borderGrey rounded h-10 pl-1'
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
          className='border border-borderGrey rounded h-10 pl-1'
          onChange={(e) => {
            setCreateContactData({
              ...createContactData,
              [e.target.name]: e.target.value,
            });
          }}
          name='secondName'
          type='text'
          required
          placeholder=' Last Name'
        />
        <div className='flex items-center gap-4'>
          <div className='flex-items-center gap-1 '>
            <input
              className='border border-borderGrey rounded h-4 '
              onChange={(e) => {
                setCreateContactData({
                  ...createContactData,
                  [e.target.name]: e.target.value,
                });
              }}
              name='status'
              type='radio'
              value='on'
            />
            <label>Active</label>
          </div>
          <div className='flex items-center gap-1'>
            <input
              className='border border-borderGrey rounded h-4 '
              onChange={(e) => {
                setCreateContactData({
                  ...createContactData,
                  [e.target.name]: e.target.value,
                });
              }}
              name='status'
              type='radio'
              value='off'
            />
            <label>Not active</label>
          </div>
        </div>
        <div>
          <button className='' type='submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContactForm;
