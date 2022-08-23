const searchRequest = axios.create({
  baseURL: 'https://api/search/'
})

export const getSearch = data => searchRequest.get(`/Search?searchdata=${data}`)
export const getSearchType = () => searchRequest.get(`/SearchType`)