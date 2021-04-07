import { Select } from 'antd';

const { Option } = Select;

export function NumPagesSelector(props) {
  return (
    <div className="numpages-selector">
      <Select
        placeholder="Select pages"
        value={props.numPages}
        allowClear={true}
        style={{ width: 200 }}
        onChange={props.handleSelectNumPages}
      >
        <Option value={1}>1</Option>
        <Option value={2}>2</Option>
        <Option value={3}>3</Option>
        <Option value={4}>4</Option>
        <Option value={5}>5</Option>
        <Option value={10}>10</Option>
      </Select>
    </div>
  )
}
