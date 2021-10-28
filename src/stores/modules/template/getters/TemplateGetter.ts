import TemplateType from '@/stores/modules/template/types/TemplateType';
import TemplateGetterImpl from '@/stores/modules/template/getters/TemplateGetterImpl';
import TemplateState from '@/stores/modules/template/states/TemplateState';

class TemplateGetter implements TemplateGetterImpl {
  [TemplateType.GET_COLLAPSED_DATA] = (state: TemplateState): boolean => {
    return state.collapsed;
  };
}

export default TemplateGetter;
