import React from 'react';
import PropTypes from "prop-types";
import styles from './ContactList.module.css';

const ContactList = ({contacts, onRemove}) => (
    <ul className={styles['contact-list']}>
        {contacts.map(({ id, name, number }) => (
            <li className={styles['contact-list-item']} key={id} name={name} number={number}>
                <p className={styles['contact-list-text']}>{name}: {number}</p>
                <button className={styles['contact-list-button']} type="button" onClick={() => onRemove(id)}>Delete</button>
            </li>
        ))}
    </ul>
    
);

ContactList.propTypes = {
    contacts: PropTypes.array,
    onRemove: PropTypes.func
}

export default ContactList;



