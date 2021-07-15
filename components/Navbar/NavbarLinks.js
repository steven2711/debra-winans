import Link from "next/link";
import styled from "styled-components";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const StyledNavbarLinks = styled.div`
  display: flex;
  width: 100%;
  height: 4.5rem;
  align-items: center;
  justify-content: flex-end;
  text-transform: uppercase;

  ul {
    display: flex;
    align-items: center;
    height: 4.5rem;

    &:nth-child(1) {
      justify-content: space-evenly;
      width: 100%;
    }

    &:nth-child(2) {
      justify-content: space-evenly;
      width: 20%;
    }
  }

  ul li a {
    color: white;
  }

  ul li a:hover {
    color: #9cb2ce;
    transition: all 0.3s ease;
  }

  @media (max-width: 950px) {
    position: fixed;
    overflow: hidden;
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    top: 0;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    transition: transform 0.3s;
    transform: ${({ open }) => (open ? "scale(1)" : "scale(0)")};

    ul {
      flex-direction: column;
      font-size: 1.5rem;
      opacity: ${({ open }) => (open ? "1" : "0")};
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
`;

export default function NavbarLinks({ open, setOpen }) {
  return (
    <StyledNavbarLinks open={open}>
      <ul>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>

        <li>
          <Link href="/life-altered-not-over">
            <a>Book</a>
          </Link>
        </li>
        <li>
          <Link href="/events/new-wine-womens-bible-study-2021">
            <a>Events</a>
          </Link>
        </li>
        <li>
          <Link href="/event-invite-form">
            <a>Invite</a>
          </Link>
        </li>
      </ul>

      <ul>
        <li>
          <a
            href="https://www.facebook.com/debra.winans.50"
            target="_blank"
            rel="noopener"
          >
            <FaFacebookF />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/debra_winans/"
            target="_blank"
            rel="noopener"
          >
            <FaInstagram />
          </a>
        </li>
      </ul>
    </StyledNavbarLinks>
  );
}
