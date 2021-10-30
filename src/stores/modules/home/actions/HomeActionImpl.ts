import { Modify } from '@/types/common';
import HomeActionInterface from '@/stores/modules/home/actions/HomeActionInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import { Commit } from 'vuex';
import MockListRequest from '@/types/mock/MockListRequest';
import MockListResponse from '@/types/mock/MockListResponse';

type HomeActionImpl = Modify<
  HomeActionInterface,
  {
    [HomeType.GET_MOCK_LIST]({ commit }: { commit: Commit }, payload: MockListRequest): Promise<MockListResponse[]>;
  }
>;

export default HomeActionImpl;
