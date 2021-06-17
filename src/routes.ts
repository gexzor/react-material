import Home from './components/Home';
import Match from './components/Match/Match';
import IRoute from './shared/interfaces/IRoute';

export const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		exact: true,
	},
	{
		path: '/match/:id',
		name: 'Match',
		component: Match,
		exact: true,
	},
];

export default routes;
