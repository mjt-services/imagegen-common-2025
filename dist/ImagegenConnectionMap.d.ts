import type { ImageToImageRequest, TextToImageRequest } from "./3rd-party/Automatic1111Types";
export type BinaryImageResponse = {
    images: ArrayBuffer[];
    parameters: Record<string, any>;
    info: string;
};
export type ImagegenConnectionMap = {
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
