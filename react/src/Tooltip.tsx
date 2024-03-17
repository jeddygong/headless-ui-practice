import * as Tooltip from '@radix-ui/react-tooltip';
import { InfoCircledIcon } from '@radix-ui/react-icons';

const TooltipDemo = () => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0}>
        <Tooltip.Trigger asChild>
          <button className="text-violet11 shadow-blackA4 hover:bg-violet3 inline-flex h-[35px] w-[35px] items-center justify-center rounded-full bg-white outline-none hover:shadow-[0_2px_10px]">
            <InfoCircledIcon />
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-[#000] text-white p-2 rounded-md text-xs"
            sideOffset={5}>
            这是一段鼠标悬浮后的解释说明文案
            <Tooltip.Arrow className="text-[#000]" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

export default TooltipDemo;
