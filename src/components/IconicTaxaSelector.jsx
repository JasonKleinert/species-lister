import { Select } from 'antd';

const { Option } = Select;

export function IconicTaxaSelector(props) {
  return (
    <div className="iconic-taxa-selector">
      <Select
        placeholder="Select iconic taxa"
        value={props.iconicTaxa}
        allowClear={true}
        style={{ width: 200 }}
        onChange={props.handleIconicTaxaChange}
      >
        <Option value="Animalia">Animalia</Option>
        <Option value="Amphibia">Amphibia</Option>
        <Option value="Arachnida">Arachnida</Option>
        <Option value="Aves">Aves</Option>
        <Option value="Chromista">Chromista</Option>
        <Option value="Fungi">Fungi</Option>
        <Option value="Insecta">Insecta</Option>
        <Option value="Mammalia">Mammalia</Option>
        <Option value="Mollusca">Mollusca</Option>
        <Option value="Reptilia">Reptilia</Option>
        <Option value="Plantae">Plantae</Option>
        <Option value="Protozoa">Protozoa</Option>
      </Select>
    </div>
  )
}
