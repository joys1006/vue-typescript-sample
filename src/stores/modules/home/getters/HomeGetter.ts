import HomeGetterImpl from '@/stores/modules/home/getters/HomeGetterImpl';
import HomeType from '@/stores/modules/home/types/HomeType';
import HomeState from '@/stores/modules/home/states/HomeState';
import MockResponse from '@/types/mock/MockResponse';

class HomeGetter implements HomeGetterImpl {
  [HomeType.GET_MOCK_LIST] = (state: HomeState): MockResponse[] => {
    return state.mockList;
  };
}

export default HomeGetter;
