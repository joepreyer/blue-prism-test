import { render } from "@testing-library/react";
import PropertyItem from "../property-item";

describe("PropertyItem", () => {
    it("should render name and value", () => {
        const name = "Width";
        const value = "100px";
        const { getByText } = render(<PropertyItem name={name} value={value} />);
        expect(getByText(`${name}:`)).toBeInTheDocument();
        expect(getByText(value)).toBeInTheDocument();
    });

    it("should render 'NA' if value is not provided", () => {
        const name = "Width";
        const { getByText } = render(<PropertyItem name={name} />);
        expect(getByText(`${name}:`)).toBeInTheDocument();
        expect(getByText("NA")).toBeInTheDocument();
    });
});
