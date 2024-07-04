
import { DECREMENT, INCREMENT, INC_BY_VALUE, DEC_BY_VALUE } from './types';
//
//
//

export const incrementAction = async (dispatch) => {
    return dispatch({type: INCREMENT});
};

export const decrementAction = async (dispatch) => {
    return dispatch({type: DECREMENT});
};

export const IncByValueAction = async (vl, dispatch) => {
    return dispatch({type: INC_BY_VALUE,
                     payload: vl,
                    });
};

export const DecByValueAction = async (dispatch) => {
    return dispatch({type: DEC_BY_VALUE});
};







// export const incrementAction = () => {  // #1
//     return {
//         type: INCREMENT
//     };
// };


// export const decrementAction = () => {  // #2
//     return {
//         type: DECREMENT
//     };
// };

// export const IncByValueAction = (vl) => {  // #3
//     return {
//         type: INC_BY_VALUE,
//         payload: vl,
//     };
// };

// export const DecByValueAction = () => {  // #4
//     return {
//         type: DEC_BY_VALUE
//     };
// };