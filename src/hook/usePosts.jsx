import { useMemo } from 'react/cjs/react.development'

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort.length) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [posts, sort])
  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const mySorted = useSortedPosts(posts, sort)
  const sortedFilter = useMemo(() => {
    return mySorted.filter((el) => el.title.includes(query))
  }, [mySorted, query])
  return sortedFilter
}
