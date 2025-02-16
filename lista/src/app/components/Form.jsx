import { useState } from "react";
import Tabla from "./Tabla";

const Form = () => {
  const [sales, setSales] = useState([]);
  //Inputs
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || brand === "" || quantity === 0 || price === 0) {
      alert("Todos los campos son requeridos");
      return;
    }
    setSales([
      ...sales,
      { name: name, brand: brand, quantity: quantity, price: price },
    ]);
    setName("");
    setBrand("");
    setQuantity(0);
    setPrice(0);
  };

  const handleDelete = (index) => {
    const newSales = sales.filter((_, i) => i !== index);
    setSales(newSales);
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    const newSales = sales.map((sale, i) =>
      i === index
        ? {
            ...sale,
            name: name,
            brand: brand,
            quantity: quantity,
            price: price,
          }
        : sale
    );
    setSales(newSales);
    setName("");
    setBrand("");
    setQuantity(0);
    setPrice(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col mb-3">
            <label className="form-label" htmlFor="nameProduct">
              Nombre del producto
            </label>
            <input
              className="form-control"
              type="text"
              name="nameProduct"
              id="nameProduct"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col mb-3">
            <label className="form-label" htmlFor="marca">
              Marca
            </label>
            <input
              className="form-control"
              type="text"
              name="marca"
              id="marca"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col mb-3">
            <label className="form-label" htmlFor="cantidad">
              Cantidad
            </label>
            <input
              className="form-control"
              type="number"
              name="cantidad"
              id="cantidad"
              min={0}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <div className="col mb-3">
            <label className="form-label" htmlFor="precio">
              Precio
            </label>
            <input
              className="form-control"
              type="number"
              name="precio"
              id="precio"
              min={0}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>
        <div className="d-flex justify-content-center my-3">
          {isEditing && (
            <button className="btn btn-warning" type="submit">Editar</button>
          )}
          {!isEditing && (
            <button className="btn btn-success" type="submit">Agregar compra</button>
          )}
        </div>
      </form>
      <h2 className="text-center text-primary">Lista de compras</h2>
      <Tabla
        sales={sales}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
};

export default Form;
