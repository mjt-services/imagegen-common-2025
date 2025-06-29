import { components } from "./3rd-party/Automatic1111-openapi-types";
import type { ImageToImageRequest, LoraEntry, ModelEntry, TextToImageRequest } from "./3rd-party/Automatic1111Types";
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
    "imagegen.setOptions": {
        request: {
            options?: Partial<{}>;
            body: Partial<components["schemas"]["Options"]>;
        };
        response: unknown;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getOptions": {
        request: {
            options?: Partial<{}>;
        };
        response: components["schemas"]["Options"];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getSchedulers": {
        request: {
            options?: Partial<{}>;
        };
        response: components["schemas"]["SchedulerItem"];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getSamplers": {
        request: {
            options?: Partial<{}>;
        };
        response: components["schemas"]["SamplerItem"];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getModels": {
        request: {
            options?: Partial<{}>;
        };
        response: ModelEntry;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getModules": {
        request: {
            options?: Partial<{}>;
        };
        response: components["schemas"]["SDModuleItem"];
        headers: {
            url?: string;
            authToken?: string;
        };
    };
    "imagegen.getLoras": {
        request: {
            options?: Partial<{}>;
        };
        response: LoraEntry;
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
