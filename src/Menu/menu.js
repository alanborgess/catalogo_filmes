import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.div`
  background-color: black;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled(Link)`
  text-decoration: none;
  background-color: white;
  border-radius: 10px;
  padding: 10px 20px;
  color: black;
  font-size: 18px;
  margin: 5px;

  &:hover {
    background-color: #333;
    color: white;
  }
`;

function Menu() {
  const itens = ['Home', 'Buscar', 'Contato', 'Sobre'];

  return (
    <Navbar>
      {itens.map((item, index) => (
        <Item to={item === "Home" ? "/" : item.toLocaleLowerCase()} key={index}>
          {item}
        </Item>
      ))}
    </Navbar>
  );
}

export default Menu;
