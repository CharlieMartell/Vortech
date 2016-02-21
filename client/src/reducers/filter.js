import { REQUEST_FILTERS, REQUEST_FILTERS_SUCCESS, ADD_EMAIL_TO_NEW_FILTER, FINISH_EMAIL_SELECTION, START_NEW_RECIPE, NEW_RECIPE_SUCCESS, INCREMENT_FLOW } from '../constants/FilterConstants'

const initialState = {
    isFetching: false,
    newFilter: {
        ids: null,
        name: null,
    },
    actions: [
            {
                title: 'Extract Flight Data',
                description: 'This analyses the flight data from your emails and gives you your flight information',
                id: 0
            },
            {
                title: 'Donate Your Change',
                description: 'After extracting the finicial data from your emailed recipts, this rounds to the next dollar and donates the change to the Red Cross',
                id: 1
            }
        ],
    newFilterStatus: -1,
    filters: [
        {
            id: 1,
            title: 'Flights',
            action: 'Extracts your flight data'
        }
    ]
}

export default function filter(state = initialState, action) {
    switch (action.type) {
        case REQUEST_FILTERS:
            return Object.assign({}, state, {
                isFetching: true,
            });

        case REQUEST_FILTERS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                filters: action.payload.filters
            });

        case INCREMENT_FLOW:
            console.log(state);
            return Object.assign({}, state, {
                newFilterStatus: state.newFilterStatus + 1
            });

        case START_NEW_RECIPE:
            return Object.assign({}, state, {
                newFilterStatus: 0
            });

        case ADD_EMAIL_TO_NEW_FILTER:
            return state;

        case FINISH_EMAIL_SELECTION:
            return Object.assign({}, state, {
                newFilterStatus: 1
            });

        case NEW_RECIPE_SUCCESS:
            var filter = state.filters;
            filter.push({
                    id: state.filters[state.filters.length -1].id + 1,
                    action: (action.payload.action).toString(),
                    title: action.payload.name,
            });

            return Object.assign({}, state, {
                newFilterStatus: -1,
                filters: filter 
            });

        default:
            return state;
    }
}
