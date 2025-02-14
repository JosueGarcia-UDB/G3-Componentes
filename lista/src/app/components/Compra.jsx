import React, { useState } from 'react';
import styles from '../page.module.css';
import { IconTrash, IconEdit } from '@tabler/icons-react';

const Compra = ({compra, index, deleteCompra}) => {
  return (
    <div className={styles.compraContainer}>
      <h3 className="Titulo3">{compra}</h3>
      <div className={styles.buttons}>
        <button className={styles.btn_edit + ' ' + styles.btn} onClick={() => updateCompra(index)}><IconEdit color='black'/></button>
        <button className={styles.btn_delete + ' ' + styles.btn} onClick={() => deleteCompra(index)}><IconTrash /></button>
      </div>
    </div>
  )
}
export default Compra;