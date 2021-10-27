import HomeType from '@/stores/modules/home/types/HomeType';
import MockListResponse from '@/types/mock/MockListResponse';

interface HomeMutationInterface {
  [HomeType.SET_MOCK_LIST](data: MockListResponse[]): void;
}

export default HomeMutationInterface;
