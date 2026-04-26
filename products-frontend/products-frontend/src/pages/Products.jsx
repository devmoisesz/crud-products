import { useState, useEffect } from 'react'
import styles from './Products.module.css'

function Products(){
    const [products, setProducts] = useState([])
    useEffect( () => {

        async function SearchProduct() {
            const res = await fetch('http://localhost:3020/products')
            const data = await res.json()
            
            setProducts(data)
        }
        SearchProduct()
    }, [])
    return(
        <>
        <header className={styles.header}>
            <h1>Produtos Cadastrados</h1>
        </header>

        <main>
            <table>
                <tr>
                    <th>Nome:</th>
                    <th>Preço:</th>
                    <th>Descrição:</th>
                    <th>Categoria:</th>
                    <th>Estoque:</th>
                </tr>
            {products.map(product => (
                <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.descripition}</td>
                    <td>{product.category}</td>
                    <td>{product.stock};
                    </td>
                </tr>
            ))}
            </table>
            <button>Editar Produto</button>
            <button>Excluir Produto</button>
        </main>
        </>
    )
}

export default Products