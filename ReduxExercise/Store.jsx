import{createStore} from 'redux';

 function CounterReducer(state = 0, action) {
        switch (action.type) {
            case 'INCREMENT':
                return ++state;
            case 'DECREMENT':
                return --state;
            default:
                return state;

        }
    }

export const store=createStore(CounterReducer);