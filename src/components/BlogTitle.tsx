import * as React from "react";
import { Header, Segment, Icon } from "semantic-ui-react";

export default () => {
  /*
   * TODO: 제목 내용 동적으로 가져올 수 있도록
   */
  return (
    <Segment vertical>
      <Header as="h2">
        <Icon name="newspaper" />
        <Header.Content>
          정대화 블로그
            <Header.Subheader>
            {/* All about this starter kit */}
          </Header.Subheader>
        </Header.Content>
      </Header>
    </Segment>
  );
};
