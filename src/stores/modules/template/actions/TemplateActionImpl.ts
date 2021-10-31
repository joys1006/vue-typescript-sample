import { Modify } from '@/types/common';
import HomeActionInterface from '@/stores/modules/home/actions/HomeActionInterface';
import HomeType from '@/stores/modules/home/types/HomeType';
import { Commit } from 'vuex';
import MockListRequest from '@/types/mock/MockListRequest';
import MockResponse from '@/types/mock/MockResponse';
import TemplateActionInterface from '@/stores/modules/template/actions/TemplateActionInterface';

type TemplateActionImpl = Modify<TemplateActionInterface, {}>;

export default TemplateActionImpl;
