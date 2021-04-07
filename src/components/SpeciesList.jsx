import { List, Divider } from 'antd';

export function SpeciesList(props) {
  return (
    <div className="species-list">
      <Divider
        orientation="left">
        {`${props.speciesList.length} ${props.iconicTaxa} Species`}
      </Divider>
      <List
        // header={<div>{props.iconicTaxa}</div>}
        // bordered
        dataSource={props.speciesList}
        renderItem={item => (
          <List.Item>{item}</List.Item>
        )}
      />
      {/* <Divider orientation="left">Small Size</Divider> */}
    </div>
  );
}
