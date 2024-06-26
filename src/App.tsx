import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {} from "@/views"

const router = createBrowserRouter([
	{
		path: "/",
		element: <h1>Home View</h1>
	}
])

const App: React.FC = () => {

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App
