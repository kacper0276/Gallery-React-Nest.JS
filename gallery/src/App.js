import "./App.css";
import { useReducer } from "react";
import { initialState, reducer } from "./reducer";
import mainContext from "./context/mainContext";
import Layout from "./Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import Header from "./Layout/Header/Header";
import Footer from "./Layout/Footer/Footer";
import Login from "./Pages/Login/Login";
import Navigation from "./Layout/partials/Navigation/Navigation";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/404/NotFound";
import AuthtenticatedRoute from "./hoc/AuthtenticatedRoute";
import AddAlbum from "./Pages/AddAlbum/AddAlbum";
import UserPanel from "./Pages/UserPanel/UserPanel";
import ShowAlbums from "./Pages/ShowAlbums/ShowAlbums";
import AddPhotoToAlbum from "./Pages/AddPhotoToAlbum/AddPhotoToAlbum";
import ShowPhotosInAlbum from "./Pages/ShowPhotosInAlbum/ShowPhotosInAlbum";
import EditUserAlbums from "./Pages/EditUserAlbums/EditUserAlbums";

function App() {
  const [state, dispatch] = useReducer(initialState, reducer);

  const header = (
    <Header>
      <Navigation />
    </Header>
  );

  const content = (
    <>
      <Routes>
        <Route
          path="/uzytkownik/albumy"
          exact
          element={
            <AuthtenticatedRoute>
              <ShowAlbums />
            </AuthtenticatedRoute>
          }
        />
        <Route
          path="/album/:id"
          exact
          element={
            <AuthtenticatedRoute>
              <ShowPhotosInAlbum />
            </AuthtenticatedRoute>
          }
        />
        <Route
          path="/paneluzytkownika/edytujalbumy"
          exact
          element={
            <AuthtenticatedRoute>
              <EditUserAlbums />
            </AuthtenticatedRoute>
          }
        />
        <Route
          path="/paneluzytkownika/dodajalbum"
          exact
          element={
            <AuthtenticatedRoute>
              <AddAlbum />
            </AuthtenticatedRoute>
          }
        />
        <Route
          path="/paneluzytkownika/dodajzdjecia"
          exact
          element={
            <AuthtenticatedRoute>
              <AddPhotoToAlbum />
            </AuthtenticatedRoute>
          }
        />
        <Route
          path="/paneluzytkownika"
          exact
          element={
            <AuthtenticatedRoute>
              <UserPanel />
            </AuthtenticatedRoute>
          }
        />
        <Route path="/zaloguj" exact element={<Login />} />
        <Route path="/zarejestruj" exact element={<Register />} />
        <Route path="/" exact element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );

  const footer = <Footer />;

  return (
    <Router>
      <mainContext.Provider
        value={{
          state: state,
          dispatch: dispatch,
        }}
      >
        <Layout header={header} content={content} footer={footer} />
      </mainContext.Provider>
    </Router>
  );
}

export default App;
