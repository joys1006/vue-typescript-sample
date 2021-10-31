import HomeType from '@/stores/modules/home/types/HomeType';
import MockListRequest from '@/types/mock/MockListRequest';
import MockResponse from '@/types/mock/MockResponse';

interface HomeActionInterface {
  [HomeType.GET_MOCK_LIST](payload: MockListRequest): Promise<MockResponse[]>;
}

export default HomeActionInterface;
