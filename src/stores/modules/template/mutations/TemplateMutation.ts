import TemplateType from '@/stores/modules/template/types/TemplateType';
import TemplateState from '@/stores/modules/template/states/TemplateState';
import TemplateMutationImpl from '@/stores/modules/template/mutations/TemplateMutationImpl';

class TemplateMutation implements TemplateMutationImpl {
  [TemplateType.SET_COLLAPSED_DATA] = (state: TemplateState, payload: boolean): void => {
    state.collapsed = payload;
  };
}

export default TemplateMutation;
