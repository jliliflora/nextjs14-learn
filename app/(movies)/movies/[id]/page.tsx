export default function MovieDetail({ 
    params: {id},
 }: {
    params: { id: string }
 }) {
    //console.log(props); 
    //http://localhost:3000/movies/123123?region=kr&page=2 ===> 백엔드에서 받아오는 값: { params: { id: '123123' }, searchParams: { region: 'kr', page: '2' } }
    return <h1>Movie {id}</h1>;
}