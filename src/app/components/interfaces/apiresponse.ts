import { Pelicula } from './pelicula';

export interface APIResponse {
  info: {
    count: number,
    pages: number,
    next: string,
    prev: string
  },
  results: Array<Pelicula>
}
