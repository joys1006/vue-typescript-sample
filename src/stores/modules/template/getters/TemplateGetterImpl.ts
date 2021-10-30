import { Modify } from '@/types/common';
import TemplateType from '@/stores/modules/template/types/TemplateType';
import TemplateState from '@/stores/modules/template/states/TemplateState';
import TemplateGetterInterface from '@/stores/modules/template/getters/TemplateGetterInterface';

type TemplateGetterImpl = Modify<
  TemplateGetterInterface,
  {
    [TemplateType.GET_COLLAPSED_DATA](state: TemplateState): boolean;
  }
>;

export default TemplateGetterImpl;
