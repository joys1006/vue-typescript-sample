import MockListResponse from '@/types/mock/MockListResponse';
import { RootState } from '@/types/common/common';

export default class HomeState implements RootState {
  mockList: MockListResponse[] = [];
}
