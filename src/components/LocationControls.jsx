import { Button, Select } from 'antd';

const { Option } = Select;

export function LocationControls(props) {
  return (
    <div className="location-controls">
      <Select
        placeholder="Select location"
        value={props.locationName}
        allowClear={true}
        style={{ width: 200 }}
        onChange={props.handleSelectLocation}
      >
        <Option value="34.4377, -101.0599">Caprock Canyons</Option>
        <Option value="30.0922, -97.4169">Earth Native</Option>
        <Option value="26.2290,-97.3473">Laguna Atascosa</Option>
        <Option value="31.6191, -102.8119">Monahans Sandhills</Option>
      </Select>
      <h3>OR</h3>
      <Button
        className="location-button"
        type="default"
        style={{ width: 200 }}
        onClick={props.handleLocationButtonClick}
      >
      Use my current location
      </Button>
    </div>
  )
}
