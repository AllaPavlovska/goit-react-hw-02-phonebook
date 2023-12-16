import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import css from'./AddProfileForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };

  const handleNumberChange = e => {
    setNumber(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit({ id: nanoid(), name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.formLabel}>
        <span className={css.formLabelText}>Name:</span> 
        <input className={css.formInput}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          required
        />
         <span className={css.formLabelText}> Number:</span>
        <input className={css.formInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

export default ContactForm;