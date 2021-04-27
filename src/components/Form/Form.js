import React from 'react';
import PropTypes from "prop-types";
import styles from './Form.module.css';

const Form = ({name, number, onSubmit, nameInputId, numberInputId, onChange}) => (
    
    <form className='form' onSubmit={onSubmit}>
        <label className={styles['label']} htmlFor={nameInputId}>Name</label>
        <input className={styles['input']}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={onChange}
            id={nameInputId}>
        </input>
        <label className='label' htmlFor={numberInputId}>Number</label>
        <input className='input'
             type="text"
             name="number"
             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
             required
             value={number}
             onChange={onChange}
             id={numberInputId}>
        </input>
                            
        <button type='submit'>Add contact</button>
    </form>
);

Form.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    onSubmit: PropTypes.func,
    nameInputId: PropTypes.string,
    numberInputId: PropTypes.string,
    onChange: PropTypes.func
};

export default Form;