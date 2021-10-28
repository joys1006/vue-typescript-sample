import TemplateType from '@/stores/modules/template/types/TemplateType';

interface TemplateMutationInterface {
  [TemplateType.SET_COLLAPSED_DATA](payload: boolean): void;
}

export default TemplateMutationInterface;
