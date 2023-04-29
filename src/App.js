import Header from "./appmo/header";
import Footer from "./appmo/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./appmo/home";
import "./css/slide.css";
import "./css/style.css";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Home />}></Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
