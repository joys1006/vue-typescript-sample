import MockListResponse from '@/types/mock/MockListResponse';
import { RootState } from '@/types/common';

export default class HomeState implements RootState {
  mockList: MockListResponse[] = [];
}
