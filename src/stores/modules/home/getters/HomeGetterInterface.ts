import HomeType from '@/stores/modules/home/types/HomeType';
import MockResponse from '@/types/mock/MockResponse';

interface HomeGetterInterface {
  [HomeType.GET_MOCK_LIST]: MockResponse[];
}

export default HomeGetterInterface;
