import MovieCard from '@/components/MovieCard';
import { getMovies } from '@/lib/getMovies';
import React from 'react'

export default async function MainPage() {
  const movies = await getMovies()
  return (<>
    {movies.map(m => (
      <MovieCard title={m.title} description={m.description} imageUrl={m.thumbnailUrl}/>
    ))}
  </>)
}
