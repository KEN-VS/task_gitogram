import { makeRequest } from '../requests'

const addStartedZero = (value) => value < 10 ? `0${value}` : `${value}`

export const getTrandings = (lang = 'javascript') => {
  const params = new URLSearchParams()
  const weekMS = 7 * 24 * 60 * 60 * 1000
  const weekAgo = new Date(Date.now() - weekMS)
  const formattedDate = [
    weekAgo.getFullYear(),
    addStartedZero(weekAgo.getMonth() + 1),
    addStartedZero(weekAgo.getDate())
  ].join('-')

  params.append('order', 'desc')
  params.append('sort', 'stars')
  params.append('per_page', 10)
  params.append('q', `language:${lang} created:>${formattedDate}`)
  return makeRequest({
    url: `/search/repositories?${params}`
  })
}
