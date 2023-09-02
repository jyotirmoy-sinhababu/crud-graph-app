import { useState } from 'react';

import { useDispatch } from 'react-redux';

const EditContactForm = ({ closeModal, item }: any) => {
  const [editedData, setEditedData] = useState<any>();

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
          value={item.firstName}
        />
        <input
          onChange={(e) => {
            setEditedData({ ...editedData, [e.target.name]: e.target.value });
          }}
          name='secondName'
          type='text'
          required
          placeholder=' Second Name'
          value={item.secondName}
        />
        <input
          onChange={(e) => {}}
          name='status'
          type='radio'
          value={item.status}
        />
        <label>Active</label>
        <input
          onChange={(e) => {}}
          name='status'
          type='radio'
          value={item.status}
        />
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
