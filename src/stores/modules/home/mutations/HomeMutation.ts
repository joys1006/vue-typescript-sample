import HomeMutationImpl from '@/stores/modules/home/mutations/HomeMutationImpl';
import HomeType from '@/stores/modules/home/types/HomeType';
import HomeState from '@/stores/modules/home/states/HomeState';
import MockListResponse from '@/types/mock/MockListResponse';

class HomeMutation implements HomeMutationImpl {
  [HomeType.SET_MOCK_LIST] = (state: HomeState, data: MockListResponse[]): void => {
    console.log(data);
    state.mockList = data;
  };
}

export default HomeMutation;
