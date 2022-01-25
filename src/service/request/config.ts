// 第一种手动修改 不建议
// 第二种根据process.env.NODE_ENV
let BASE_URL = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://fdf'
} else {
  BASE_URL = 'http://dfdfdf'
}

export { BASE_URL }
