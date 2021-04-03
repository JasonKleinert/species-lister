import { List, Divider } from 'antd';

export function SpeciesList(props) {
  return (
    <div className='species-list'>
      <Divider orientation="left">{props.iconicTaxa}</Divider>
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