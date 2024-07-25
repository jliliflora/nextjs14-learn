import { API_URL } from "../../../(home)/page";

async function getMovie(id: string) {
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
 }

 //Promise.all을 사용하면, getMovie와 getVideos를 동시에 await하게된다!

export default async function MovieDetail({ 
    params: {id},
 }: {
    params: { id: string }
 }) {
   console.log("=============")
   console.log("start fetching");
   const [movie, videos] = await Promise.all([getMovie(id), getVideos(id)])
   console.log("start fetching");
    return <h1>{movie.title}</h1>;
}