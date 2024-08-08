import express from 'express'
import SelecaoController from './app/controllers/selecaoController.js'
import selecaoController from './app/controllers/selecaoController.js'
 

//const express = require("express")
const app = express()
app.use(express.json())

app.post('/', SelecaoController.insert)

app.get('/',SelecaoController.list)

app.delete('/:id',SelecaoController.delete)

app.put('/:id', SelecaoController.update)

export default app