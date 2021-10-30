import { Component, Vue } from 'vue-property-decorator';
import { Getter, Mutation } from 'vuex-class';
import TemplateType from '@/stores/modules/template/types/TemplateType';
import TemplateGetterInterface from '@/stores/modules/template/getters/TemplateGetterInterface';
import TemplateMutationInterface from '@/stores/modules/template/mutations/TemplateMutationInterface';

@Component({
  name: 'AppAside'
})
export default class AppAside extends Vue {
  @Getter(TemplateType.GET_COLLAPSED_DATA)
  protected readonly collapsed!: TemplateGetterInterface[TemplateType.GET_COLLAPSED_DATA];

  @Mutation(TemplateType.SET_COLLAPSED_DATA)
  protected setCollapsed!: TemplateMutationInterface[TemplateType.SET_COLLAPSED_DATA];
}
