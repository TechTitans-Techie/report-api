import { ReportMetaModel } from "./ReportMetaModel"

export interface ReportModel{
    data: any[],
    draw: number,
    error: string,
    meta: ReportMetaModel,
    recordsTotal: number,
    recordsFiltered: number,
    singleRecord: any[]
}