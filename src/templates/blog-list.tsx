import * as React from 'react';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import { Grid, Card, Container, Segment, Label } from 'semantic-ui-react';
import { MarkdownRemarkConnection, ImageSharp } from '../graphql-types';
import BlogTitle from '../components/BlogTitle';
import TagsCard from '../components/TagsCard/TagsCard';
import BlogPagination from '../components/BlogPagination/BlogPagination';
import { withLayout, LayoutProps } from '../components/Layout';
import { MarkdownRemark } from '../graphql-types';

interface BlogProps extends LayoutProps {
  data: {
    tags: MarkdownRemarkConnection;
    posts: MarkdownRemarkConnection;
  };
  pageContext: {
    tag?: string; // only set into `templates/tags-pages.tsx`
  };
}

const BlogPage = (props: BlogProps) => {
  const tags = props.data.tags.group;
  const posts = props.data.posts.edges;
  const { pathname } = props.location;
  const pageCount = Math.ceil(props.data.posts.totalCount / 10);

  // TODO export posts in a proper component
  const Posts = (
    <Container>
      {posts.map(({ node }: { node: MarkdownRemark }) => {
        const {
          frontmatter,
          fields: { slug }
        } = node;
        const tags = frontmatter.tags.map(tag => (
          <Label key={tag}>
            <Link to={`/blog/tags/${tag}/`}>{tag}</Link>
          </Label>
        ));

        const extra = (
          <Card.Meta>
            <span style={{ fontSize: '8pt' }} className="date">
              {' '}
              {frontmatter.updatedDate}
            </span>
          </Card.Meta>
        );

        return (
          <Card
            key={slug}
            fluid
          // description={tags}
          // meta={extra}
          // link
          >
            <Card.Content>
              <Card.Header>{frontmatter.title}</Card.Header>
              <Card.Meta>{extra}</Card.Meta>
              <Card.Description>{tags}</Card.Description>
            </Card.Content>
          </Card>
        );
      })}
    </Container>
  );

  return (
    <Container>
      {/* Title */}
      <BlogTitle />
      <div>
        <TagsCard Link={Link} tags={tags} tag={props.pageContext.tag} />
      </div>
      {/* Content */}
      <Segment vertical>
        <Grid padded style={{ justifyContent: 'space-around' }}>
          <div>
            {Posts}
            <Segment vertical textAlign="center">
              <BlogPagination
                Link={Link}
                pathname={pathname}
                pageCount={pageCount}
              />
            </Segment>
          </div>
        </Grid>
      </Segment>
    </Container>
  );
};

export default withLayout(BlogPage);

export const pageQuery = graphql`
  query BlogList(
    $dateFormat: String
    $postsPerPage: Int
    $skip: Int
    $filter: MarkdownRemarkFilterInput # $tag: String
  ) {
    # Get tags
    tags: allMarkdownRemark(filter: { frontmatter: { draft: { ne: true } } }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }

    # Get posts
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___updatedDate] }
      filter: $filter
      limit: $postsPerPage
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          excerpt
          timeToRead
          fields {
            slug
          }
          frontmatter {
            tags
            title
            updatedDate(formatString: $dateFormat)
          }
        }
      }
    }
  }
`;
