import { expect } from 'chai';
import HomeGetter from '@/stores/modules/home/getters/HomeGetter';
import HomeType from '@/stores/modules/home/types/HomeType';
import HomeState from '@/stores/modules/home/states/HomeState';
import MockList from '../../mock/MockList';
import store from '@/stores';
import MockListRequest from '@/types/mock/MockListRequest';

const state: HomeState = {
  mockList: MockList
};

// Store Unit Test
describe('HomeType', () => {
  it('GET_MOCK_LIST ACTION', async function () {
    const payload: MockListRequest = new MockListRequest();

    payload.current = 1;
    payload.size = 1;

    await store.dispatch(HomeType.GET_MOCK_LIST, payload);

    const mockListGetter = store.getters[HomeType.GET_MOCK_LIST];

    expect(mockListGetter).to.length(1);
    expect(mockListGetter[0].no).to.eq(1);
    expect(mockListGetter[0].title).to.eq(MockList[0].title);
    expect(mockListGetter[0].content).to.eq(MockList[0].content);
    expect(mockListGetter[0].writer).to.eq(MockList[0].writer);
    expect(mockListGetter[0].createdAt).to.eq(MockList[0].createdAt);
    expect(mockListGetter[0].updatedAt).to.eq(MockList[0].updatedAt);
  });
  it('GET_MOCK_LIST GETTER', () => {
    const homeGetter = new HomeGetter();
    const mockListGetter = homeGetter[HomeType.GET_MOCK_LIST](state);

    expect(mockListGetter).to.length(1);
    expect(mockListGetter[0].no).to.eq(1);
    expect(mockListGetter[0].title).to.eq(MockList[0].title);
    expect(mockListGetter[0].content).to.eq(MockList[0].content);
    expect(mockListGetter[0].writer).to.eq(MockList[0].writer);
    expect(mockListGetter[0].createdAt).to.eq(MockList[0].createdAt);
    expect(mockListGetter[0].updatedAt).to.eq(MockList[0].updatedAt);
  });
  it('SET_MOCK_LIST MUTATION', () => {
    // Mutation
    store.commit(HomeType.SET_MOCK_LIST, MockList);

    const mockListGetter = store.getters[HomeType.GET_MOCK_LIST];

    expect(mockListGetter).to.length(1);
    expect(mockListGetter[0].no).to.eq(1);
    expect(mockListGetter[0].title).to.eq(MockList[0].title);
    expect(mockListGetter[0].content).to.eq(MockList[0].content);
    expect(mockListGetter[0].writer).to.eq(MockList[0].writer);
    expect(mockListGetter[0].createdAt).to.eq(MockList[0].createdAt);
    expect(mockListGetter[0].updatedAt).to.eq(MockList[0].updatedAt);
  });
});
