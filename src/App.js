import { DatePicker,  Cell } from "@arco-design/mobile-react";
import React from "react";
import '@arco-design/mobile-react/esm/style'
import setRootPixel from '@arco-design/mobile-react/tools/flexible';
import '@arco-design/mobile-react/dist/style.css';

function App() {
  setRootPixel(20);
  const [picker1Visible, setPicker1Visible] = React.useState(false);
  const [picker2Visible, setPicker2Visible] = React.useState(false);
  const [picker3Visible, setPicker3Visible] = React.useState(false);
  const [picker1Value, setPicker1Value] = React.useState(new Date("2020-02-29 10:10:08".replace(/-/g, "/")).getTime());
  const [picker2Value, setPicker2Value] = React.useState(new Date("2010-02-28 10:10:08".replace(/-/g, "/")).getTime());
  const [picker3Value, setPicker3Value] = React.useState(new Date().getTime());

  return (
    <React.Fragment>
      <Cell.Group bordered={false}>
        <Cell
          showArrow
          label="Select Date"
          onClick={() => {
            setPicker1Visible(true);
          }}
        />
        <Cell
          showArrow
          label="Time node"
          onClick={() => {
            setPicker2Visible(true);
          }}
        >
          {new Date(picker2Value).toLocaleString("zh-CN", { hour12: false })}
        </Cell>
        <Cell
          showArrow
          label="Time in UTC"
          onClick={() => {
            setPicker3Visible(true);
          }}
        >
          Current Time
        </Cell>
      </Cell.Group>
      <DatePicker
        visible={picker1Visible}
        mode={"time"}
        typeArr={["hour", "minute"]}
        maskClosable
        disabled={false}
        currentTs={picker1Value}
        onHide={() => {
          setPicker1Visible(false);
        }}
        onChange={(timestamp, obj) => {
          console.info("---demo on change index", timestamp);
          setPicker1Value(timestamp);
        }}
      />
      <DatePicker
        visible={picker2Visible}
        typeArr={["year", "month", "date", "hour", "minute"]}
        maskClosable
        disabled={false}
        currentTs={picker2Value}
        onHide={() => {
          setPicker2Visible(false);
        }}
        onChange={(timestamp, obj) => {
          console.info("---demo on change index", timestamp);
          setPicker2Value(timestamp);
        }}
      />
      <DatePicker
        visible={picker3Visible}
        maskClosable
        useUTC
        currentTs={picker3Value}
        onHide={() => {
          setPicker3Visible(false);
        }}
        onChange={(timestamp, obj) => {
          console.info("---demo on change index", timestamp);
          setPicker3Value(timestamp);
        }}
        onClose={() => setPicker3Value(Date.now())}
      />
    </React.Fragment>
  );
}
export default App;
