import { Main } from '@/components/Main';
import { Navbar } from '@/components/Navbar';
import { Row } from '@/components/Row';
import requests from '@/Requests';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Main />
      <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row title="Popular" fetchURL={requests.requestPopular} />
      <Row title="Trending" fetchURL={requests.requestTrending} />
      <Row title="Top rated" fetchURL={requests.requestTopRated} />
    </>
  );
}
