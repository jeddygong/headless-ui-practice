import * as Tooltip from '@radix-ui/react-tooltip';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Radium from 'radium';

const TooltipDemo = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>
          <button style={IconButtonStyles}>
            <InfoCircledIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            style={TooltipContentStyles}
            sideOffset={5}>
            这是一段鼠标悬浮后的解释说明文案
            <Tooltip.Arrow style={TooltipArrowStyles}/>
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

const IconButtonStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 35,
  height: 35,
  borderRadius: '50%',
  outline: 'none',
  '&:hover': {
    boxShadow: '0 2px 10px #d9d9d9',
  },
}

const TooltipContentStyles = {
  backgroundColor: '#000',
  color: 'white',
  padding: '2px 6px',
  borderRadius: '4px',
  fontSize: '13px',
}

const TooltipArrowStyles = {
  color: '#000',
}

export default Radium(TooltipDemo);
