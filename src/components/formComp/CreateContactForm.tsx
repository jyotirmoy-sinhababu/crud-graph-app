const CreateContactForm = () => {
  return (
    <div>
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
