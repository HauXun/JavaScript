const init = {
  cars: ["BMW"],
};

export default function reducer(state = init, action, args) {
  switch (action) {
    case "ADD":
      const [newCar] = args;
      // merge using spread
      // cars object can be use with '...{ cars: [...state.cars, newCar] }'
      return { ...state, cars: [...state.cars, newCar] };
    default:
      return state;
  }
}
