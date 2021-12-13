import { camelCaseToTitleCase } from "../helpers/camelCaseToTitleCase.ts";

test("camel case to title case", () => {
    expect(camelCaseToTitleCase("testContent")).toBe("Test Content");
});
