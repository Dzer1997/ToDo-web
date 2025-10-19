import React, { useState, useEffect } from 'react'
import { getAllCategories, addCategory } from '../services/api'

const CategorySelect = ({value, onChange}) => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");


  useEffect(() => {
    const fetchCategories = async () => {
      const cats = await getAllCategories();
      if(cats) setCategories(cats);
    }
    fetchCategories();
  }, []);

  const handleAddCategory = async () => {
    const created = await addCategory({name: newCategory});
    setCategories([...categories, created]);
    setNewCategory("");
  }

  return (
    <div>
      <select value={value} onChange={e => onChange(Number(e.target.value))}>
        <option value="">Vælg kategori</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      <input className='text-area' type="text" placeholder='Test' value={newCategory} onChange={e => setNewCategory(e.target.value)}/>
      <button className='primary-btn' onClick={handleAddCategory}>Tilføj kategori</button>
    </div>
  )
}

export default CategorySelect