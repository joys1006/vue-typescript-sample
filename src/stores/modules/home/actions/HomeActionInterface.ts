import HomeType from '@/stores/modules/home/types/HomeType';
import MockListRequest from '@/types/mock/MockListRequest';
import MockListResponse from '@/types/mock/MockListResponse';

interface HomeActionInterface {
  [HomeType.GET_MOCK_LIST](payload: MockListRequest): Promise<MockListResponse[]>;
}

export default HomeActionInterface;
