import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export interface BlogTitleProps {
  name: string;
  content: string;
}

export default (props: BlogTitleProps) => {
  return (
    <Segment vertical>
      <Header as="h3">
        <Icon name="newspaper" />
        <Header.Content>
          {props.name}
          <Header.Subheader>
            {props.content}
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
