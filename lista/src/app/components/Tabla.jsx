
import { IconTrash, IconEdit } from "@tabler/icons-react";

const Tabla = ({sales, handleDelete, handleEdit}) => {
  return (
    <table className="table table-striped">
      <thead className="table-primary">
        <tr>
          <th className="text-center">Nombre</th>
          <th className="text-center">Marca</th>
          <th className="text-center">Cantidad</th>
          <th className="text-center">Precio</th>
          <th className="text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          sales.map((sale, index) => (
            <tr key={index}>
              <td className="align-middle text-center">{sale.name}</td>
              <td className="align-middle text-center">{sale.brand}</td>
              <td className="align-middle text-center">{sale.quantity}</td>
              <td className="align-middle text-center">${sale.price}</td>
              <td className="align-center d-flex gap-3 justify-content-center align-items-center">
                <button className="btn btn-warning" onClick={() => handleEdit(index)}><IconEdit size={20}/>Editar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(index)}><IconTrash size={20}/>Eliminar</button>
              </td>
            </tr>
          ))
        }
        <tr>
          <td className="text-center table-success" colSpan="5">Total: ${sales.reduce((acc, sale) => acc + sale.price * sale.quantity, 0)}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default Tabla;