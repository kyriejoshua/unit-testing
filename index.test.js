import sum from './index'

test('1 + 2 equals to 3', () => {
	expect(sum(1, 2)).toBe(3)
})

test('比较对象相等', () => {
	const data = { a: 1, b: '2' }
	expect(data).toEqual({ a: 1, b: '2' })
})
