export const jasperView = (html) => {
  var el = document.createElement('html')
  el.innerHTML = html
  var o = document.getElementsByTagName('Table')
  console.log(o)
  return o
}
