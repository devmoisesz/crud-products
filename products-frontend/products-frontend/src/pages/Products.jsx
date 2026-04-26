import { useState, useEffect } from 'react'
import styles from './Products.module.css'

function Products(){
    const [products, setProducts] = useState([])
    const [productEdit, setProductEdit] = useState(null)
    const [editName, setEditName] = useState('')
    const [editPrice, setEditPrice] = useState('')
    const [editDescripition, setEditDescripition] = useState('')
    const [editCategoty, setEditCategory] = useState('')
    const [editStock, setEditStock] = useState('')
    useEffect( () => {

        async function SearchProduct() {
            const res = await fetch('http://localhost:3020/products')
            const data = await res.json()
            
            setProducts(data)
        }
        SearchProduct()
    }, [])
    async function excluir(id){
        const confirmado = confirm('Deseja realmente excluir este produto?')
        if (!confirmado) return
        await fetch(`http://localhost:3020/products/${id}`, {
            method: 'DELETE'
        })
        setProducts(products.filter(p => p.id !== id))
    }
    function startEdit(product) {
        setProductEdit(product)
        setEditName(product.name)
        setEditPrice(product.price)
        setEditDescripition(product.descripition)
        setEditCategory(product.category)
        setEditStock(product.stock)    
    }
    async function save(id) {
        await fetch(`http://localhost:3020/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: editName,
                price: Number(editPrice),
                descripition: editDescripition,
                category: editCategoty,
                stock: Number(editStock)
            })
        })
        setProducts(products.map(p => p.id === id ? {
            ...p,
            name: editName,
            price: Number(editPrice),
            descripition: editDescripition,
            category: editCategoty,
            stock: Number(editStock)
            } : p))
            setProductEdit(null)
        }

    return(
        <>
        <header className={styles.header}>
            <h1>Produtos Cadastrados</h1>
        </header>

        <main className={styles.main}>
            <table>
                <tr>
                    <th>Nome:</th>
                    <th>Preço:</th>
                    <th>Descrição:</th>
                    <th>Categoria:</th>
                    <th>Estoque:</th>
                    <th>Ações:</th>
                </tr>
            {products.map(product => (
                <tr key={product.id}>
                    {productEdit?.id === product.id ? (
                        <>
                            <td><input value={editName} onChange={(e) => 
                            setEditName(e.target.value)}/></td>
                            <td><input value={editPrice} onChange={(e) =>
                            setEditPrice(e.target.value)}/></td>
                            <td><input value={editDescripition} onChange={(e) =>
                            setEditDescripition(e.target.value)}/></td>
                            <td><input value={editCategoty} onChange={(e) =>
                            setEditCategory(e.target.value)}/></td>
                            <td><input value={editStock} onChange={(e) => 
                            setEditStock(e.target.value)}/></td>
                        </>
                    ) : (
                        <>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.descripition}</td>
                            <td>{product.category}</td>
                            <td>{product.stock}</td>
                        </>
                    )}
                    <td>
                        {productEdit?.id === product.id ? (
                        <button className={styles.save} onClick={() => save(product.id)}>Salvar</button>
                        ) : (
                        <button className={styles.edit} onClick={() => startEdit(product)}
                        >Editar</button>
                        )}
                        <button className={styles.delete} onClick={() => excluir(product.id)}
                        >Excluir</button>
                    </td>
                </tr>
            ))}
            </table>
        </main>
        </>
    )
}

export default Products