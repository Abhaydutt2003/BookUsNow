import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashBoard } from "./pages";
import { Hero } from "./components";
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { queryClient,HeroLoader } from "./api";

// use react router for page navigation.
const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/',
        element: <Hero />,
        loader: HeroLoader('reco')
      }
    ]
  }
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  );
}

export default App;