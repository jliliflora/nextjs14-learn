export const metadata = {
    title: "Home"
}

// server componenet에서 fetch하는 중에 loading파일을 제공해주면 알아서 로딩파일이 페이지에 나타남
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // console.log("im fetching!");
    await new Promise((resolve) => setTimeout(resolve, 10000)); //로딩시간 10초
    const response = await fetch(URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    const movies = await getMovies();
    return (
    <div>
        {JSON.stringify(movies)}
    </div>
    );
}