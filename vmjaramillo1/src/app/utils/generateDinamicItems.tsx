import EvaTypography from "@global/GlobalTypography";

import { sortArrayBy } from "./index";
import {
  getJsonElementToText,
  optionRemoveRootParrNode,
  parseJsonToHtml,
} from "./JsonConverter";

/**
 * Generation of dynamic items for card and benefit
 * according to configuration and information
 * received from services
 * @param limitItemsToShow Items to show in view (JSON config)
 * @param listServiceItems list of items sent by the service
 * @param listLocalItems list of items sent by the JSON local
 * @param variant Element variant to generate (coverage/benefits)
 * @returns
 */
const generateDinamicItems = (
  limitItemsToShow,
  listServiceItems,
  listLocalItems,
  variant,
  defaultItem
) => {
  const arrayItems = [];
  const sortListServiceItems = listServiceItems.slice();
  const limitLocalItems = listLocalItems.length - 1;
  if (limitItemsToShow > sortListServiceItems.length) {
    console.log(`Se intentan mostrar mas elementos (${variant}) que los
			configurados en local`);
    return variant === "coverage" ? (
      [defaultItem]
    ) : (
      <EvaTypography variant="body1">
        {parseJsonToHtml(defaultItem.body, optionRemoveRootParrNode)}
      </EvaTypography>
    );
  }
  sortArrayBy(sortListServiceItems, "priority");
  for (let index = 0; index < sortListServiceItems.length; index += 1) {
    if (index > limitItemsToShow) {
      break;
    }
    const indexLocalElement = index > limitLocalItems ? limitLocalItems : index;
    const newItem = {
      id: sortListServiceItems[index].$id,
      icon: listLocalItems[indexLocalElement].icon,
      altIcon: listLocalItems[indexLocalElement].altIcon,
      body: getJsonElementToText(sortListServiceItems[index].description, 0),
    };
    if (sortListServiceItems[index].isActive) {
      arrayItems.push(newItem);
    }
  }
  return arrayItems;
};

export default generateDinamicItems;
