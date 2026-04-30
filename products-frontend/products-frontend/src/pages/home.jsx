import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './Home.module.css'

function Home(){
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [descripition, setDescripition] = useState('')
    const [category, setCategory] = useState('')
    const [stock, setStock] = useState('')
  
  //Requisição HTTP POST
  async function cadastro(event) {
    event.preventDefault()
    if(!name || !price || !descripition || !category || !stock){
      alert('ERRO! Preencha os campos antes de cadastrar!')
      return
    }

    await fetch('http://localhost:3020/products', {
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        price: Number(price),
        descripition: descripition,
        category: category,
        stock: Number(stock)
      })
    })
    setName('')
    setPrice('')
    setDescripition('')
    setCategory('')
    setStock('')
  }
  return (
    <>
      <header className={styles.header}>
        <h1>Cadastre Produto</h1>
      </header>
      <main className={styles.main}>
        <div>
          <p>Nome: <input value={name} onChange={(e) => 
          setName(e.target.value)}  
          type="text" name="name" id="name" 
          placeholder='Nome: '/>
          </p>

          <p>Preço: <input value={price} onChange={(e) => 
          setPrice(e.target.value)}
          type="number" name='price' id='price' 
          placeholder='Preço: ' min={0}
          /></p>

          <p>Descrição:<input value={descripition} onChange={(e) => 
          setDescripition(e.target.value)}
          type="text" name='descripition' id='descripition' 
          placeholder='Descrição: ' 
          /></p>

          <p>Categoria: <input value={category} onChange={(e) => 
          setCategory(e.target.value)}
          type="text" name='category' id='category' 
          placeholder='Categoria: '/></p>

          <p>Quantidade no Estoque: <input value={stock} onChange={(e) => 
          setStock(e.target.value)}
          type="number" 
          name="stock" id="stock" 
          placeholder='Estoque: ' min={0}
          /></p>

          <button className={styles.button} type="button" onClick={cadastro}>Cadastrar Produto</button>
          <button className={styles.button} type="button" onClick={() => navigate('/products')}>Produtos Cadastrados</button>
        </div>
      </main>
    </>
  )
}
export default Home
