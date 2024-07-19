import { registerBlockType } from "@wordpress/blocks";

import "./style.scss";

import metadata from "./block.json";
import TabsEditor from "./features/editor/TabsEditor";
import TabsFrontEnd from "./features/frontend/TabsFrontEnd";

registerBlockType(metadata.name, {
  edit: TabsEditor,
  save: TabsFrontEnd,
});
