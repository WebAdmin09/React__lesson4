import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";


import Layout from "./components/layout/index";
import Loading from "./components/loading/ServiceLoading";

const HomePage = lazy(() => import("./pages/HomePage"));
const BusnessPage = lazy(() => import("./pages/BusnessPage"));
const EntertainmentPage = lazy(() => import("./pages/EntertainmentPage"));
const GeneralPage = lazy(() => import("./pages/GeneralPage"));
const HealthPage = lazy(() => import("./pages/HealthPage"));
const SciencePage = lazy(() => import("./pages/SciencePage"));
const SportsPage = lazy(() => import("./pages/SportsPage"));
const TechnologyPage = lazy(() => import("./pages/TechnologyPage"));
// const PostPage = lazy(() => import("./pages/PostPage"));
const NotFound = lazy(() => import("./pages/NotFound"));


function App() {
  return (
    <Suspense fallback={<Loading />}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/business" element={<BusnessPage />} />
            <Route path="/entertainment" element={<EntertainmentPage />} />
            <Route path="/general" element={<GeneralPage />} />
            <Route path="/health" element={<HealthPage />} />
            <Route path="/science" element={<SciencePage />} />
            <Route path="/sports" element={<SportsPage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            {/* <Route path="*" element={<PostPage />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
