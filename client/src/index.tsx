import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './routes/home';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(<Home />);
