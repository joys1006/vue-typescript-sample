import { Modify } from '@/types/common';
import HomeActionInterface from '@/stores/modules/home/actions/HomeActionInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import { Commit } from 'vuex';
import MockListRequest from '@/types/mock/MockListRequest';
import MockResponse from '@/types/mock/MockResponse';

type HomeActionImpl = Modify<
  HomeActionInterface,
  {
    [HomeType.GET_MOCK_LIST]({ commit }: { commit: Commit }, payload: MockListRequest): Promise<MockResponse[]>;
  }
>;

export default HomeActionImpl;
