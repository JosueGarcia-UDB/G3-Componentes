'use client';

import React, { useState } from 'react';
import Compra from './Compra';
import styles from '../page.module.css';

const Form = () => {

  const [compra, setcompra] = useState({});
  const [compras, setcompras] = useState([
    {compra: 'compra 1'},
    {compra: 'compra 2'},
    {compra: 'compra 3'},
  ]);

  const handleChange = (e) => setcompra({[e.target.name]: e.target.value});

  const handleClick = (e) => {
    if(Object.keys(compra).length === 0 || compra.compra.trim() === ''){
      alert('el campo no puede ser vacío')
      return;
    }
    setcompras([...compras, compra])
  }
  const deleteCompra = (index) => {
    const newCompras = [...compras]
    newCompras.splice(index, 1);
    setcompras(newCompras);
  }

  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <label>Agregar compras</label><br/>
        <input className={styles.form_input} type="text" name="compra" onChange={handleChange} />
        <button className={styles.form_button} type="submit" onClick={handleClick}>Agregar</button>
      </form>
      {compras.map((value, index) => 
        (<Compra key={index} compra={value.compra} deleteCompra={deleteCompra} />)
        )}
    </>
  )
}

export default Form;