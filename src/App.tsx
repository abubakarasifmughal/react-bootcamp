import { lazy, Suspense } from "react";
import { Link, Route, Routes } from "react-router";
import Loading from "./components/Loading";

// import HomePage from "./pages/HomePage";
// import ProductsPage from "./pages/ProductsPage";

const LazyHomePage = lazy(() => import("./pages/HomePage"));
const LazyProductsPage = lazy(() => import("./pages/ProductsPage"));

function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <Link to={"/"}>Home</Link>
        <Link to={"/test"}>Products Page</Link>
      </div>
      <Routes>
        {/* <Route path="/" Component={LazyHomePage} />
        <Route path="/test" Component={LazyProductsPage} /> */}

        <Route
          path="/"
          element={
            <Suspense
              fallback={<Loading loadingText="Loading home page ..." />}
            >
              <LazyHomePage />
            </Suspense>
          }
        />
        <Route
          path="/test"
          element={
            <Suspense
              fallback={
                <Loading loadingText="Loading products please wait..." />
              }
            >
              <LazyProductsPage />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
