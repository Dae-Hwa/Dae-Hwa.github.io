import * as React from "react";
import { GatsbyLinkProps } from "gatsby-link";
import { Card, List } from "semantic-ui-react";
import { MarkdownRemarkGroupConnection } from "../../graphql-types";

interface TagsCardProps extends React.HTMLProps<HTMLDivElement> {
  tags: MarkdownRemarkGroupConnection[];
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
  tag?: string;
  basePath: string;
}

export default (props: TagsCardProps) => {
  return (
    <List horizontal>
      {props.tags.map((tag) => {
        const isActive = tag.fieldValue === props.tag;
        const activeStyle = {
          fontWeight: "700",
        };
        const tagLink = isActive ? `${props.basePath}` : `${props.basePath}/tags/${tag.fieldValue}/`;
        return (
          <List.Item as="span" key={tag.fieldValue}>
            <List.Icon name="tag" color={isActive ? "grey" : null} />
            <List.Content style={isActive ? activeStyle : null}>
              <props.Link to={tagLink}>
                {tag.fieldValue} ({tag.totalCount})
                  </props.Link>
            </List.Content>
          </List.Item>
        );
      })}
    </List>
  );
};
