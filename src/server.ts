import App from './app'
import express from 'express'

const server = new App(express)

server.server.listen(3333)
