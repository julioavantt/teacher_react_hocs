import HOCAddStyle from "./HOCFuncionNormal"

const Component = props => (
	<div customproperty={2} {...props}>
		{console.log("Props Component", props)}
		SOY UN DIV ABURRIDO
	</div>
)

export default Component
//export default HOCAddStyle(Component)
