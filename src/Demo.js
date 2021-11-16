import {useTabs, withTabs} from "./context/TabsContext";
import {Tabs, Tab} from "./components/Tabs";

const tabs = {
    firstTab: 'Tab 1',
    secondTab: 'Tab 2',
    thirdTab: 'Tab 3'
}
function Demo() {
  const { setCurrentTab } = useTabs();

  return (
    <div className="wrapper">
        <Tabs tabs={tabs} defaultTab={tabs.firstTab} onTabSelect={(tab) => setCurrentTab(tab)} className="custom-tab-container-class">
            <Tab id={tabs.firstTab}>
                Lorem ipsum dolor sit amet.
            </Tab>
            <Tab id={tabs.secondTab}>
                Ad alias dolore eos hic provident, quam quia tempore veritatis voluptatum.
            </Tab>
            <Tab id={tabs.thirdTab}>
               Aspernatur ducimus pariatur quo saepe sed, velit!
            </Tab>
        </Tabs>
    </div>
  );
}

export default withTabs(Demo);
