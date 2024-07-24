export const metadata = {
    title: "Home"
}

//server component에서 NEXTJS는 우리가 fetch한 걸 기억해주기 떄문에 한번만 로딩함! 첫번째 fetch만 API에 요청하는 거임
// 근데 이런경우 헤더부분이나 타이틀부분까지 같이 로딩이 걸려버리는 문제점이 있음띠
const URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

async function getMovies() {
    // console.log("im fetching!");
    await new Promise((resolve) => setTimeout(resolve, 5000)); //로딩시간 5초
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