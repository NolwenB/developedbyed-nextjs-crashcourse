import Image from "next/image"

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
    {next: {revalidate: 60}},
    );
  const res = await data.json();
  return res.results.map((movie) => ({
    movie: toString(movie.id),
  }));
}

export default async function MovieDetail({params}) {
  console.log(params);
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.movie}?api_key=${process.env.API_KEY}`,
    );
  const res = await data.json();

  return (
    <div className={`bg-[url('${imagePath + res.backdrop_path}')]`}>
      <h2 className="text-2xl">{res.title}</h2>
      <h2 className="text-lg">{res.release_date}</h2>
      <h2>Runtime: {res.runtime} minutes</h2>
      <h2 className="text-sm bg-green-600 inline-block my-2 px-2 py-1 rounded-lg border-2 border-green-400"><b>{res.status}</b></h2>
      <Image
        className="easeload my-12 w-full border-2"
        src={imagePath + res.backdrop_path}
        width={800}
        height={450}
        priority
      />
      <p>{res.overview}</p>
    </div>
  )
}