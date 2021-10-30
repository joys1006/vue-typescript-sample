import Vue from 'vue';
import { Dictionary, RootState } from '@/types/common';
import Vuex, { StoreOptions } from 'vuex';
import createLogger from 'vuex/dist/logger';
// Modules
import HomeStoreModule from '@/stores/modules/home';
import TemplateStoreModule from '@/stores/modules/template';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const logger = createLogger({
  collapsed: false, // 로그를 가지는 변이 자동 확장
  filter(mutation) {
    // 변이시 항상 로깅해야 한다면 true 를 반환하십시오.
    // 변이는 { type, payload }의 포맷입니다.
    return mutation.type !== 'aBlacklistedMutation';
  },
  transformer(state: Dictionary<RootState>) {
    // 로깅하기전 상태를 변이 하십시오.
    // 예를 들어 특정 하위 트리만 반환합니다.
    return state.subTree;
  },
  mutationTransformer(mutation) {
    // 변이는 { type, payload }의 포맷으로 기록됩니다.
    // 원하는 포맷으로 변경할 수 있습니다.
    return mutation.type;
  }
});

const store: StoreOptions<RootState> = {
  plugins: debug ? [logger] : [],
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    HomeStoreModule,
    TemplateStoreModule
  }
};

export default new Vuex.Store<RootState>(store);
