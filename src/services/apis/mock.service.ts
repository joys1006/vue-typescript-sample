import MockListResponse from '@/types/mock/MockListResponse';
import MockListRequest from '@/types/mock/MockListRequest';
import moment from 'moment';

class MockService {
  public getMockList(payload: MockListRequest): Promise<MockListResponse[]> {
    return new Promise((resolve, reject) => {
      const data: MockListResponse[] = [];
      const startSize = payload.current > 1 ? payload.current * payload.size - 9 : payload.current;
      const length = payload.current * payload.size;

      for (let i = startSize; i <= length; i++) {
        const mock: MockListResponse = new MockListResponse();

        mock.no = i;
        mock.title = `목 데이터 테스트${i}`;
        mock.content = `테스트${i}입니다.`;
        mock.writer = '홍길동';
        mock.createdAt = moment(new Date()).format('YYYY-MM-DD');
        mock.updatedAt = moment(new Date()).format('YYYY-MM-DD');

        data.push(mock);
      }
      setTimeout(() => {
        resolve(data);
        reject(new Error('request is failed'));
      }, 2000);
    });
  }
}

export default new MockService();
