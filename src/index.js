import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Heading from 'components/Heading'
import Checkout from 'containers/Checkout'

const App = ({ title, query }) => {
	const [count, setCount] = React.useState(0)

	React.useEffect(() => {
		const getItem = () => {
			fetch(`http://localhost:8080/${query}`)
		}

		getItem(query)
	}, [query])

	const handleCountUpdate = () => {
		setCount(count + 1)
	}

	return (
		<div>
			<Heading>{title}</Heading>
			<Checkout>This is Checkout container</Checkout>
			<h1>Count is {count}</h1>
			<button type='button' onClick={handleCountUpdate}>
				Increment
			</button>
		</div>
	)
}

App.propTypes = {
	title: PropTypes.string,
	query: PropTypes.string,
}

const root = document.querySelector('#root')
ReactDOM.render(<App title='Hello JSX' onChange={() => console.log('here')} />, root)
