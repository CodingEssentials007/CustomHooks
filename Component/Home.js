
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

function Home() {

const {data,isLoading,isError,refetch}=useQuery(['anything'],()=>{
    
    return axios.get('https://catfact.ninja/fact').then((res)=> res.data)
})
if(isLoading)
{
    return <h1>Loading</h1>
}

if(isError)
{
    return <h1>Sorry Something is wrong with api</h1>
}

    return (<div>
                <h1>{data?.fact}</h1>
                <button onClick={refetch}> Fetch Data </button>
            </div>  
            );
}

export default Home ;