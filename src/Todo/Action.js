export const addtodo = (data, color) => {
  return {
    type: "ADD-TODO",
    payload: {
      data: data,
      color: color,
      completed: false,
    },
  };
};

export const deleteTodo = (data) => {
  return {
    type: "DELETE-TODO",
    payload: {
      data: data,
    },
  };
};

export const toggleTodo = (data) => {
  return {
    type: "TOGGLE-TODO",
    payload: {
      data: data,
    },
  };
};

export const showAll = () => {
  return {
    type: "SHOW-ALL",
  };
};

export const showActive = () => {
  return {
    type: "SHOW-ACTIVE",
  };
};

export const showCompleted = () => {
  return {
    type: "SHOW-COMPLETED",
  };
};

export const markallCompleted = () => {
  return {
    type: "MARK-ALL-COMPLETED",
  };
};

export const completedCleared = () => {
  return {
    type: "CLEAR-COMPLETED",
  };
};

export const greenColor = () => {
  return {
    type: "GREEN-COLOR",
    payload: {
      color: "Green",
    },
  };
};

export const redColor = () => {
  return {
    type: "RED-COLOR",
    payload: {
      color: "Red",
    },
  };
};

// export const orangeColor = (data) => {
//   return {
//     type: "ORANGE-COLOR",
//     payload: {
//       data: data,
//       color: "Orange",
//     },
//   };
// };

// export const purpleColor = (data) => {
//   return {
//     type: "PURPLE-COLOR",
//     payload: {
//       data: data,
//       color: "Purple",
//     },
//   };
// };

// export const blueColor = (data) => {
//   return {
//     type: "BLUE-COLOR",
//     payload: {
//       data: data,
//       color: "Blue",
//     },
//   };
// };
