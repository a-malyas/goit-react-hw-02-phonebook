import React, { Component } from 'react';
import './App.css';
import 'modern-normalize/modern-normalize.css';
import Form from './components/Form/Form';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './components/Contacts/ContactList';
import Filter from './components/Filter/Filter';

class App extends Component {
  state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },],
        name: '',
        number: '',
        filter: ''
    };
    nameInputId = uuidv4();
    numberInputId = uuidv4();
    
    addContacts = (name, number) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        };

        this.setState(({ contacts }) => ({
            contacts: [contact, ...contacts],
        }));
    };
    handleChangeFilter = filter => {
        this.setState({ filter });
    };
        
    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
      e.preventDefault();
      if (this.state.contacts.some(({ name }) => name === this.state.name)) {
      alert(`${this.state.name} is already in contacts.`);
      this.reset();
      return;
    };
        this.setState(prevState => {
            return {
                contacts: [...prevState.contacts, { name: prevState.name, number: prevState.number, id: uuidv4() }]
            }
        });
        this.reset();
    };
    reset = () => {
        this.setState({ name: '', number: '' });
    };
    changeFilter = e => {
        this.setState({filter: e.currentTarget.value});
    }
    deleteContact = contactId => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }));
    };

    render() {
        const { filter } = this.state;
        const normalizedFilter = this.state.filter.toLowerCase();
        const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
        return (
          <div>
            <h1>Phonebook</h1>
            <Form
              name={this.state.name}
              number={this.state.number}
              onSubmit={this.handleSubmit}
              nameInputId={this.nameInputId}
              numberInputId={this.numberInputId}
              onChange={this.handleChange}/>
            <h1 className='contacts-title'>Contacts</h1>
            <Filter value={filter} onChange={this.changeFilter}/>
            <ContactList contacts={filteredContacts} name={this.name} number={this.number} onRemove={this.deleteContact}/>
            </div>
        );
    };
};
  


export default App;
