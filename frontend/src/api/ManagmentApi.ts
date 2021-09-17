import axiosWithToken from './axios';

export enum Status {
    PASSED = 'passed',
    FAILED = 'failed',
    PROCESSING = 'processing',
    DRAFT = 'draft',
    CANCELED = 'canceled',
}

export enum Sort {
    UPDATED_ASC = 'updatedAt,asc',
    UPDATED_DESC = 'updatedAt,desc',
    CREATED_ASC = 'createdAt,asc',
    CREATED_DESC = 'createdAt,desc',
}

export interface IFilterParams {
    status: Status[];
    dateStart: number;
    dateEnd: number;
    email: string;
    limit: number;
    offset: number;
    sort: Sort[];
}

export interface ITestResponse {
    userId: number;
    userEmail: string;
    id: number;
    createdAt: number;
    updatedAt: number;
    category: {
        id: number;
        description: string;
        descriptionShort: string;
    };
    status: Status;
}

export interface IAllTestsResponse {
    tests: ITestResponse[];
    limit: number;
    offset: number;
    total: number;
}

export const ManagmentApi = {
    getAllTestsByParams(filterParams?: Partial<IFilterParams>): Promise<IAllTestsResponse> {
        return axiosWithToken
            .get<ITestResponse[]>(`${process.env.REACT_APP_API_URL}/management/tests`, {params: filterParams})
            .then((response) => {
                return {
                    tests: response.data,
                    limit: response.headers['x-list-limit'] ?? 0,
                    offset: response.headers['x-list-offset'] ?? 0,
                    total: response.headers['x-list-total'] ?? 0,
                };
            });
    },
};