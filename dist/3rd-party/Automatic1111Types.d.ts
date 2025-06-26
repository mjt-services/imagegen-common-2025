export type UUID = string;
export type URL = string;
export type Base64String = string;
export type Timestamp = string;
export type TextToImageRequest = {
    prompt: string;
    negative_prompt?: string;
    styles?: string[];
    seed?: number;
    subseed?: number;
    subseed_strength?: number;
    seed_resize_from_h?: number;
    seed_resize_from_w?: number;
    sampler_name?: string;
    scheduler?: string;
    batch_size?: number;
    n_iter?: number;
    steps?: number;
    cfg_scale?: number;
    width?: number;
    height?: number;
    restore_faces?: boolean;
    tiling?: boolean;
    do_not_save_samples?: boolean;
    do_not_save_grid?: boolean;
    eta?: number;
    denoising_strength?: number;
    s_min_uncond?: number;
    s_churn?: number;
    s_tmax?: number;
    s_tmin?: number;
    s_noise?: number;
    override_settings?: Record<string, any>;
    override_settings_restore_afterwards?: boolean;
    refiner_checkpoint?: string;
    refiner_switch_at?: number;
    disable_extra_networks?: boolean;
    firstpass_image?: Base64String;
    comments?: Record<string, any>;
    enable_hr?: boolean;
    firstphase_width?: number;
    firstphase_height?: number;
    hr_scale?: number;
    hr_upscaler?: string;
    hr_second_pass_steps?: number;
    hr_resize_x?: number;
    hr_resize_y?: number;
    hr_checkpoint_name?: string;
    hr_sampler_name?: string;
    hr_scheduler?: string;
    hr_prompt?: string;
    hr_negative_prompt?: string;
    force_task_id?: string;
    sampler_index?: string;
    script_name?: string;
    script_args?: any[];
    send_images?: boolean;
    save_images?: boolean;
    alwayson_scripts?: Record<string, any>;
    infotext?: string;
};
export type ImageToImageRequest = {
    init_image: Base64String;
    prompt: string;
    mask?: Base64String;
    width?: number;
    height?: number;
    steps?: number;
    sampler?: string;
    seed?: number;
};
export type ExtrasSingleImageRequest = {
    image: Base64String;
    resize_mode?: 0 | 1;
    upscaling_resize?: number;
    upscaling_resize_w?: number;
    upscaling_resize_h?: number;
    upscaling_crop?: boolean;
    gfpgan_visibility?: number;
    codeformer_visibility?: number;
    codeformer_weight?: number;
    upscaler_1?: string;
    upscaler_2?: string;
    extras_upscaler_2_visibility?: number;
    upscale_first?: boolean;
};
export type ProgressRequest = {};
export type ProgressResponse = {
    progress: number;
    eta_relative: number;
    state: Record<string, any>;
    current_image?: Base64String;
    textinfo?: string;
};
export type ErrorDetail = {
    loc: (string | number)[];
    msg: string;
    type: string;
};
export type ErrorResponse = {
    detail: ErrorDetail[];
};
export type ImageResponse = {
    images: Base64String[];
    parameters: Record<string, any>;
    info: string;
};
export type APIResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};
/**
 * Metadata for a LoRA model as returned by the API.
 */
export interface LoraMetadata {
    [key: string]: any;
}
/**
 * Representation of a single LoRA model entry.
 */
export interface LoraEntry {
    /** Filename or identifier, e.g. "CoolStyle-Lora.safetensors" */
    name: string;
    /** Alias used in prompts, e.g. "coolstyle" */
    alias?: string;
    /** Filesystem path to the LoRA model file */
    path: string;
    /** Arbitrary metadata object with properties describing the model */
    metadata: LoraMetadata;
}
export type GetModulesResponse = {
    model_name: string;
    filename: string;
}[];
/**
 * Represents a single model checkpoint or LoRA model entry.
 */
export interface ModelEntry {
    /** Human-readable title of the model, shown in UI dropdowns */
    title: string;
    /** Internal model identifier or name used by the backend */
    model_name: string;
    /** Short hash (typically MD5 or similar) for quick reference */
    hash: string;
    /** Full SHA-256 checksum of the model file */
    sha256: string;
    /** Filename of the model, including extension (e.g., .safetensors, .ckpt) */
    filename: string;
    /** Path to the configuration file or a config identifier (e.g., "v1-inference.yaml") */
    config: string;
}
/**
 * Response format for APIs returning a list of models.
 */
export type ModelListResponse = ModelEntry[];
