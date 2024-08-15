import axios from "axios";
import {ReportModel} from "../interfaces/ReportModel";
import Report from "../models/Report";


const apiClient = axios.create({
    baseURL: "mainURL",
    headers: {
        "Content-Type": "application/json"
    }
});

export const fetchData = async(): Promise<Report> =>{
    try{
        const response = await apiClient.get<ReportModel>("/report");
        const reportInstance = new Report(response.data);
        if(!reportInstance.validate){
            throw new Error("Validation failed at the Error report");
        }
        return reportInstance;
    }
    catch(error){
        throw new Error("Failed to fetch report data");
    }
   
}

    
