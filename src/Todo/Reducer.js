const initialstate = {
  list: [
    {
      data: "Doctor Appointment",
      date: "2021-12-24",
      color: "Red",
      completed: true,
    },

    {
      data: "Office meeting",
      date: "2021-11-02",
      color: "Blue",
      completed: false,
    },
  ],
};

const addReducer = (state = initialstate, action) => {
  debugger;
  switch (action.type) {
    case "ADD-TODO":
      const { data, date, color, completed } = action.payload;

      return {
        ...state,
        list: [
          ...state.list,
          {
            data: data,
            date: date,
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
