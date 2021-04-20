import React, { useReducer } from 'react';



const reducer = (state, action) => {
    switch (action) {
        case 'INCREMENT':
           return state + 1
            break;
    }
}

export default reducer;