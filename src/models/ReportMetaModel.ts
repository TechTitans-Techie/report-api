import { ReportMetaModel } from '../interfaces/ReportMetaModel';
class ReportMeta {
    private columns: any[];
    private debug: Record<string, any>;
    private export: Record<string, any>;
    private filter: any[];
    private groupBy: any[];
    private groupBySelected: any[];
    private groupableParameterName: string;
    private legend: string;
    private menu: any[];
    private menuTitle: any;
    private paramsSelected: Record<string, any>;
    constructor(meta: ReportMetaModel) {
        this.columns = meta.columns || [];
        this.debug = meta.debug || {};
        this.export = meta.export || {};
        this.filter = meta.filter || [];
        this.groupBy = meta.groupBy || [];
        this.groupBySelected = meta.groupBySelected || [];
        this.groupableParameterName = meta.groupableParameterName || '';
        this.legend = meta.legend || '';
        this.menu = meta.menu || [];
        this.menuTitle = meta.menuTitle || {};
        this.paramsSelected = meta.paramsSelected || {};
    }
    validate(): boolean {
    //  Add validation logic here
    return true;
    }
}
export default ReportMeta;