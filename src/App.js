import "./App.css";
import { Alert, Button } from "antd";
import { Checkbox, Select } from "antd";
import { CloseOutlined, FormOutlined } from "@ant-design/icons";
import { Input, Badge, Empty } from "antd";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addtodo,
  deleteTodo,
  greenColor,
  redColor,
  completedCleared,
  markallCompleted,
  toggleTodo,
  showAll,
  showActive,
  showCompleted,
} from "./Todo/Action";
import "antd/dist/antd.css";

function App() {
  const [mytodos, setTodos] = useState("");
  const [selectcolor, setColor] = useState("");

  const dispatch = useDispatch();
  const selector = useSelector((state) => state.list);

  const { Option } = Select;

  let item = selector.length + " items left";
  if (selector.length === 1) {
    item = selector.length + " item left";
  }

  // const handleCheckbox = (e) => {
  //   setCheckAll(e.target.checked);
  // };

  const handlecolorchange = (e) => {
    setColor(e);
  };

  return (
    <div>
      <header className="heading">
        <div className="todos">
          Todos <FormOutlined />
          <br />
        </div>
      </header>
      <div className="flex-subheading">
        <div className="subheading">
          <Input
            className="text-input"
            placeholder=" What needs to be done?"
            value={mytodos}
            onChange={(e) => setTodos(e.target.value)}
          />
        </div>
        <div className="subheading">
          <Select
            aria-label="select"
            placeholder="Color"
            onChange={handlecolorchange}
          >
            <Option role="opt-red" value="Red" className="color-red">
              Red
            </Option>
            <Option role="opt" value="Blue" className="color-blue">
              Blue
            </Option>
            <Option role="opt" value="Green" className="color-green">
              Green
            </Option>
            <Option role="opt" value="Orange" className="color-orange">
              Orange
            </Option>
            <Option role="opt" value="Purple" className="color-purple">
              Purple
            </Option>
          </Select>
        </div>
        <div className="subheading">
          <Button
            role="Button"
            onClick={() => {
              if (!mytodos || !selectcolor) {
                return alert("All fields required");
              }
              dispatch(
                addtodo(mytodos, selectcolor),
                setTodos(""),
                setColor("")
              );
            }}
          >
            ADD
          </Button>
        </div>
      </div>
      {selector.length === 0 ? (
        <Empty />
      ) : (
        selector.map((element) => {
          return (
            <div>
              <div className="grid-list">
                <Checkbox
                  role="checkbox"
                  checked={element.completed}
                  onClick={() => dispatch(toggleTodo(element.data))}
                />

                <p className="text">{element.data}</p>
                <p className="text">{element.color}</p>

                <CloseOutlined
                  title="delete-it"
                  onClick={() => dispatch(deleteTodo(element.data))}
                />
              </div>
            </div>
          );
        })
      )}

      <div className="flex-footer">
        <div className="footer-item">
          <div>Actions</div>
          <div className="action-buttons">
            <Button
              role="m-all-completed"
              type="primary"
              onClick={() => dispatch(markallCompleted())}
            >
              Mark All Completed
            </Button>
          </div>
          <div className="action-buttons">
            <Button
              role="c-all-completed"
              type="primary"
              onClick={() => dispatch(completedCleared())}
            >
              Clear Completed
            </Button>
          </div>
        </div>
        <div className="footer-item">
          <div>Remaining Todos</div>
          <div className="count-items" role="count-items">
            <Badge className="badge-item" count={item} />
          </div>
        </div>
        <div className="footer-item">
          <div className="fil-by-status">Filter by Status</div>
          <div className="status" onClick={() => dispatch(showAll())}>
            <Button className="btn-clr" type="text">
              All
            </Button>
          </div>
          <div className="status" onClick={() => dispatch(showActive())}>
            <Button type="text">Active</Button>
          </div>
          <div className="status" onClick={() => dispatch(showCompleted())}>
            <Button type="text"> Completed</Button>
          </div>
        </div>
        <div className="footer-item">
          <div className="fil-by-color">Filter by color</div>
          <div className="color-green" onClick={() => dispatch(greenColor())}>
            Green
          </div>
          <div className="color-blue">Blue</div>
          <div className="color-orange">Orange</div>
          <div className="color-purple">Purple</div>
          <div className="color-red" onClick={() => dispatch(redColor())}>
            Red
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
