import {
  defineComponent,
  App,
  ExtractPropTypes,
  Component,
  SetupContext,
  RenderFunction,
  ComponentPropsOptions,
} from 'vue';
interface BComponent<propType> {
  name?: string;
  install?: (vue: App) => void;
  props?: ComponentPropsOptions;
  components?: Record<string, Component>;
  setup?: (
    props: Readonly<ExtractPropTypes<propType>>,
    setupContext: SetupContext,
  ) => RenderFunction | Record<string, any> | any;
  emits?: string[];
  [optionKey: string]: any;
}
export const autoInstall = <propType>(component: BComponent<propType>) => {
  component.install = (vue: App) => {
    vue.component(component.name!, component as Component);
  };
  return defineComponent(component as any);
};
