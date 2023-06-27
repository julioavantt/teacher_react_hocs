const withStyle = ComponentAsParameter => {
	function Inner() {
		return (
			<ComponentAsParameter
				style={{
					background: "red",
					width: 300,
					margin: "30px auto",
					height: 200,
				}}
				customizada="si"
			/>
		)
	}

	return Inner
}

/* const withStyle = WrappedComponent => () =>
	(
		<WrappedComponent
			style={{
				background: "red",
				width: 300,
				margin: "30px auto",
				height: 200,
			}}
			customizada="si"
		/>
	) */

const Component = props => (
	<div customproperty={2} {...props}>
		{console.log({ props })}
		SOY UN DIV ABURRIDO
	</div>
)

export default Component
//export default withStyle(Component)
