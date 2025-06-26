import type { GetLorasResponse, ImageToImageRequest, ModelListResponse, TextToImageRequest } from "./3rd-party/Automatic1111Types";
export type BinaryImageResponse = {
    images: ArrayBuffer[];
    parameters: Record<string, any>;
    info: string;
    progress?: number;
    etaSeconds?: number;
    aborted?: boolean;
    finalized?: boolean;
};
export type ImagegenConnectionMap = {
    "imagegen.getModels": {
        request: {
            options?: Partial<{}>;
        };
        response: ModelListResponse;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getModules": {
        request: {
            options?: Partial<{}>;
        };
        response: GetLorasResponse;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getLoras": {
        request: {
            options?: Partial<{}>;
        };
        response: GetLorasResponse;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.txt2img": {
        request: {
            options?: Partial<{}>;
            body: TextToImageRequest;
        };
        response: BinaryImageResponse;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.img2img": {
        request: {
            options?: Partial<{}>;
            body: ImageToImageRequest;
        };
        response: BinaryImageResponse;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
