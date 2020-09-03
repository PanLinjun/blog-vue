var redirect_url = ''

if (process.env.NODE_ENV === 'development') {
  redirect_url = 'http://localhost:8080'
}

if (process.env.NODE_ENV === 'production') {
  redirect_url = 'http://119.45.62.78'
}

module.exports = {
  redirect_url
}