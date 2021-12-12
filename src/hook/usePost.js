import { useMemo } from 'react/cjs/react.development'

export const useSectionFilter = (posts, sort) => {
  const selecFil = useMemo(() => {
    if (posts) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [posts, sort])
  return selecFil
}

export const usePosts = (posts, sort, query) => {
  const querySearch = useSectionFilter(posts, sort)
  const SearchSelect = useMemo(() => {
    querySearch.filter((el) => el.title.includes(query))
  }, [querySearch, query])
  return SearchSelect
}
