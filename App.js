import logo from './logo.svg';
import './App.css';
import {QueryClientProvider, QueryClient} from '@tanstack/react-query';
import Home from './Component/Home';

function App() {
  const client=new QueryClient({
    defaultOptions:{
      queries:{
        refetchOnWindowFocus:false
      }
    }
  });
  return (
    <QueryClientProvider client={client} >
      <div>
        <Home/>
      </div>
      </QueryClientProvider>
  );
}

export default App;
