import { Button } from 'antd';

export function ListerButton(props) {
  return (
    <div className="lister-button">
      <Button
        type="primary"
        size="large"
        onClick={props.handleListerButtonClick}
      >
        List Species
      </Button>
      <Button
        type="default"
        size="large"
        onClick={props.handleClearListerButtonClick}
      >
        Start Over
      </Button>
    </div>
  );
}
