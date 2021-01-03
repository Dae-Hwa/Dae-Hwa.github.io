import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { toggleSidebar } from "../../store";
import { Container, Menu, Header, Segment, Grid } from "semantic-ui-react";
import { MenuProps } from "../Menu";

interface HeaderMenuProps extends MenuProps {
  dispatch?: Dispatch<any>;
  inverted?: boolean;
}

export const HeaderMenu = ({ items, pathname, Link, inverted, dispatch }: HeaderMenuProps) =>
  <Container>
    <Menu size="large" pointing secondary inverted={inverted}>
      <Menu.Item as="a" className="mobile only" icon="sidebar" onClick={() => dispatch && dispatch(toggleSidebar())} />
      <Header as={"h1"} style={{ "margin-bottom": "6px" }}>
        <Header.Content>정대화 블로그</Header.Content>
      </Header>
      {items.map((item) => {
        const active = (item.exact) ? pathname === item.path : pathname.startsWith(item.path);
        return <Menu.Item
          as={Link}
          className="mobile hidden"
          name={item.name}
          to={item.path}
          key={item.path}
          active={active}
        />;
      })}
    </Menu>
  </Container >;

export default connect()(HeaderMenu);
