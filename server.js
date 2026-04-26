import express from 'express'
import productRoutes from './src/routes/productRoutes.js'
import cors from 'cors'

const server = express()
server.use(express.json())
server.use(cors())

server.use('/products', productRoutes)

server.listen(3020, () => {
    console.log("Servidor Rodando na porta 3020")
})