import * as React from "react";
import { GatsbyLinkProps } from "gatsby-link";
import { Menu } from "semantic-ui-react";
import { times } from "lodash";

interface BlogPaginationProps extends React.HTMLProps<HTMLDivElement> {
  pathname: string;
  Link: React.ComponentClass<GatsbyLinkProps<any>>;
  pageCount: number;
  pageNumber: number;
}

export default (props: BlogPaginationProps) => {
  const { pathname, pageCount, pageNumber } = props;

  if (pageCount === 1) { return null; }

  return (
    <Menu pagination>
      {times(pageCount, (index) => {
        const pageIndex = (index + 1);

        const rangeStep = pageCount < 10 ? 5 : 3;
        const isInRange = (pageIndex - rangeStep < pageNumber && pageIndex + rangeStep > pageNumber);
        const isLastPage = (pageIndex === pageCount);
        const isFirstPage = (pageIndex === 1);
        if (isInRange || isFirstPage || isLastPage) {
          return (
            <Menu.Item
              key={pageIndex}
              style={{ cursor: "pointer" }}
              as={props.Link}
              to={`${pathname}${pageIndex}/`}
              name={pageIndex.toString()}
              active={pageNumber === pageIndex}
            />
          );
        } else {
          return (pageIndex === pageCount - 1 || pageIndex === 2)
            ? <Menu.Item key={pageIndex} disabled>...</Menu.Item>
            : null;
        }
      })}
    </Menu>
  );
};
