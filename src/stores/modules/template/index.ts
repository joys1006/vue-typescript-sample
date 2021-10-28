import { RootState, StoreModule } from '@/types/common/common';
import TemplateState from '@/stores/modules/template/states/TemplateState';
import TemplateMutation from '@/stores/modules/template/mutations/TemplateMutation';
import TemplateGetter from '@/stores/modules/template/getters/TemplateGetter';
import TemplateAction from '@/stores/modules/template/actions/TemplateAction';

const TemplateStoreModule: StoreModule<TemplateState, RootState> = {
  actions: { ...new TemplateAction() },
  getters: { ...new TemplateGetter() },
  mutations: { ...new TemplateMutation() },
  state: new TemplateState()
};

export default TemplateStoreModule;
