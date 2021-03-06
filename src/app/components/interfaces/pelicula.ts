export interface Pelicula {
  id: number,
  title: string,
  status: string,
  budget: number,
  popularity: number,
  adult: boolean,
  overview: string,
  poster_path: string,
  genres:{
      name: string,
},
  production_companies: {
    name: string,
  },
  original_language: string,
  spoken_languages: {
    english_name: string
  },
  release_date: string
  }
