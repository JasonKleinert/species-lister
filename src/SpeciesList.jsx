import { List, Divider } from 'antd';

export function SpeciesList(props) {
  return (
    <div className='species-list'>
      <Divider orientation="left">Mammals</Divider>
      <List
        // header={<div>Header</div>}
        bordered
        dataSource={props.speciesList}
        renderItem={item => (
          <List.Item>{item}</List.Item>
        )}
      />
      {/* <Divider orientation="left">Small Size</Divider> */}
    </div>
  );
}