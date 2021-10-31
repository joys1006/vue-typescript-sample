import HomeActionImpl from '@/stores/modules/home/actions/HomeActionImpl';
import { Commit } from 'vuex';
import MockListRequest from '@/types/mock/MockListRequest';
import MockResponse from '@/types/mock/MockResponse';
import HomeType from '@/stores/modules/home/types/HomeType';
import MockService from '@/services/apis/mock.service';

class HomeAction implements HomeActionImpl {
  [HomeType.GET_MOCK_LIST] = ({ commit }: { commit: Commit }, payload: MockListRequest): Promise<MockResponse[]> => {
    return MockService.getMockList(payload).then((response) => {
      commit(HomeType.SET_MOCK_LIST, response);
      return response;
    });
  };
}

export default HomeAction;
