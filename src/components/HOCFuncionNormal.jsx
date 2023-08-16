export default function HOCAddStyle(ComponentAsParameter) {
	function Inner(props) {
		//console.log("prop From App", props)
		return (
			<ComponentAsParameter
				{...props}
				style={{
					background: "red",
					width: 300,
					margin: "30px auto",
					height: 200,
					padding: "1rem",
					fontSize: "2rem",
				}}
				customizada="si"
			/>
		)
	}

	return Inner
}
