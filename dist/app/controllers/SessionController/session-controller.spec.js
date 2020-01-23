"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _supertest = require('supertest'); var request = _interopRequireWildcard(_supertest);
var _app = require('../../../app'); var _app2 = _interopRequireDefault(_app);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _User = require('../../models/User'); var _User2 = _interopRequireDefault(_User);

describe('Session Controller', () => {
  it('should user not be authenticated', async () => {
    await _User2.default.create({ name: 'Tester', email: 'test@gmail.com', password_hash: '123456' })
    const response = await request.agent(new (0, _app2.default)(_express2.default.call(void 0, )).server).post('/session').send({
      email: 'test@gmail.com',
      password: '12345'
    })
    expect(response.body).toEqual({ message: 'Not authorized' })

    expect(2).toBe(2)
  })
})
