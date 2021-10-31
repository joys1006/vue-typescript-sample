import HomeMutationImpl from '@/stores/modules/home/mutations/HomeMutationImpl';
import HomeType from '@/stores/modules/home/types/HomeType';
import HomeState from '@/stores/modules/home/states/HomeState';
import MockResponse from '@/types/mock/MockResponse';

class HomeMutation implements HomeMutationImpl {
  [HomeType.SET_MOCK_LIST] = (state: HomeState, data: MockResponse[]): void => {
    state.mockList = data;
  };
}

export default HomeMutation;
