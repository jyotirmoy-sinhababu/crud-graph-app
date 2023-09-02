import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';

const EditContactForm = ({ closeModal }: any) => {
  const [editedData, setEditedData] = useState<any>();

  const contacts = useSelector((state: any) => state?.contact?.contacts);

  return (
    <div>
      {' '}
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <input
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='firstName'
          type='text'
          required
          placeholder='First Name'
        />
        <input
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='secondName'
          type='text'
          required
          placeholder=' Second Name'
        />
        <input onChange={(e) => {}} name='status' type='radio' value='on' />
        <label>Active</label>
        <input onChange={(e) => {}} name='status' type='radio' value='off' />
        <label>Not active</label>
        <div>
          <button type='submit'>Save</button>
          <button type='button' onClick={closeModal}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditContactForm;
