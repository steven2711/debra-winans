import styled from 'styled-components'


const StyledHamburger = styled.div`
  width: 2.5rem;
  height: 3.8rem;
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;

  @media (max-width: 650px) {
    display: flex;
    height: 4.5rem;
   }

  div {
    background-color: ${({open}) => open ? 'white' : 'white'};
    width: 100%;
    height: 0.3rem;
    margin: 0.2rem;
    text-align: center;
    border-radius: 10px;
    transition: all 0.2s linear;
    


    &:nth-child(1) {
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
        transform-origin: 1px 0.6rem;
    }

    &:nth-child(2) {
        transform: ${({open}) => open ? 'translateX(1005)' : 'translateX(0)'};
        opacity: ${({open}) => open ? '0' : '1'};
    }

    &:nth-child(3) {
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        transform-origin: 0.65rem 0.01rem;
    }



    



  }
`




export default function Hamburger({open, setOpen}) {

    


    return (
        <StyledHamburger open={open} onClick={() => setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </StyledHamburger>
    )
}
