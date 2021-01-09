import React from 'react';
import NetFlixOriginalRow from './rows/netflixoriginalsrows';
import TrendingNowRow from './rows/trendingnowrow';
import RomanceRow from './rows/romance';
import TopratedRow from './rows/topratedrow';
import ActionRow from './rows/actionrow'; 
import HorrorRow from './rows/horrorRow'; 
import ComedyRow from './rows/comedy';
import FamilyRow from './rows/family';
import request from '../../requests';
import Banner from '../mainpage/Banner/Banner';


function Mainpage() {
  return ( <div>

      <Banner />
    <NetFlixOriginalRow title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals}
    isLargeRow />
    <TrendingNowRow title="Trending Now" fetchUrl={request.fetchTrending} />
    <TopratedRow title="Top Rated" fetchUrl={request.fetchToprated} />
    <RomanceRow title="Romance" fetchUrl={request.fetchRomance} />
    <ActionRow title="Action" fetchUrl={request.fetchAction} />
    <HorrorRow title="Horror" fetchUrl={request.fetchHorror} />
    <ComedyRow title="Comedy" fetchUrl={request.fetchComedies} />
    <FamilyRow title="Family" fetchUrl={request.fetchFamily} />
    </div>)
}

export default Mainpage;