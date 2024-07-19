import { RichText } from "@wordpress/block-editor";
function TabItem({ tabIndex, tab, curOpen, onOpen, onTitleChange }) {
  const isOpen = curOpen === tabIndex;

  function handleToggle(tabIndex) {
    onOpen(tabIndex);
  }

  return (
    <div
      className={`item ${isOpen ? "open active" : ""}`}
      style={{ backgroundColor: tab.headBackColor }}
      onClick={() => handleToggle(tabIndex)}
    >
      <RichText
        tagName="span"
        className="title"
        style={{ color: tab.headTextColor }}
        value={tab.title}
        onChange={(newTitle) => onTitleChange(newTitle)}
        placeholder="tab-title"
        disableLineBreaks={true}
      />
    </div>
  );
}

export default TabItem;
