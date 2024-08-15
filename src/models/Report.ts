import { ReportModel } from "../interfaces/ReportModel";
import { ReportMetaModel } from "../interfaces/ReportMetaModel";

class Report{
    public data: any[];
    public draw: number;
    public error: string;
    public meta : ReportMetaModel;
    public recordsTotal: number;
    public recordsFiltered: number;
    public singleRecord: any[];

    constructor(report: ReportModel){
        this.data = report.data || [];
        this.draw = report.draw || 0;
        this.error = report.error || '';
        this.meta = report.meta;
        this.recordsTotal = report.recordsTotal || 0;
        this.recordsFiltered = report.recordsFiltered || 0;
        this.singleRecord = report.singleRecord || [];
    }

    validate(): boolean{
        if(this.draw < 0 || this.recordsTotal < 0 || this.recordsFiltered < 0){
            return false;
        }
        return true;
    }
}

export default Report;