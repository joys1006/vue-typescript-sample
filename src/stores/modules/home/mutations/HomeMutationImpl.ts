import { Modify } from '@/types/common';
import HomeMutationInterface from '@/stores/modules/home/mutations/HomeMutationInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import MockResponse from '@/types/mock/MockResponse';
import HomeState from '@/stores/modules/home/states/HomeState';

type HomeMutationImpl = Modify<
  HomeMutationInterface,
  {
    [HomeType.SET_MOCK_LIST](state: HomeState, data: MockResponse[]): void;
  }
>;

export default HomeMutationImpl;
