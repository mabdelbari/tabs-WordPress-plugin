import React, { useState, useEffect } from "react";

import {
  PanelColorSettings,
  InspectorControls,
  useBlockProps,
} from "@wordpress/block-editor";

import { TextControl, PanelBody, Button } from "@wordpress/components";

import TabItem from "./TabItem";

import "../../editor.scss";

function TabsEditor({ attributes, setAttributes }) {
  const blockProps = useBlockProps();
  const { tabs } = attributes;
  const [curOpen, setCurOpen] = useState(0);

  function handleAddTab() {
    setAttributes({
      tabs: [
        ...tabs,
        {
          title: "New Tab",
          content: "Add Content",
          headTextColor: "#fff",
          headBackColor: "#4f46e5",
          contentTextColor: "#fff",
          contentBackColor: "#4f46e5",
        },
      ],
    });
  }

  const handleTitleChange = (newTitle) => {
    setAttributes({
      tabs: tabs.map((tab, index) =>
        index === curOpen ? { ...tab, title: newTitle } : tab
      ),
    });
  };

  const handleContentChange = (newContent) => {
    setAttributes({
      tabs: tabs.map((tab, index) =>
        index === curOpen ? { ...tab, content: newContent } : tab
      ),
    });
  };

  const handleColorChange = (colorType, newColor) => {
    setAttributes({
      tabs: tabs.map((tab, index) =>
        index === curOpen ? { ...tab, [colorType]: newColor } : tab
      ),
    });
  };

  const handleDeleteTab = (tabIndex) => {
    setAttributes({
      tabs: tabs.filter((_, index) => index !== tabIndex),
    });
  };

  return (
    <div {...blockProps}>
      <div className="container">
        <div className="tabs-container">
          {tabs?.map((tab, index) => (
            <TabItem
              tabIndex={index}
              tab={tab}
              key={index}
              curOpen={curOpen}
              onOpen={setCurOpen}
              onTitleChange={handleTitleChange}
            />
          ))}
        </div>

        {tabs.map(
          (tab, index) =>
            index === curOpen && (
              <div
                key={index}
                className={`tab-content`}
                style={{
                  color: tab.contentTextColor,
                  backgroundColor: tab.contentBackColor,
                }}
              >
                {/* <InnerBlocks
                  allowedBlocks={["core/paragraph", "core/image", "core/list"]}
                  templateLock={false}
                  template={[
                    ["core/paragraph", { placeholder: "Add content..." }],
                  ]}
                /> */}
                {tab.content}
              </div>
            )
        )}

        {tabs.length > 0 && (
          <InspectorControls>
            <PanelBody>
              <Button
                className="button"
                onClick={() => handleDeleteTab(curOpen)}
              >
                Delete Tab
              </Button>
              <TextControl
                label={"Tab Title"}
                value={tabs?.at(curOpen)?.title}
                placeholder="Add Title"
                onChange={(value) => handleTitleChange(value)}
              />
              <TextControl
                label={"Tab Content"}
                value={tabs?.at(curOpen)?.content}
                placeholder="Add Content"
                onChange={(value) => handleContentChange(value)}
              />
              <PanelColorSettings
                title={"Title Color Settings"}
                colorSettings={[
                  {
                    value: tabs?.at(curOpen)?.headTextColor,
                    onChange: (color) =>
                      handleColorChange("headTextColor", color),
                    label: "Text Color",
                  },
                  {
                    value: tabs?.at(curOpen)?.headBackColor,
                    onChange: (color) =>
                      handleColorChange("headBackColor", color),
                    label: "Background Color",
                  },
                ]}
              />
              <PanelColorSettings
                title={"Content Color Settings"}
                colorSettings={[
                  {
                    value: tabs?.at(curOpen)?.contentTextColor,
                    onChange: (color) =>
                      handleColorChange("contentTextColor", color),
                    label: "Text Color",
                  },
                  {
                    value: tabs?.at(curOpen)?.contentBackColor,
                    onChange: (color) =>
                      handleColorChange("contentBackColor", color),
                    label: "Background Color",
                  },
                ]}
              />
            </PanelBody>
          </InspectorControls>
        )}
        <button className="button" onClick={handleAddTab}>
          Add Tab
        </button>
      </div>
    </div>
  );
}

export default TabsEditor;
