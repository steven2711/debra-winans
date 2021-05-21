import styled from 'styled-components'
import Link from 'next/link'
import {FaFacebookF, FaInstagram} from 'react-icons/fa'





const StyledNavbarLinks = styled.div`
    display: flex;
    width: 100%;
    height: 3.7rem;
    align-items: center;
    justify-content: flex-end;
    text-transform: uppercase;
    




    ul {
        display: flex;
        align-items: center;
        height: 3.7rem;
        

        &:nth-child(1) {
            
            justify-content: space-evenly;
            width: 100%;
        }

        &:nth-child(2) {
            justify-content: space-evenly;
            width: 20%;
        }
        
    }

   

    

    

    @media (max-width: 650px) {
        position: fixed;
        overflow: hidden;
        top: 0;
        flex-direction: column;
        justify-content: center;
        height: 100vh;
        background-color: rgba(0,0,0,0.8);
        color: white;
        transition: all 0.3s ease;
        transform: ${({open}) => open ? 'scale(1)' : 'scale(0)'};
        

        ul {
            flex-direction: column;
            font-size: 1.5rem;
            opacity: ${({open}) => open ? '1' : '0'};
            transition: opacity 0.3s linear;
            transition-delay: 0.3s;
            
            


            &:nth-child(1) {
                height: 40%;
            }

            &:nth-child(2) {
                height: 30%;
            }
        }

        ul li a {
            color: white;
        }
    }

    
`


export default function NavbarLinks({open, setOpen}) {
    return (
        <StyledNavbarLinks open={open}>
             <ul>
                    <li>
                        <Link href="/about" onClick={() => setOpen(!open)}>
                            <a>About</a>
                        </Link>
                    </li>
                     
                    <li>
                        <Link href="/products">
                            <a>Products</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <a>Contact</a>
                        </Link>
                    </li>
                </ul>

                <ul>
                        <li><a href="#" target="_blank" rel="noopener"><FaFacebookF/></a></li>
                        <li><a href="#" target="_blank" rel="noopener"><FaInstagram/></a></li>
                </ul>
        </StyledNavbarLinks>
    )
}
