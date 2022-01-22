

export const reducer = (state = '', action: any) => {
    switch (action.type) {
    case 'SET_LYRICS':
      return action.payload;
    
    default:
        return state
}}
