// import logo from './logo.svg';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row 
        title="NETFLIX ORIGINALS" 
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow/>
      <Row title="TRENDING NOW" fetchUrl = {requests.fetchTrending}/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl = {requests.fetchTopActionMovies}/>
      <Row title="Comedy Movies" fetchUrl = {requests.fetchTopComedyMovies}/>
      <Row title="Horror Movies" fetchUrl = {requests.fetchTopHorrorMovies}/>
      <Row title="Romance Movies" fetchUrl = {requests.fetchTopRomanceMovies}/>
      <Row title="Documantaries" fetchUrl = {requests.fetchTopDocumentaries}/>
    </div>
  );
}

export default App;
