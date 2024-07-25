import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

/*
async function getMovieTest(id: string) {
   console.log(`Fetching movies: ${Date.now()}`);
   await new Promise((resolve) => setTimeout(resolve, 2000));
   const response = await fetch(`${API_URL}/${id}`);
   return response.json();
 }
 
 async function getVideos(id: string) {
   console.log(`Fetching videos: ${Date.now()}`);
   await new Promise((resolve) => setTimeout(resolve, 2000));
   const response = await fetch(`${API_URL}/${id}/videos`);
   return response.json();
 }*/


 // Promise.all을 사용하지않고 병렬적으로 불러오는방법임
 // 여기서 중요한 점은 <Suspense>로 감싸준점!!! 각각 컴포넌트로 정리해주고 render해줌

export default async function MovieDetail({ 
    params: {id},
 }: {
    params: { id: string }
 }) {
   console.log("===========");
   console.log("start fetching");
//   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)]);
//   console.log("end fetching");
//   return <h1>{movie.title}</h1>;
   return (
      <div>
         <h3>Movie detail page</h3>
         <Suspense fallback={<h1>Loading movie info</h1>}>
         <MovieInfo id={id} />
         </Suspense>
         <Suspense fallback={<h1>Loading movie videos</h1>}>
         <MovieVideos id={id} />
         </Suspense>
      </div>
   )
   
}