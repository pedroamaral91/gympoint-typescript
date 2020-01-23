import * as request from 'supertest'
import App from '../../../app'
import express from 'express'
import User from '../../models/User'

describe('Session Controller', () => {
  it('should user not be authenticated', async () => {
    await User.create({ name: 'Tester', email: 'test@gmail.com', password_hash: '123456' })
    const response = await request.agent(new App(express()).server).post('/session').send({
      email: 'test@gmail.com',
      password: '12345'
    })
    expect(response.body).toEqual({ message: 'Not authorized' })

    expect(2).toBe(2)
  })
})
