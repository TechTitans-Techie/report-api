import {Menu} from './Menu';
import {MenuTitle} from './MenuTitle';

export interface ReportMetaModel{
    columns: any[];
    debug: Object;
    export: Object;
    filter: any[];
    groupBy: any[];
    groupBySelected: any[];
    groupableParameterName: string;
    legend: string;
    menu: Menu[];
    menuTitle: MenuTitle;
    paramsSelected: Object;
}