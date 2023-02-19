import Link from "next/link";
import Image from "next/image"

export default function Movie({ key, id, title, release_date, poster_path }) {
    const imagePath = `https://image.tmdb.org/t/p/original/`;
    console.log(poster_path);
    return (
        <div>
            <h1>{title}</h1>
            <h3>{release_date}</h3>
            <Link href="/asd">
                <Image
                    src={imagePath + poster_path}
                    alt={title}
                    width={800}
                    height={1200}
                />
            </Link>
        </div>
    );
}