import orgiginJSONP from 'jsonp'

export default function jsonp(url, data, options) {
  url += (url.indexOf('?') < 0 ? '?' : '&') + param(data)

  return new Promise((resolve, reject) => {
    orgiginJSONP(url, options, (err, data) => {
      if (!err) {
        resolve(data)
      } else {
        reject(err)
      }
    })
  })
}

function param(data) {
  let url = ''
  // 遍历对象
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    // encodeURIComponent() 函数可把字符串作为 URI 组件进行编码
    url += `&${k}=${encodeURIComponent(value)}`
  }
  return url ? url.substring(1) : ''
}
