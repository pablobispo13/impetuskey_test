//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

//CSS
import "./index.css";

//Components
import StyledButton from "./components/StyledButton";
import StyledTextField from "./components/StyledTextField";
import ListToDo from "./components/ListToDo";
import CardShowcase from "./components/CardShowcase";

//Types
interface ListMoviesType {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

function App() {
  const [valueTodo, setValueTodo] = React.useState("");

  const [list, setList] = React.useState([
    { id: 0, value: "teste1" },
    { id: 1, value: "teste2" },
    { id: 2, value: "teste3" },
  ]);

  const addItemList = () => {
    if (valueTodo != "") {
      var newItem = {
        id: list.slice(-1)[0].id + 1,
        value: valueTodo,
      };
      setList([...list, newItem]);
      setValueTodo("");
    } else {
      toast.error("Insira algum texto para adicionar uma tarefa!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    const apiUrl = "https://api.themoviedb.org/3/discover/movie";
    const acessToken = import.meta.env.VITE_ACESSTOKENAUTH; // Certifique-se de definir a variável de ambiente API_KEY com seu token Bearer

    const config = {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${acessToken}`,
      },
    };

    axios
      .get(apiUrl, {
        params: {
          include_adult: false,
          include_video: false,
          language: "pt-BR",
          page: 1,
          sort_by: "popularity.desc",
        },
        ...config,
      })
      .then((response) => setMovies(response.data.results))
      .catch((error) =>
        toast.error(error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })
      );
  }, []);

  const addMovieToItemList = (value: string) => {
    var newItem = {
      id: list.slice(-1)[0].id + 1,
      value: value,
    };
    setList([...list, newItem]);
  };

  //States
  return (
    <>
      {/* SHOWCASE */}
      <Stack
        gap={2}
        sx={{ background: "#222222" }}
        padding={2}
        direction={"column"}
      >
        <Stack
          direction="row"
          sx={{ background: "#222222" }}
          flexWrap={"wrap"}
          padding={2}
          justifyContent={"space-between"}
          gap={2}
        >
          {movies
            ? movies.map((item: ListMoviesType, index) => (
                <CardShowcase
                  key={index}
                  id={item.id}
                  image={item.poster_path}
                  overview={item.overview}
                  title={item.title}
                  onClick={() => addMovieToItemList("Assistir " + item.title)}
                />
              ))
            : false}
        </Stack>
        {/* TODO */}
        <Stack direction="row" gap={1}>
          <StyledTextField
            placeholder="Fazer..."
            onChange={(value) => {
              setValueTodo(value);
            }}
            cleanerInput={valueTodo == ""}
            variant="outlined"
          />
          <StyledButton
            content={"Adicionar"}
            variant="contained"
            color="success"
            onClick={() => addItemList()}
          />
        </Stack>
        <ListToDo list={list} listQTD={list.length} />
      </Stack>
      <ToastContainer />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <>
        <CssBaseline />
        <App />
      </>
    </ThemeContextProvider>
  </React.StrictMode>
);
