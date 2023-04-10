import { Main } from '@/components/Main';
import { Navbar } from '@/components/Navbar';
import { Row } from '@/components/Row';
import requests from '@/Requests';

export default function Homepage() {
  return (
    <>
      <Navbar />
      <Main />
      {/* We need to setup a rowID here for the scroll to work properly on each row */}
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpcoming} />
      <Row rowID="2" title="Popular" fetchURL={requests.requestPopular} />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top rated" fetchURL={requests.requestTopRated} />
    </>
  );
}
