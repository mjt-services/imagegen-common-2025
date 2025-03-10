import type { ImageResponse, ImageToImageRequest, TextToImageRequest } from "./3rd-party/Automatic1111Types";
export type ImagegenConnectionMap = {
    "imagegen.txt2img": {
        request: {
            options?: Partial<{}>;
            body: TextToImageRequest;
        };
        response: ImageResponse;
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
        response: ImageResponse;
        headers: {
            url?: string;
            authToken?: string;
        };
    };
};
