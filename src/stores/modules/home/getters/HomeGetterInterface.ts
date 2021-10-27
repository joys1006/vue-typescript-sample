import HomeType from '@/stores/modules/home/types/HomeType';
import MockListResponse from '@/types/mock/MockListResponse';

interface HomeGetterInterface {
  [HomeType.GET_MOCK_LIST]: MockListResponse[];
}

export default HomeGetterInterface;
