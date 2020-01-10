const initialState = {
  persons: []
}

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD') {
    const newPerson = {
      id: Math.random(),
      name: action.personData.name,
      age: action.personData.age// Math.floor( Math.random() * 40 )
    }
    return { ...state, persons: state.persons.concat(newPerson)}
  }

  if (action.type === 'DELETE') {
    return { ...state, persons: state.persons.filter(person => person.id !== action.value)}
  }
  return state;
};

export default reducer;