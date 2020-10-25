import React from 'react'
import PropTypes from 'prop-types'
import { getClientApi } from 'utils'

const Heading = (props) => {
	const { children } = props
	getClientApi()

	return <div>{children}</div>
}

Heading.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Heading
