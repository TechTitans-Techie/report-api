import axios from "axios";
import mockAxios from "./__mocks__/axios";
import { mockReportModel } from "../mocks/reportMockApi";
// const MockAdapter = require("axios-mock-adapter");
const fetchData = require("../Router/api");
// const mockReportModel = require("../mocks/reportMockApi");

// Create an instance of axios-mock-adapter
// const mock = new MockAdapter(axios);
const mockedAxios = mockAxios as jest.Mocked<typeof axios>;

describe("fetchReport API with Validation", () => {
  //   let mock;
  //   beforeEach(() => {
  //       mock = new MockAdapter(axios)
  //   })
  // afterEach(() => {
  //   mock.reset();
  // });

  test("should fetch and validate report data successfully", async () => {
    // Mock the API response
    //mock.onGet("/report").reply(200, mockReportModel);
    mockAxios.get.mockResolvedValueOnce({data: mockReportModel})

    // Call the API
    const reportInstance = await fetchData();

    // Assert the validation and data
    expect(reportInstance.validate()).toBe(true);
    expect(reportInstance.data).toEqual(mockReportModel.data);
    expect(reportInstance.draw).toBe(mockReportModel.draw);
  });

  // test("should throw an error if validation fails", async () => {
  //   // Modify the mock data to fail validation
  //   const invalidMockData = {
  //     ...mockReportModel,
  //     draw: -1, // Invalid value to fail validation
  //   };

  //   // Mock the API response with invalid data
  //   mock.onGet("/report").reply(200, invalidMockData);

  //   try {
  //     await fetchData();
  //   } catch (error) {
  //     expect(error).toEqual(new Error("Validation failed for the report data."));
  //   }
  // });

  // test("should throw an error when API call fails", async () => {
  //   // Mock a failed API response
  //   mock.onGet("/report").reply(500);

  //   try {
  //     await fetchData();
  //   } catch (error) {
  //     expect(error).toEqual(new Error("Failed to fetch or validate report data"));
  //   }
  // });
});