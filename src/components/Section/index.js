import styled from 'styled-components'

const SectionStyled = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 80px 16vw 150px 16vw;
	width: 100%;
	min-height: 500px;
	border-top: 1px solid rgba(0,0,0,0.2);
	padding-bottom: ${props => props.ultimo ? '200px' : '150px'};
	background-color: ${props => (props.bg_color)};

	@media (max-width: 830px) {
		width: 830px;
	}
`

export function Section ({ bg_color, children, id, ultimo }) {
	return (
		<SectionStyled bg_color={bg_color} id={id} ultimo={ultimo}>
			{children}
		</SectionStyled>
	)
}
