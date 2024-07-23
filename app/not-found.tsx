import Navigation from "../components/navigation";

// 컴포넌트의 이름은 중요하지 않음! 중요한건 파일의 이름!! = 곧 url이 되니까
export default function NotFound() {
    return (
        <div>
            <Navigation/>
            <h1>Not found!</h1>
        </div>
    );
}