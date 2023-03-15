import { JSONFromHTMLAttr } from "./jsonFromHtmlAttr.interface";

export interface JSONFromHTML {
  NodeType: string | null;
  Tag: string | null;
  Text: string | null;
  Attr: JSONFromHTMLAttr | null;
  Children: JSONFromHTML[];
}
