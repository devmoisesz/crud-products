import express from 'express'

const server = express()
server.use(express.json())

const products = []

server.post('/products', (req, res) => {
    const id = products.length + 1
    const { name, price } = req.body
    const newProduct = {id, ...req.body}
    products.push(newProduct)
    return res.status(201).json(newProduct)
})

server.get('/products', (req, res) => {
    return res.json(products)
})

server.get('/products/:id', (req, res) => {
    const productId = req.params.id
    const product = products.find(p => p.id === Number(productId))
    if(!product){
        return res.status(404).json({message: 'Produto não encontrado'})
    }

    return res.json(product)
    
})
server.put('/products/:id', (req, res) => {
    const productId = req.params.id
    const product = products.find(p => p.id === Number(productId))
    const { name, price } = req.body

    if(!product){
        return res.status(404).json({message: 'Produto não encontrado'})
    }
    product.name = name || product.name
    product.price = price || product.price
    return res.status(200).json(product)
})
server.delete('/products/:id', (req, res) => {
    const productId = req.params.id
    const product = products.find(p => p.id === Number(productId))
    if(!product){
        return res.status(404).json({message: 'Produto não encontrado'})
    }
    const posArray = products.findIndex(n => n.id === Number(productId))
    products.splice(posArray, 1)
    return res.status(200).json({message: 'Produto Apagado com sucesso!'})
})
server.listen(3020, () => {
    console.log("Servidor Rodando na porta 3020")
})