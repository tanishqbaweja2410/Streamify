import { GOOGLE_API_KEY } from "./apiKey";

export const OFFSET_LIVE_CHAT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://corsproxy.io/?http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_REL_VIDEOS_API = "https://corsproxy.io/?https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&key=" + GOOGLE_API_KEY + "&relatedToVideoId=";

  // Live Chat >>>>> Infinite Scroll >>>>> Pagination
  
  /*
   Two ways to handle : live real time data
   Challenges of Live Chat :-
        Get Data  =>  Data Layer
        Update the UI  => UI Layer

   How to handle data(Live or Near Real Time Data) ?
        if not live, then we can simply use an API using useEffect()
    
      Choice 1 :-
   -> Web Sockets
      * Creates a handshake between server and UI => bidirectional 
      * means we can send data from both sides
      * started as soon as the app is open => A web socket connection is established on start of app
      * No regular interval : first data : 1ms, second data : 20 ms, 

      Choice 2 :-
   -> Long Polling(or API Polling) 
      * Unidirectional => req from UI to server => data from server to UI
      * After an Interval 
      * UI to Server : Let me check after every 10sec that if any new data has arrived
      * UI polls data from server at regular intervals

      * Examples :-
      * GMAIL : API Polling
      * Zerodha(stock trading platform) : Web Sockets
      * Whatsapp : no api polling as it is a time critical app => Web Sockets
      * Cricbuzz : API Polling
      * Soccer : API Polling
      * Comments of Youtube : API Polling
      * 
      * 1.5 seconds interval time of api polling in Youtube Livestreams
      * why not 5 seconds ? bcoz they want to provide better UX also
      * why timestamps are not showed in youtube live chat ?
      * as order does not matter ! it is like an illusion that we feel like
      * 



     

  */