import React, { Component } from 'react';
import ContactForm from './AddProfileForm';
import ContactList from './ContactList';

const initialState = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

export class App extends Component {
  state = { ...initialState };

  handleAddContact = (contact) => {
    const { contacts } = this.state;

    const isNameExist = contacts.some((existingContact) => existingContact.name === contact.name);

    if (isNameExist) {
      alert(`'${contact.name}' is  already in contacts.`);
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      contacts: [...prevState.contacts, contact],
    }));
  };

  handleDeleteContact = (contactId) => {
    this.setState((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter((contact) => contact.id !== contactId),
    }));
  };

  handleFilterChange = (e) => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleAddContact} />
        <h2>Contacts</h2>
        <label>
          Find contacts by name:
          <input type="text" value={filter} onChange={this.handleFilterChange} />
        </label>
        <ContactList contacts={contacts} filter={filter} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;