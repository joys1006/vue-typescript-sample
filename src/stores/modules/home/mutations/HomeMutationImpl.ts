import { Modify } from '@/types/common';
import HomeMutationInterface from '@/stores/modules/home/mutations/HomeMutationInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import MockListResponse from '@/types/mock/MockListResponse';
import HomeState from '@/stores/modules/home/states/HomeState';

type HomeMutationImpl = Modify<
  HomeMutationInterface,
  {
    [HomeType.SET_MOCK_LIST](state: HomeState, data: MockListResponse[]): void;
  }
>;

export default HomeMutationImpl;
