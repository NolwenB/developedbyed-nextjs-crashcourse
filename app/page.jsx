import Movie from "./Movie"

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  const res = await data.json();

  return (
    <main>
      <h1>Hello Next.js 13! 🔥🔥</h1>
      <br/>
      <div className="grid gap-16 fluid">
        {res.results.map(movie => (
          <Movie 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
          />
        ))}
      </div>
    </main>
  )
}
