import { useQuery } from '@tanstack/react-query'
import { getNews } from '../lib/api-helpers'
import { SkeletonLoading } from './skeleton'
import { Box } from '@chakra-ui/layout'
import { ErrorState } from './error'

interface NewsProps {
  news: NewsItem[]
  isLoading: boolean
  error: Error | undefined
}

export function News({ news, isLoading, error }: NewsProps) {
  return (
    <Box>
      {news?.map((article: NewsItem, i: number) => (
        <Box fontSize="0.75rem" color="white" padding="1rem" key={i}>
          {article.title}
        </Box>
      ))}

      <SkeletonLoading loading={isLoading} ammount={3} height="35px" />

      {error && <ErrorState />}
    </Box>
  )
}