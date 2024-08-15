import {ReportModel} from "../interfaces/ReportModel";
import {ReportMetaModel} from "../interfaces/ReportMetaModel";
import { Menu } from "../interfaces/Menu";
import { MenuTitle } from "../interfaces/MenuTitle";

const mockMenu: Menu = {
    id: 1,
    category: "drilldown",
    originalData: {"type":"Nav-bar"},
    name: "application menu",
    createdTimestamp: new Date(),
};

const mockMenuTitle: MenuTitle = {
    data: {0:"home",1:"status"},
    template: "new_menu_title",
};

const mockMeta: ReportMetaModel = {
    columns: ["id","name","status"],
    debug: {enabled: true},
    export: {format : "csv"},
    filter: [],
    groupBy: [],
    groupBySelected: ["status"],
    groupableParameterName: "status",
    legend: "user status legend",
    menu: [mockMenu],
    menuTitle: mockMenuTitle,
    paramsSelected: {status: "active"},
};

export const mockReportModel: ReportModel = {
    data: [
        {id: 1, name:"john", status: "active"},
        {id:2, name:"smith", status: "inactive"}
    ],
    draw: 1,
    error: "",
    meta: mockMeta,
    recordsTotal: 2,
    recordsFiltered: 2,
    singleRecord: [{id: 1, name:"john", status: "active"}]
}

//Mock API Call
//export const getMockData = async():Promise<ReportModel> => {
//    return new Promise((resolve) => {
 //       setTimeout(() => {
//            resolve(mockReportModel);
//        }, 1000); // 1-second delay
//    });
//};
