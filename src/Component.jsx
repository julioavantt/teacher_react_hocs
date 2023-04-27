const withStyle = WrappedComponent => {
	function Inner(props) {
		return (
			<WrappedComponent
				{...props}
				style={{
					background: "red",
					width: 300,
					margin: "30px auto",
					height: 200,
				}}
			/>
		)
	}

	return Inner
}

const Component = props => {
	return (
		<div customProperty={2} {...props}>
			SOY UN DIV1
		</div>
	)
}

export default Component
//export default withStyle(Component)
