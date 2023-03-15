import capitalize from "@mui/utils/capitalize";
import { JSONFromHTML } from "app/interfaces/jsonFromHtml.interface";
import DOMPurify from "dompurify";
import parse, { domToReact } from "html-react-parser";

/**
 * Const to remove space between paragraphs by
 * replacing element P with span
 */
export const optionRemoveRootParrNode = {
  replace: ({ name, children, attribs }) => {
    if (name === "p") {
      return <span className={attribs.class}>{domToReact(children)}</span>;
    }
    return "";
  },
};

/**
 *
 * @param noFormedData Data to be converted to HTML
 * @param options Options in case of conversion or replacement of elements when executing the conversion
 * @param formed True / false to convert data to interface format
 * @returns Element HTML
 */
export const parseJsonToHtml = (
  noFormedData,
  options = undefined,
  formed = true
) => {
  const htmlOnJson: JSONFromHTML = formed
    ? JSON.parse(noFormedData)
    : noFormedData;
  const htmlConverted = parseJsonStructureToHtml(htmlOnJson);

  const htmlSanitize =
    options !== undefined
      ? parse(DOMPurify.sanitize(htmlConverted), options)
      : parse(DOMPurify.sanitize(htmlConverted));
  return htmlSanitize;
};

/**
 * Convert Json to Html whit recursive logic
 * @param node Json to formnat
 * @returns HTML
 */
function parseJsonStructureToHtml(node: JSONFromHTML): string {
  let html: string = "";
  if (node.Children.length > 0) {
    if (isValidTag(node.Tag)) {
      html += `<${node.Tag} ${getAttrElemnt(node)}>`;
    }

    node.Children.forEach((element) => {
      html += `${parseJsonStructureToHtml(element)}`;
    });
    if (isValidTag(node.Tag)) {
      html += `</${node.Tag}>`;
    }
  } else if (isValidTag(node.Tag)) {
    html += capitalizeText(node);
  }

  return html;
}

/**
 * Capitalize the first letter of the text
 * @param node Html element
 * @returns elment Capitalize
 */
const capitalizeText = (node) => {
  if (node.Text) {
    return `<${node.Tag} ${getAttrElemnt(node)}>${capitalize(node.Text)}</${
      node.Tag
    }>`;
  }
  return `<${node.Tag} ${getAttrElemnt(node)}>${node.Text}</${node.Tag}>`;
};

/**
 * Return de class attribute
 * @param node Element html
 * @returns Class attribute
 */
const getAttrElemnt = (node) => {
  if ("className" in node.Attr) {
    return `class="${node.Attr.className}"`;
  }
  if ("class" in node.Attr) {
    return `class="${node.Attr.class}"`;
  }
  return "";
};

export const getJsonElementToText = (noFormedData, preferentPosition) => {
  const jsonListItemsDescription = JSON.parse(noFormedData);

  const preferentItem =
    jsonListItemsDescription.length >= 1 &&
    preferentPosition <= jsonListItemsDescription.length - 1
      ? jsonListItemsDescription[preferentPosition]
      : jsonListItemsDescription[0];

  return JSON.stringify(preferentItem);
};

export const parseJsonToText = (noFormedData, formed = true) => {
  const htmlOnJson: JSONFromHTML = formed
    ? JSON.parse(noFormedData)
    : noFormedData;
  const htmlConverted = parseJsonStructureToText(htmlOnJson);
  return htmlConverted;
};

function parseJsonStructureToText(node: JSONFromHTML): string {
  let html: string = "";
  if (node.Children.length > 0) {
    node.Children.forEach((element) => {
      html += `${parseJsonStructureToText(element)}`;
    });
  } else if (isValidTag(node.Tag)) {
    html += `${node.Text} `;
  }
  return html;
}

function isValidTag(tag: string | null): boolean {
  if (tag && tag !== "html" && tag !== "body" && tag !== "head") {
    return true;
  }
  return false;
}
