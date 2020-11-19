import * as React from 'react'
import ReactDOM from 'react-dom'

const App = React.forwardRef(function App(props, ref) {
	const { children, ...other } = props

	const [count, setCount] = React.useState(0)

	return (
		<div ref={ref} {...other}>
			This is React App {count}
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	)
})

export default App

ReactDOM.render(<App />, document.getElementById('root'))
