import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

//TODO FILL INN


// get the root element in index.html
const container = document.getElementById('app');
//creat a react root from that id
const root = createRoot(container);

function FrontPage() {
    return <div>
        <ul>
            <li><Link to={"/movies"}>Movies</Link></li>
            <li><Link to={"/movies/add"}>add new movie</Link></li>
        </ul>
    </div>
}

function ShowAllMovies() {
    return <h1>my movie </h1>;
}

function AddNewMovie() {
    return<h1>my movie 222</h1>;
}

function PageNotFound() {
    return <h1>NotFound</h1>;
}
function MovieApplication(){

    return <Routes>
            <Route path={"/"} element={<ShowAllMovies />}/>
            <Route path={"/add"} element={<AddNewMovie />}/>
          </Routes>
}
function Application() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"/movies/*"} element={<MovieApplication/>}/>
            <Route path={"*"} element={<PageNotFound/>}/>
        </Routes>
    </BrowserRouter>;
}

// and to render a App Component you do
root.render(<Application/>);