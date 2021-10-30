import { RootState, StoreModule } from '@/types/common';
import HomeState from '@/stores/modules/home/states/HomeState';
import HomeMutation from '@/stores/modules/home/mutations/HomeMutation';
import HomeGetter from '@/stores/modules/home/getters/HomeGetter';
import HomeAction from '@/stores/modules/home/actions/HomeAction';

const HomeStoreModule: StoreModule<HomeState, RootState> = {
  actions: { ...new HomeAction() },
  getters: { ...new HomeGetter() },
  mutations: { ...new HomeMutation() },
  state: new HomeState()
};

export default HomeStoreModule;
