import React from 'react'
import PropTypes from 'prop-types'

const Checkout = (props) => {
	const { children } = props
	return <div>{children}</div>
}

Checkout.propTypes = {
	children: PropTypes.node,
}

export default Checkout
