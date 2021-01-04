import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default () => {
  /*
   * TODO: 제목 내용 동적으로 가져올 수 있도록
   */
  return (
    <Segment vertical>
      <Header as="h3">
        <Icon name="newspaper" />
        <Header.Content>
          blog
            <Header.Subheader>
            This will be updated
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
