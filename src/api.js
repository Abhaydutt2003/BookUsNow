import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

// can make the base url private in the env file but since the url is public, I did not put the url in env file. 
const BASEURL = "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==";

// use react query for efficient caching of api calls.
export const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5, // the stale time has been set to 5 minutes, can be increased depending on the api
      }
    }
});

// loader, get all the home page data before loading the hero component
export const HeroLoader = (type) => async () => {
    const response = await queryClient.ensureQueryData({
      queryKey: ['recommendedShows'],
      queryFn: () =>{
        return axios.get(`${BASEURL}&type=${type}`);
      } ,
    });
    const response2 = await queryClient.ensureQueryData({
      queryKey: ['upcomingevents-1'],
      queryFn: () =>{
        return axios.get(`${BASEURL}&page=1&type=upcoming`);
      } ,
    });
    return {response ,response2};
}


export const upcomingLoader = (page)=>async()=>{
    const response = await queryClient.ensureQueryData({
        queryKey:[`upcomingevents-${page}`],
        queryFn:()=>{
            return axios.get(`${BASEURL}&page=${page}&type=upcoming`);
        }
    });
    return response;
}
