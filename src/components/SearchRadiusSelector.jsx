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
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
        <Option value={25}>25</Option>
        <Option value={50}>50</Option>
        <Option value={100}>100</Option>
      </Select>
    </div>
  )
}
