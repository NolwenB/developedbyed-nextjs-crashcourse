import Image from "next/image"

export default async function MovieDetail({params}) {
  console.log(params);
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(`https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`);
  const res = await data.json();
  const {id, title, release_date, poster_path } = res;
  console.log(res);
  return (
    <div>
      <h1>Movie detail</h1>
      <h1>{title}</h1>
            <h3>{release_date}</h3>
                <Image
                    src={imagePath + poster_path}
                    alt={title}
                    width={800}
                    height={1200}
                />
    </div>
  )
}