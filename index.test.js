import { sum, fetchData, handleData, handleDataReject } from './index'

test('1 + 2 equals to 3', () => {
	expect(sum(1, 2)).toBe(3)
})

test('比较对象相等', () => {
	const data = { a: 1, b: '2' }
	expect(data).toEqual({ a: 1, b: '2' })
})

test('测试回调', (done) => {
  function callback(data) {
    expect(data).toBe('async data')
    done()
  }
  fetchData(callback)
})

test('测试异步代码', () => {
  return handleData({ res: 1 }).then((data) => {
    expect(data).toEqual({ res: 2 })
  })
})

test('测试 Promise reject 代码', () => {
  expect.assertions(1)
  return handleDataReject('test rejected').catch((data) => {
    expect(data).toMatch('Type Error!!!')
  })
})
