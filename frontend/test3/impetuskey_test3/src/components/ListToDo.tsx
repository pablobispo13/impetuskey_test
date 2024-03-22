import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Checkbox } from "@mui/material";

//Types
interface ListItemType {
  id: number;
  value: string;
}

function ListToDo({
  list = [],
  listQTD = 0,
}: {
  listQTD: number;
  list: ListItemType[];
}) {
  const [todoList, setTodoList] = React.useState<ListItemType[]>(list);
  React.useEffect(() => {
    setTodoList(list);
  }, [listQTD]);
  const removeItemList = (id: number) => {
    setTodoList(todoList.filter((el) => el.id !== id));
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <List>
      {todoList.map((item: ListItemType, index) => (
        <ListItem
          key={item.value + "_" + index}
          secondaryAction={
            <IconButton
              onClick={() => removeItemList(item.id)}
              edge="end"
              aria-label="delete"
            >
              <CloseIcon />
            </IconButton>
          }
        >
          <Checkbox
            onClick={handleToggle(item.id)}
            edge="start"
            checked={checked.indexOf(item.id) !== -1}
            tabIndex={-1}
            disableRipple
          />
          <ListItemText onClick={handleToggle(item.id)} primary={item.value} />
        </ListItem>
      ))}
    </List>
  );
}

export default ListToDo;
