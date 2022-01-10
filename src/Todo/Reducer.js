const initialstate = {
  list: [
    { data: "Doctor Appointment", color: "Red", completed: true },
    { data: "Go for walk", color: "Green", completed: false },
    { data: "Office meeting", color: "Blue", completed: false },
  ],
};

const addReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "ADD-TODO":
      const { data, color, completed } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
            color: color,
            completed: completed,
          },
        ],
      };

    case "DELETE-TODO":
      const newlist = state.list.filter((e) => e.data !== action.payload.data);
      return {
        ...state,
        list: newlist,
      };

    case "GREEN-COLOR":
      const originalList = [];
      for (var i of state.list) {
        originalList.push(i);
      }
      return {
        ...state,
        list: originalList.filter((e) => e.color === action.payload.color),
      };
    case "RED-COLOR":
      const redlist = [];
      for (var j of state.list) {
        redlist.push(j);
      }
      return {
        ...state,
        list: redlist.filter((e) => e.color === action.payload.color),
      };
    // case "BLUE-COLOR":
    //   const bluecolor = state.list.find(
    //     (e) => e.color === action.payload.color
    //   );
    //   return {
    //     ...state,
    //     list: bluecolor,
    //   };

    // case "ORANGE-COLOR":
    //   const orgcolor = state.list.find((e) => e.color === action.payload.color);
    //   return {
    //     ...state,
    //     list: orgcolor,
    //   };
    // case "PURPLE-COLOR":
    //   const purcolor = state.list.find((e) => e.color === action.payload.color);
    //   return {
    //     ...state,
    //     list: purcolor,
    //   };
    case "TOGGLE-TODO":
      return {
        ...state,
        list: state.list.map((todo) => {
          if (todo.data !== action.payload.data) {
            return todo;
          }
          return {
            ...todo,
            completed: !todo.completed,
          };
        }),
      };

    case "MARK-ALL-COMPLETED":
      return {
        ...state,
        list: state.list.map((todo) => {
          return { ...todo, completed: true };
        }),
      };

    case "CLEAR-COMPLETED":
      const inlist = state.list.filter((todo) => todo.completed === false);
      return {
        ...state,
        list: inlist,
      };

    case "SHOW-ALL":
      return {
        ...state,
        list: [...state.list],
      };

    case "SHOW-ACTIVE":
      return {
        ...state,

        list: state.list.filter((todos) => todos.completed !== true),
      };

    case "SHOW-COMPLETED":
      return {
        ...state,
        list: state.list.filter((todos) => todos.completed !== false),
      };

    default:
      return state;
  }
};

export default addReducer;
