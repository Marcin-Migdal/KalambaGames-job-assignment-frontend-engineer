import classNames from "classnames";

export type Tab<TKey extends string> = {
  label: string;
  key: TKey;
  disabled?: boolean;
};

type TabsProps<TKey extends string> = {
  tabs: Tab<TKey>[];
  selectedTab: TKey;
  onTabChange: (key: TKey) => void;
};

export const Tabs = <TKey extends string>({ tabs, selectedTab, onTabChange }: TabsProps<TKey>) => {
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {tabs.map((tab, index) => (
          <Tab key={index} tab={tab} isSelected={selectedTab === tab.key} onClick={onTabChange} />
        ))}
      </ul>
    </div>
  );
};

type TabProps<TKey extends string> = {
  tab: Tab<TKey>;
  isSelected: boolean;
  onClick: (key: TKey) => void;
};

const Tab = <TKey extends string>({ tab, isSelected, onClick }: TabProps<TKey>) => {
  const { key, disabled, label } = tab;
  return (
    <li className="nav-item" onClick={() => !disabled && onClick(key)}>
      <a
        className={classNames("nav-link", {
          active: isSelected,
          disabled: disabled === true,
        })}
      >
        {label}
      </a>
    </li>
  );
};
