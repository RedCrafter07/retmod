import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './routes/home';

export default function Router() {
	const location = useLocation();

	return (
		<>
			<Routes location={location}>
				<Route path='/'>
					<Route index element={<Home />} />
				</Route>
			</Routes>
		</>
	);
}
