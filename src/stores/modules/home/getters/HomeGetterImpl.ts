import { Modify } from '@/types/common';
import HomeGetterInterface from '@/stores/modules/home/getters/HomeGetterInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import MockResponse from '@/types/mock/MockResponse';
import HomeState from '@/stores/modules/home/states/HomeState';

type HomeGetterImpl = Modify<
  HomeGetterInterface,
  {
    [HomeType.GET_MOCK_LIST](state: HomeState): MockResponse[];
  }
>;

export default HomeGetterImpl;
