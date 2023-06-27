const withStyle = ComponentAsParameter => {
	function Inner(props) {
		console.log("prop From App", props)
		return (
			<ComponentAsParameter
				{...props}
				style={{
					background: "red",
					width: 300,
					margin: "30px auto",
					height: 200,
					padding: "1rem",
					color: "white",
					fontSize: "2rem",
				}}
				customizada="si"
			/>
		)
	}

	return Inner
}

/* const withStyle = WrappedComponent => props =>
	(
		<WrappedComponent
			{...props}
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
		{console.log("Props de Component", props)}
		SOY UN DIV ABURRIDO
	</div>
)

export default Component
// export default withStyle(Component)
