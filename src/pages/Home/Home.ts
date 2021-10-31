import Counter from '@/components/Counter/Counter.vue';
import { Component, Vue } from 'vue-property-decorator';
import { TableListColumn, TableListOptions } from '@/types/ui/table';
import { Action, Getter } from 'vuex-class';
import HomeType from '@/stores/modules/home/types/HomeType';
import HomeActionInterface from '@/stores/modules/home/actions/HomeActionInterface';
import HomeGetterInterface from '@/stores/modules/home/getters/HomeGetterInterface';
import MockListRequest from '@/types/mock/MockListRequest';
import { Pagination } from 'ant-design-vue';

@Component({
  name: 'Home',
  components: {
    Counter
  }
})
export default class Home extends Vue {
  @Action(HomeType.GET_MOCK_LIST)
  private getMockList!: HomeActionInterface[HomeType.GET_MOCK_LIST];

  @Getter(HomeType.GET_MOCK_LIST)
  private readonly mockList!: HomeGetterInterface[HomeType.GET_MOCK_LIST];

  protected tableColumns: TableListColumn[] = [
    {
      key: 'no',
      title: '번호',
      width: '100px',
      align: 'center',
      dataIndex: 'no',
      scopedSlots: { customRender: 'no' }
    },
    {
      key: 'title',
      title: '제목',
      width: '100px',
      align: 'center',
      dataIndex: 'title',
      scopedSlots: { customRender: 'title' }
    },
    {
      key: 'writer',
      title: '작성자',
      width: '100px',
      align: 'center',
      dataIndex: 'writer',
      scopedSlots: { customRender: 'writer' }
    },
    {
      key: 'createdAt',
      title: '등록일',
      width: '100px',
      align: 'center',
      dataIndex: 'createdAt',
      scopedSlots: { customRender: 'createdAt' }
    }
  ];

  protected tableOption: TableListOptions = {
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
      total: 100
    },
    searchText: '',
    emptyText: '데이터가 없습니다.'
  };

  created(): void {
    this.init();
  }

  private init(): void {
    this.getInitData();
  }

  private getInitData(): void {
    const payload: MockListRequest = new MockListRequest();

    payload.current = this.tableOption.pagination.current;
    payload.size = this.tableOption.pagination.pageSize;

    this.tableOption.loading = true;

    this.getMockList(payload)
      .catch((error: Error) => console.log(error))
      .finally(() => {
        this.tableOption.loading = false;
      });
  }

  protected paginationChangedEventHandler(value: Pagination): void {
    this.tableOption.pagination.current = Number(value.current);
    this.getInitData();
  }

  public numberEventLisner(number: number): void {
    console.log(number);
  }
}
