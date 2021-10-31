import { expect } from 'chai';
import store from '@/stores';
import TemplateType from '@/stores/modules/template/types/TemplateType';
import TemplateState from '@/stores/modules/template/states/TemplateState';
import TemplateGetter from '@/stores/modules/template/getters/TemplateGetter';

const state: TemplateState = {
  collapsed: true
};

// Store Unit Test
describe('TemplateType', () => {
  it('GET_COLLAPSED_DATA GETTER', () => {
    const templateGetter = new TemplateGetter();
    const collapsedGetter = templateGetter[TemplateType.GET_COLLAPSED_DATA](state);

    expect(collapsedGetter).to.eq(true);
  });
  it('SET_COLLAPSED_DATA MUTATION', () => {
    // Mutation
    store.commit(TemplateType.SET_COLLAPSED_DATA, false);

    const mockListGetter = store.getters[TemplateType.GET_COLLAPSED_DATA];

    expect(mockListGetter).to.eq(false);
  });
});
