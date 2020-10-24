import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const App = ({ title }) => {
	const [count, setCount] = React.useState(0)

	return (
		<div>
			<h1>{title}</h1>
			<h1>
				Count is
				{count}
			</h1>
			<button type='button' onClick={() => setCount(count + 1)}>
				Increment
			</button>
		</div>
	)
}

App.propTypes = {
	title: PropTypes.string.isRequired,
}

const root = document.querySelector('#root')
ReactDOM.render(<App title='Hello JSX' />, root)
