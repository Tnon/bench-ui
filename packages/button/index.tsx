import { ExtractPropTypes, PropType } from 'vue';
import { autoInstall } from '../../utils/autoinstall';
type buttonTypes = 'primary' | 'danger' | 'success';
const props = {
  type: {
    type: String as PropType<buttonTypes>,
    default: 'primary',
  },
  round: {
    type: Boolean,
    default: false,
  },
};
export type ButtonProps = Partial<ExtractPropTypes<typeof props>>;
export const bcButton = autoInstall<ButtonProps>({
  props,
  setup(props, { slots }) {
    return () => (
      <button class={`bc-button-${props.type}`}>
        <div>{slots.default && slots.default()}</div>
      </button>
    );
  },
});
