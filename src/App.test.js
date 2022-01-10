import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import App from "./App";
import store from "./Todo/store";

// checkbox click
// delete it
//filter by status
//filter by color
//remaining todo items match

test("input by placeholder", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
  expect(inputElement).toBeInTheDocument();
});

test("render input element value", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(inputElement, { target: { value: "go shopping" } });
  expect(inputElement.value).toBe("go shopping");
});

test("render delete icon ", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const deleteElement = screen.getAllByTitle("delete-it");

  expect(deleteElement.length).toBe(3);
});

test("render checkbox", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByRole("checkbox", { checked: true });
  expect(inputElement).toBeInTheDocument();
});

test("all todos", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getAllByRole("checkbox");
  expect(inputElement.length).toBe(3);
});

test("completed todos", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getAllByRole("checkbox", { checked: true });
  expect(inputElement.length).toBe(1);
});

test("incompleted todos", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getAllByRole("checkbox", { checked: false });
  expect(inputElement.length).toBe(2);
});

test("render add button", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const addElement = screen.getByRole("Button");
  expect(addElement).toBeInTheDocument();
});

test("render add todos in the list", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByPlaceholderText(/what needs to be done/i);
  fireEvent.change(inputElement, { target: { value: "go shopping" } });
  const nextElement = screen.getByRole("Button");
  fireEvent.click(nextElement);
  const addtodo = screen.getByText("go shopping");
  expect(addtodo).toBeInTheDocument();
});

test("render color by placeholder text", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const inputElement = screen.getByText("Color");
  expect(inputElement).toBeInTheDocument();
});

test("render mark all completed button", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const buttonElement = screen.getByRole("m-all-completed");
  fireEvent.click(buttonElement);
  const inputElement = screen.getAllByRole("checkbox", { checked: true });
  expect(inputElement.length).toBe(4);
});

test("render clear all completed button", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const buttonElement = screen.getByRole("c-all-completed");
  fireEvent.click(buttonElement);
  const inputElement = screen.queryByRole("checkbox", {
    checked: true,
  });
  expect(inputElement).not.toBeInTheDocument();
});

test("render clear all completed button", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const Element = screen.getByText("Color");
  fireEvent.click(Element);
  const selectedElement = screen.getByText("Green");
  fireEvent.click(selectedElement);
  expect(selectedElement).toBeInTheDocument();
});
