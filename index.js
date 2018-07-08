export function sum(a, b) {
	return a + b
}

export function fetchData(callback) {
  const data = 'async data'
  callback(data)
}

export function handleData(data) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => resolve({ res: data.res + 1 }, 3000))
  })
}

export function handleDataReject(data) {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      if (Object.prototype.toString.call(data) !== '[object Object]') {
        reject('Type Error!!!')
      }
      resolve({ res: data.res + 1})
    }, 3000)
  })
}
