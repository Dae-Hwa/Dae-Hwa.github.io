import { render, configure } from "enzyme";
import "jest";
import * as React from "react";
import BlogPagination from "./BlogPagination";

// Configure enzyme with react 16 adapter
const Adapter: any = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

const LinkStub = ((props: any) => <div {...props} />) as any;

describe("BlogPagination component", () => {
  it("should render nothing if only 1 page", () => {
    const pageNumber: number = 1;
    const pathname: string = `/blog/page/${pageNumber}/`;
    const pageCount: number = 1;

    const wrapper = render(<BlogPagination
      pathname={pathname}
      Link={LinkStub}
      pageCount={pageCount}
      pageNumber={pageNumber} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly 5 pages", () => {
    const pageNumber: number = 2;
    const pathname: string = `/blog/page/${pageNumber}/`;
    const pageCount: number = 5;

    const wrapper = render(<BlogPagination
      pathname={pathname}
      Link={LinkStub}
      pageCount={pageCount}
      pageNumber={pageNumber} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly 10 pages", () => {
    const pageNumber: number = 5;
    const pathname: string = `/blog/page/${pageNumber}/`;
    const pageCount: number = 10;

    const wrapper = render(<BlogPagination
      pathname={pathname}
      Link={LinkStub}
      pageCount={pageCount}
      pageNumber={pageNumber} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should render correctly 20 pages", () => {
    const pageNumber: number = 5;
    const pathname: string = `/blog/page/${pageNumber}/`;
    const pageCount: number = 20;

    const wrapper = render(<BlogPagination
      pathname={pathname}
      Link={LinkStub}
      pageCount={pageCount}
      pageNumber={pageNumber} />);
    expect(wrapper).toMatchSnapshot();
  });

  // it("should have first link active if no match", () => {
  //   const pathname: string = "/plop";
  //   const pageCount: number = 10;

  //   const wrapper = render(<BlogPagination
  //     pathname={pathname}
  //     Link={LinkStub}
  //     pageCount={pageCount}
  //     pageNumber={1} />);
  //   expect(wrapper).toMatchSnapshot();
  // });
});
