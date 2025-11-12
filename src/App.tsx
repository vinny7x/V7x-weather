import { Header } from "./components/Header";
import { WeatherCard } from "./components/WeatherCard";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient();
  return (<>
    <Header />
    <QueryClientProvider client={queryClient}>
      <WeatherCard />
    </QueryClientProvider>
  </>
  );
}
export default App;
