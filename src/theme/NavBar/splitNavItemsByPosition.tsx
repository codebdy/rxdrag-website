import { ComponentProps } from "react";
import NavbarItem from "@theme/NavbarItem";

export function splitNavItemsByPosition(
  items: Array<ComponentProps<typeof NavbarItem>>): {
    leftItems: Array<ComponentProps<typeof NavbarItem>>;
    rightItems: Array<ComponentProps<typeof NavbarItem>>;
  } {
  const leftItems = items.filter(
    (item) =>
      // @ts-expect-error: temporary, will be fixed in Docusaurus TODO remove soon
      (item.position ?? DefaultNavItemPosition) === "left"
  );
  const rightItems = items.filter(
    (item) =>
      // @ts-expect-error: temporary, will be fixed in Docusaurus TODO remove soon
      (item.position ?? DefaultNavItemPosition) === "right"
  );
  return {
    leftItems,
    rightItems,
  };
}
