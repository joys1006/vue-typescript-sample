import { Modify } from '@/types/common/common';
import HomeActionInterface from '@/stores/modules/home/actions/HomeActionInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import { Commit } from 'vuex';
import MockListRequest from '@/types/mock/MockListRequest';
import MockListResponse from '@/types/mock/MockListResponse';
import TemplateActionInterface from '@/stores/modules/template/actions/TemplateActionInterface';

type TemplateActionImpl = Modify<TemplateActionInterface, {}>;

export default TemplateActionImpl;
