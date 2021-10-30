import { Modify } from '@/types/common';
import TemplateType from '@/stores/modules/template/types/TemplateType';
import TemplateState from '@/stores/modules/template/states/TemplateState';
import TemplateMutationInterface from './TemplateMutationInterface';

type TemplateMutationImpl = Modify<
  TemplateMutationInterface,
  {
    [TemplateType.SET_COLLAPSED_DATA](state: TemplateState, payload: boolean): void;
  }
>;

export default TemplateMutationImpl;
