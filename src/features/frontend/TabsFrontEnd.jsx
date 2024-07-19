import { InnerBlocks, useBlockProps } from "@wordpress/block-editor";
import TabItemFront from "./TabItemFront";

function TabsFrontEnd({ attributes }) {
  const blockProps = useBlockProps.save();
  const { tabs } = attributes;

  return (
    <div {...blockProps}>
      <div className="container-front">
        <div className="tabs-container-front">
          {tabs?.map((tab, index) => (
            <TabItemFront tab={tab} key={index} />
          ))}
        </div>

        {tabs.length > 0 &&
          tabs.map((tab) => (
            <div
              className="tab-content-front"
              style={{
                color: tab.contentTextColor,
                backgroundColor: tab.contentBackColor,
              }}
            >
              {tab.content}
            </div>
          ))}
      </div>
    </div>
  );
}

export default TabsFrontEnd;
