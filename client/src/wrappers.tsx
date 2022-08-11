import { BrowserRouter } from 'react-router-dom';
import Router from './router';

export default function Wrappers() {
	return (
		<>
			{/* You can replace "BrowserRouter with other react-router routers." */}
			<BrowserRouter>
				{/* Insert your wrappers here. They should go around the <Router /> class. */}
				<Router />
			</BrowserRouter>
		</>
	);
}
