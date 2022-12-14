const articleRequest = axios.create({
  baseURL: 'https://api/article/'
})

export const getArticleItem = () => articleRequest.get('/ArticleItem')
export const postArticleMsg = data => articleRequest.post('/ArticleMsg', data)
export const postArticleLink = data => articleRequest.post('/ArticleLink', data)