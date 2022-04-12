export const initialState = { 
    user: null, 
    token: null
};
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'SETUSER':
            return{
                ...state,
                user:action.user,
            };
        case 'SETTOKEN':
             return{
                ...state,
                token:action.token,
                };
        default:
            return state;

    }
    
    
}
export default reducer;