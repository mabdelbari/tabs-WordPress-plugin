function TabItemFront({ tab }) {
  return (
    <div
      className={`item-front`}
      style={{ backgroundColor: tab.headBackColor }}
    >
      <span className="title-front" style={{ color: tab.headTextColor }}>
        {tab.title}
      </span>
    </div>
  );
}

export default TabItemFront;
