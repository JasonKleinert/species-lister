import { Select } from 'antd';

const { Option } = Select;

export function SearchRadiusSelector(props) {
  return (
    <div className="search-radius-selector">
      <Select
        placeholder="Select search radius"
        value={props.radius}
        allowClear={true}
        style={{ width: 200 }}
        onChange={props.handleSelectSearchRadius}
      >
        <Option value={5}>5 km</Option>
        <Option value={10}>10 km</Option>
        <Option value={25}>25 km</Option>
        <Option value={50}>50 km</Option>
        <Option value={100}>100 km</Option>
      </Select>
    </div>
  )
}
