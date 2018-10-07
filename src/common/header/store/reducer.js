import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	author: '犹游由我待',
	Juzi: '学习学习学习啊',
	active: true
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.NAV_CLICK :
			console.log('bbb');
			return state.set('active',false);
		default :
			return state;
	}
} 

