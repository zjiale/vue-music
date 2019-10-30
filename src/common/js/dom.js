export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function getData(el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) {
    // setAttribute() 方法添加指定的属性，并为其赋指定的值
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}

// 创建一个空的 div 并获取它的 style
let elementStyle = document.createElement('div').style

// 创建一个空div获取里面得style来判断当前浏览器符合哪个供应商
let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    // 火狐
    Moz: 'MozTransform',
    // opera
    O: 'OTransform',
    // ie
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }
  // charAt(0).toUpperCase为首字母大写
  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}