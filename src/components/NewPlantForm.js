import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: 0
  })

  function handleSubmit(e) {
    e.preventDefault();
    fetch('http://localhost:6001/plants', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(resp => resp.json())
    .then(data => onAddPlant(data))
  }
  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form>
        <input onChange={e => setFormData({...formData, [e.target.name] : e.target.value})} type="text" name="name" placeholder="Plant name" />
        <input onChange={e => setFormData({...formData, [e.target.name] : e.target.value})} type="text" name="image" placeholder="Image URL" />
        <input onChange={e => setFormData({...formData, [e.target.name] : e.target.value})} type="number" name="price" step="0.01" placeholder="Price" />
        <button onClick={ handleSubmit}type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
