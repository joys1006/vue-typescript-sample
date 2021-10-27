import { Modify } from '@/types/common/common';
import HomeGetterInterface from '@/stores/modules/home/getters/HomeGetterInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import MockListResponse from '@/types/mock/MockListResponse';
import HomeState from '@/stores/modules/home/states/HomeState';

type HomeGetterImpl = Modify<
  HomeGetterInterface,
  {
    [HomeType.GET_MOCK_LIST](state: HomeState): MockListResponse[];
  }
>;

export default HomeGetterImpl;
