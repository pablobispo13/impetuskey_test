//Imports
import React from "react";
import ReactDOM from "react-dom/client";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Stack } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//CSS
import "./index.css";

//Components
import StyledButton from "./components/StyledButton";
import StyledTextField from "./components/StyledTextField";
import ListToDo from "./components/ListToDo";

//Types

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
      list.push(newItem);
      setList(list);
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

  //States
  return (
    <>
      {" "}
      <Stack
        gap={2}
        sx={{ background: "#222222" }}
        padding={2}
        direction={"column"}
      >
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
        <ListToDo list={list} />
      </Stack>{" "}
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
