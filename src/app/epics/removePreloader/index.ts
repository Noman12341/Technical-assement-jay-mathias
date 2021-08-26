import { EMPTY } from 'rxjs';
import { Epic } from '../types';

// TODO: Remove preloader animation when data is first loaded. 
export const removePreloader$: Epic = (action$) => {
	document.getElementById('preloader')?.remove();
	return EMPTY;
};