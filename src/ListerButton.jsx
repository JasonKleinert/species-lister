import { Button } from 'antd';

export function ListerButton(props) {
  return (
    <div className='lister-button'>
      <Button
        type={"primary"}
        size={"large"}
        onClick={props.handleListButtonClick}
      >
        Create Species List
      </Button>
      <Button
        type={"secondary"}
        size={"large"}
        onClick={props.handleClearListButtonClick}
      >
        Clear List
      </Button>
    </div>
  );
}