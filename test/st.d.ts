
import * as ref from 'ref'
import * as ArrayType from 'ref-array'
import * as StructType from 'ref-struct'
import * as util from 'util'

export function allocEnum<T>(): ref.Ref<T>

export declare class StHarvester_ extends ref.Type {
    constructor(data: Partial<StHarvester_>)
}
export declare class StHarvester extends ref.Ref<StHarvester_> {}
export declare class StHarvesterTileMap_ extends ref.Type {
    constructor(data: Partial<StHarvesterTileMap_>)
}
export declare class StHarvesterTileMap extends ref.Ref<StHarvesterTileMap_> {}
export declare class StHarvesterDatabase_ extends ref.Type {
    constructor(data: Partial<StHarvesterDatabase_>)
}
export declare class StHarvesterDatabase extends ref.Ref<StHarvesterDatabase_> {}
export declare class StHarvesterAssetLibrary_ extends ref.Type {
    constructor(data: Partial<StHarvesterAssetLibrary_>)
}
export declare class StHarvesterAssetLibrary extends ref.Ref<StHarvesterAssetLibrary_> {}
export declare class StHarvesterJob_ extends ref.Type {
    constructor(data: Partial<StHarvesterJob_>)
}
export declare class StHarvesterJob extends ref.Ref<StHarvesterJob_> {}
export declare class StHarvesterMask_ extends ref.Type {
    constructor(data: Partial<StHarvesterMask_>)
}
export declare class StHarvesterMask extends ref.Ref<StHarvesterMask_> {}
export declare class StHarvesterTextures_ extends ref.Type {
    constructor(data: Partial<StHarvesterTextures_>)
}
export declare class StHarvesterTextures extends ref.Ref<StHarvesterTextures_> {}
export declare class StHarvesterGeneratedPresets_ extends ref.Type {
    constructor(data: Partial<StHarvesterGeneratedPresets_>)
}
export declare class StHarvesterGeneratedPresets extends ref.Ref<StHarvesterGeneratedPresets_> {}
export declare class StHarvesterJobList_ extends ref.Type {
    constructor(data: Partial<StHarvesterJobList_>)
}
export declare class StHarvesterJobList extends ref.Ref<StHarvesterJobList_> {}
export declare class uint8_t extends ref.types.uchar {}
export declare class st_harvester_coverage_type_t extends uint8_t {}
export declare enum st_harvester_diagnostic_callback_type_e {
    st_harvester_diagnostic_callback_type_on_job_start,
    st_harvester_diagnostic_callback_type_on_job_finish,
    st_harvester_diagnostic_callback_type_on_progress_increment,
    st_harvester_diagnostic_callback_type_on_pipeline_stop,
    st_harvester_diagnostic_callback_type_on_warning_message,
}
export declare class st_harvester_diagnostic_callback_on_job_start_params_s extends ref.Type {
    tile_map: StHarvesterTileMap
    job: StHarvesterJob
    constructor(data: Partial<st_harvester_diagnostic_callback_on_job_start_params_s>)
}
export declare class size_t extends ref.types.ulonglong {}
export declare class st_harvester_diagnostic_callback_on_progress_increment_params_s extends ref.Type {
    progress_increment: number
    constructor(data: Partial<st_harvester_diagnostic_callback_on_progress_increment_params_s>)
}
export declare class st_string_view_s extends ref.Type {
    data: ref.Ref<ref.types.char>
    size: number
    constructor(data: Partial<st_string_view_s>)
}
export declare class st_harvester_diagnostic_callback_on_warning_message_params_s extends ref.Type {
    msg: st_string_view_s
    constructor(data: Partial<st_harvester_diagnostic_callback_on_warning_message_params_s>)
}
export declare type st_harvester_diagnostic_callback_t = (type: st_harvester_diagnostic_callback_type_e, params: ref.Ref<ref.types.rvoid>, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare enum st_harvester_error_e {
    st_harvester_success,
    st_harvester_intrernal_runtime_error,
    st_harvester_cuda_error,
    st_harvester_filesystem_error,
    st_harvester_bad_alloc,
    st_harvester_illegal_argument_error,
}
export declare enum st_harvester_resampling_e {
    st_harvester_resampling_default,
    st_harvester_resampling_nearest,
    st_harvester_resampling_bilinear,
    st_harvester_resampling_cubic,
    st_harvester_resampling_cubic_spline,
    st_harvester_resampling_lanczos,
    st_harvester_resampling_count,
}
export declare enum st_harvester_mipmap_filter_e {
    st_harvester_mipmap_filter_default,
    st_harvester_mipmap_filter_nearest,
    st_harvester_mipmap_filter_triangle_3x3,
    st_harvester_mipmap_filter_gauss_3x3,
    st_harvester_mipmap_filter_count,
}
export declare enum st_harvester_face_e {
    st_harvester_face_pos_x,
    st_harvester_face_pos_y,
    st_harvester_face_neg_x,
    st_harvester_face_neg_y,
    st_harvester_face_pos_z,
    st_harvester_face_neg_z,
    st_harvester_face_count,
    st_harvester_face_unknown,
}
export declare enum st_harvester_data_type_e {
    st_harvester_data_type_height,
    st_harvester_data_type_coverage,
    st_harvester_data_type_brush,
    st_harvester_data_type_albedo,
    st_harvester_data_type_water_mask,
    st_harvester_data_type_satellite,
    st_harvester_data_type_radar,
    st_harvester_data_type_decals,
    st_harvester_data_type_fields,
    st_harvester_data_type_lightmap,
    st_harvester_data_type_gmp_height,
    st_harvester_data_type_gmp_height_clr,
    st_harvester_data_type_noise,
    st_harvester_data_type_mask,
    st_harvester_data_type_fields_vector,
    st_harvester_data_type_geo_map,
    st_harvester_data_type_satellite_map,
    st_harvester_data_type_meta_data,
    st_harvester_data_type_snow_mask,
    st_harvester_data_type_fields_alpha,
    st_harvester_data_type_count,
    st_harvester_data_type_unknown,
}
export declare enum st_harvester_pixel_format_e {
    st_harvester_pixel_format_g8,
    st_harvester_pixel_format_g16,
    st_harvester_pixel_format_rgb48,
    st_harvester_pixel_format_rgb24,
    st_harvester_pixel_format_rgba32,
    st_harvester_pixel_format_srgba32,
    st_harvester_pixel_format_f32,
    st_harvester_pixel_format_xy64,
    st_harvester_pixel_format_xyzw128,
    st_harvester_pixel_format_rgba32_dxt5,
    st_harvester_pixel_format_srgba32_dxt5,
    st_harvester_pixel_format_bc5,
    st_harvester_pixel_format_rgba32_bptc,
    st_harvester_pixel_format_srgba32_bptc,
    st_harvester_pixel_format_f2x32,
    st_harvester_pixel_format_f4x32,
    st_harvester_pixel_format_g32,
    st_harvester_pixel_format_count,
}
export declare enum st_harvester_field_type_e {
    st_harvester_field_type_integer,
    st_harvester_field_type_real,
    st_harvester_field_type_string,
    st_harvester_field_type_boolean,
}
export declare enum st_harvester_field_value_e {
    st_harvester_field_value_set,
    st_harvester_field_value_range,
    st_harvester_field_value_any,
}
export declare class st_harvester_field_value_set_s extends ref.Type {
    data: ref.Ref<ref.types.rvoid>
    count: number
    constructor(data: Partial<st_harvester_field_value_set_s>)
}
export declare class st_harvester_field_value_integer_range_s extends ref.Type {
    min: number
    max: number
    constructor(data: Partial<st_harvester_field_value_integer_range_s>)
}
export declare class st_harvester_field_value_real_range_s extends ref.Type {
    min: number
    max: number
    constructor(data: Partial<st_harvester_field_value_real_range_s>)
}
export declare class st_byte_t extends ref.types.uchar {}
export declare class st_bool_t extends st_byte_t {}
export declare class st_harvester_field_info_s extends ref.Type {
    name: st_string_view_s
    type: st_harvester_field_type_e
    value: st_harvester_field_value_e
    optional: number
    value_data: ref.Ref<ref.types.rvoid>
    constructor(data: Partial<st_harvester_field_info_s>)
}
export declare class st_harvester_layer_fields_info_s extends ref.Type {
    field_data: ref.Ref<st_harvester_field_info_s>
    field_count: number
    constructor(data: Partial<st_harvester_layer_fields_info_s>)
}
export declare class uint64_t extends ref.types.ulonglong {}
export declare class st_harvester_tile_map_index_s extends ref.Type {
    face: number
    row: number
    column: number
    constructor(data: Partial<st_harvester_tile_map_index_s>)
}
export declare class st_harvester_tile_s extends ref.Type {
    index: st_harvester_tile_map_index_s
    data: ref.Ref<ref.types.rvoid>
    allocated_buf_size: number
    constructor(data: Partial<st_harvester_tile_s>)
}
export declare class uint16_t extends ref.types.short {}
export declare class st_unistore_version_s extends ref.Type {
    major: number
    minor: number
    constructor(data: Partial<st_unistore_version_s>)
}
export declare class StUnistore_ extends ref.Type {
    constructor(data: Partial<StUnistore_>)
}
export declare class StUnistore extends ref.Ref<StUnistore_> {}
export declare class st_unistore_capabilities_t extends uint64_t {}
export declare class st_memory_block_s extends ref.Type {
    data: ref.Ref<ref.types.rvoid>
    size: number
    constructor(data: Partial<st_memory_block_s>)
}
export declare class uintmax_t extends ref.types.ulonglong {}
export declare class int64_t extends ref.types.longlong {}
export declare class st_unistore_file_time_t extends int64_t {}
export declare class st_unistore_file_info_s extends ref.Type {
    size: number
    last_modified: number
    _reserved: Array<number>
    constructor(data: Partial<st_unistore_file_info_s>)
}
export declare class st_unistore_flags_t extends uint64_t {}
export declare enum st_unistore_error_e {
    st_unistore_success,
    st_unistore_error_bad_alloc,
    st_unistore_error_capability_not_supported,
    st_unistore_error_invalid_argument,
    st_unistore_error_bad_file_id,
    st_unistore_error_file_not_found,
    st_unistore_error_already_exists,
    st_unistore_error_permission_denied,
    st_unistore_error_io_failed,
    st_unistore_error_size_limit_exceeded,
    st_unistore_error_time_point_out_of_range,
    st_unistore_error_resource_unavailable,
    st_unistore_error_would_copy,
    st_unistore_error_unknown,
}
export declare type st_unistore_get_file_info_by_id_callback_t = (file_info: ref.Ref<st_unistore_file_info_s>, error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare class st_memory_allocation_s extends ref.Type {
    size: number
    data: ref.Ref<ref.types.rvoid>
    alignment: number
    constructor(data: Partial<st_memory_allocation_s>)
}
export declare class StMemoryResource_ extends ref.Type {
    constructor(data: Partial<StMemoryResource_>)
}
export declare class StMemoryResource extends ref.Ref<StMemoryResource_> {}
export declare class st_memory_resource_dispatch_table_s extends ref.Type {
    allocate: (memory_resource: StMemoryResource, size: number, alignment: number) => st_memory_allocation_s
    try_resize: (memory_resource: StMemoryResource, allocation: st_memory_allocation_s, new_size: number) => st_memory_allocation_s
    deallocate: (memory_resource: StMemoryResource, allocation: st_memory_allocation_s) => ref.types.rvoid
    constructor(data: Partial<st_memory_resource_dispatch_table_s>)
}
export declare class st_memory_resource_s extends ref.Type {
    dispatch: ref.Ref<st_memory_resource_dispatch_table_s>
    resource: StMemoryResource
    constructor(data: Partial<st_memory_resource_s>)
}
export declare type st_unistore_load_callback_t = (buffer: st_memory_allocation_s, file_info: ref.Ref<st_unistore_file_info_s>, error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare class st_mutable_memory_block_s extends ref.Type {
    data: ref.Ref<ref.types.rvoid>
    size: number
    constructor(data: Partial<st_mutable_memory_block_s>)
}
export declare type st_unistore_load_to_buffer_callback_t = (bytes_read: number, file_info: ref.Ref<st_unistore_file_info_s>, error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_store_callback_t = (error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_remove_callback_t = (error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_rename_callback_t = (error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare class StUnistoreFileHandle_ extends ref.Type {
    constructor(data: Partial<StUnistoreFileHandle_>)
}
export declare class StUnistoreFileHandle extends ref.Ref<StUnistoreFileHandle_> {}
export declare type st_unistore_open_callback_t = (handle: StUnistoreFileHandle, error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_close_callback_t = (error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_get_file_info_by_handle_callback_t = (file_info: ref.Ref<st_unistore_file_info_s>, error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_read_callback_t = (bytes_read: number, error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_write_callback_t = (bytes_written: number, error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_resize_callback_t = (error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare type st_unistore_flush_callback_t = (error_code: st_unistore_error_e, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid
export declare class st_unistore_dispatch_table_s extends ref.Type {
    api_version: (unistore: StUnistore) => st_unistore_version_s
    name: (unistore: StUnistore) => st_string_view_s
    capabilities: (unistore: StUnistore) => number
    subprotocol: (unistore: StUnistore) => st_string_view_s
    get_file_info_by_id: (unistore: StUnistore, file_id: st_memory_block_s, file_info: ref.Ref<st_unistore_file_info_s>, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_get_file_info_by_id: (unistore: StUnistore, file_id: st_memory_block_s, flags: number, callback: st_unistore_get_file_info_by_id_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    load: (unistore: StUnistore, file_id: st_memory_block_s, memory_resource: st_memory_resource_s, file_info: ref.Ref<st_unistore_file_info_s>, flags: number, error_code: ref.Ref<st_unistore_error_e>) => st_memory_allocation_s
    async_load: (unistore: StUnistore, file_id: st_memory_block_s, memory_resource: st_memory_resource_s, get_file_info: number, flags: number, callback: st_unistore_load_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    load_to_buffer: (unistore: StUnistore, file_id: st_memory_block_s, buffer: st_mutable_memory_block_s, file_info: ref.Ref<st_unistore_file_info_s>, flags: number, error_code: ref.Ref<st_unistore_error_e>) => number
    async_load_to_buffer: (unistore: StUnistore, file_id: st_memory_block_s, buffer: st_mutable_memory_block_s, get_file_info: number, flags: number, callback: st_unistore_load_to_buffer_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    store: (unistore: StUnistore, file_id: st_memory_block_s, buffer: st_memory_block_s, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_store: (unistore: StUnistore, file_id: st_memory_block_s, buffer: st_memory_block_s, flags: number, callback: st_unistore_store_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    remove: (unistore: StUnistore, file_id: st_memory_block_s, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_remove: (unistore: StUnistore, file_id: st_memory_block_s, flags: number, callback: st_unistore_remove_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    rename: (unistore: StUnistore, old_file_id: st_memory_block_s, new_file_id: st_memory_block_s, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_rename: (unistore: StUnistore, old_file_id: st_memory_block_s, new_file_id: st_memory_block_s, flags: number, callback: st_unistore_rename_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    open: (unistore: StUnistore, file_id: st_memory_block_s, flags: number, error_code: ref.Ref<st_unistore_error_e>) => StUnistoreFileHandle
    async_open: (unistore: StUnistore, file_id: st_memory_block_s, flags: number, callback: st_unistore_open_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    close: (unistore: StUnistore, handle: StUnistoreFileHandle, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_close: (unistore: StUnistore, handle: StUnistoreFileHandle, flags: number, callback: st_unistore_close_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    get_file_info_by_handle: (unistore: StUnistore, handle: StUnistoreFileHandle, file_info: ref.Ref<st_unistore_file_info_s>, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_get_file_info_by_handle: (unistore: StUnistore, handle: StUnistoreFileHandle, flags: number, callback: st_unistore_get_file_info_by_handle_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    read: (unistore: StUnistore, handle: StUnistoreFileHandle, offset: number, buffer: st_mutable_memory_block_s, flags: number, error_code: ref.Ref<st_unistore_error_e>) => number
    async_read: (unistore: StUnistore, handle: StUnistoreFileHandle, offset: number, buffer: st_mutable_memory_block_s, flags: number, callback: st_unistore_read_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    write: (unistore: StUnistore, handle: StUnistoreFileHandle, offset: number, buffer: st_memory_block_s, flags: number, error_code: ref.Ref<st_unistore_error_e>) => number
    async_write: (unistore: StUnistore, handle: StUnistoreFileHandle, offset: number, buffer: st_memory_block_s, flags: number, callback: st_unistore_write_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    resize: (unistore: StUnistore, handle: StUnistoreFileHandle, new_size: number, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_resize: (unistore: StUnistore, handle: StUnistoreFileHandle, new_size: number, flags: number, callback: st_unistore_resize_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    flush: (unistore: StUnistore, handle: StUnistoreFileHandle, flags: number, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    async_flush: (unistore: StUnistore, handle: StUnistoreFileHandle, flags: number, callback: st_unistore_flush_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_unistore_error_e>) => ref.types.rvoid
    constructor(data: Partial<st_unistore_dispatch_table_s>)
}
export declare class st_unistore_s extends ref.Type {
    dispatch: ref.Ref<st_unistore_dispatch_table_s>
    unistore: StUnistore
    constructor(data: Partial<st_unistore_s>)
}

export interface HarvesterLibrary {
    st_harvester_get_last_error_description_sync(): st_string_view_s
    st_create_harvester_sync(worker_threads_count: number, cuda_streams_count: number, resources_storage: st_unistore_s, tmp_database: StHarvesterDatabase, error_code: ref.Ref<st_harvester_error_e>): StHarvester
    st_destroy_harvester_sync(harvester: StHarvester, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_execute_job_sync(harvester: StHarvester, database: StHarvesterDatabase, tile_map: StHarvesterTileMap, job: StHarvesterJob, diagnostic_callback: st_harvester_diagnostic_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_execute_job_list_sync(harvester: StHarvester, database: StHarvesterDatabase, job_list: StHarvesterJobList, diagnostic_callback: st_harvester_diagnostic_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_stop_sync(harvester: StHarvester, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_job_get_level_sync(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_job_get_data_type_sync(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): st_harvester_data_type_e
    st_harvester_job_get_name_sync(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): st_string_view_s
    st_harvester_job_get_tile_count_sync(job: StHarvesterJob, tile_map: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_create_textures_sync(depot: st_unistore_s, configuration_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTextures
    st_harvester_destroy_textures_sync(textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_asset_library_sync(depot: st_unistore_s, location_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterAssetLibrary
    st_harvester_destroy_asset_library_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_asset_library_dump_asset_list_to_memory_sync(asset_library: StHarvesterAssetLibrary, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_asset_library_dump_asset_list_to_file_sync(asset_library: StHarvesterAssetLibrary, file_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_database_sync(src_unistore: st_unistore_s, dst_unistore: st_unistore_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterDatabase
    st_harvester_destroy_database_sync(database: StHarvesterDatabase, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_import_vector_dataset_from_file_sync(database: StHarvesterDatabase, dataset_path: st_string_view_s, layer: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterMask
    st_harvester_import_vector_dataset_from_memory_sync(database: StHarvesterDatabase, data: ref.Ref<ref.types.rvoid>, size: number, layer: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterMask
    st_harvester_export_vector_dataset_to_file_by_box_sync(database: StHarvesterDatabase, dataset_path: st_string_view_s, driver: st_string_view_s, layer: st_string_view_s, x_min: number, y_min: number, x_max: number, y_max: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_export_vector_dataset_to_memory_by_box_sync(database: StHarvesterDatabase, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, driver: st_string_view_s, layer: st_string_view_s, x_min: number, y_min: number, x_max: number, y_max: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_export_vector_dataset_to_file_by_tm_sync(database: StHarvesterDatabase, dataset_path: st_string_view_s, driver: st_string_view_s, layer: st_string_view_s, tm: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_export_vector_dataset_to_memory_by_tm_sync(database: StHarvesterDatabase, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, driver: st_string_view_s, layer: st_string_view_s, tm: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_destroy_memory_buffer_sync(data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_reset_vector_cache_sync(harvester: StHarvester, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_tile_map_sync(level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_create_mask_tile_map_sync(mask: StHarvesterMask, level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_create_face_tile_map_sync(face: st_harvester_face_e, level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_create_world_tile_map_sync(level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_create_raster_extents_tile_map_sync(dataset_path: st_string_view_s, level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_create_vector_extents_tile_map_sync(dataset_path: st_string_view_s, level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_create_merged_tile_map_sync(tile_map_0: StHarvesterTileMap, tile_map_1: StHarvesterTileMap, level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_create_edited_areas_tile_map_sync(database: StHarvesterDatabase, meta_layers: ref.Ref<st_string_view_s>, meta_layers_count: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterTileMap
    st_harvester_tile_map_add_tile_sync(tile_map: StHarvesterTileMap, face: st_harvester_face_e, level: number, row: number, column: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_tile_map_get_size_sync(tile_map: StHarvesterTileMap, level: number, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_tile_map_get_array_sync(tile_map: StHarvesterTileMap, data: ref.Ref<st_harvester_tile_map_index_s>, allocated_index_count: number, level: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_destroy_tile_map_sync(tile_map: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_proj4_mask_sync(x: ref.Ref<ref.types.double>, y: ref.Ref<ref.types.double>, vertex_count: number, proj4: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterMask
    st_harvester_create_wkt_mask_sync(x: ref.Ref<ref.types.double>, y: ref.Ref<ref.types.double>, vertex_count: number, wkt: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterMask
    st_harvester_create_ogr_mask_sync(ogr_file_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterMask
    st_harvester_ogr_mask_save_to_file_sync(mask: StHarvesterMask, dataset_path: st_string_view_s, driver: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_ogr_mask_save_to_memory_sync(mask: StHarvesterMask, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, driver: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_destroy_mask_sync(mask: StHarvesterMask, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_generated_presets_sync(error_code: ref.Ref<st_harvester_error_e>): StHarvesterGeneratedPresets
    st_harvester_destroy_generated_presets_sync(presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_vector_layer_fields_info_sync(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, layer_name: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): st_harvester_layer_fields_info_s
    st_harvester_destroy_vector_layer_fields_info_sync(fields: st_harvester_layer_fields_info_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_retile_raster_dataset_job_sync(dataset_path: st_string_view_s, data_type: st_harvester_data_type_e, level: number, overwrite: number, resampling: st_harvester_resampling_e, cut_line: StHarvesterMask, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_mipmap_job_sync(data_type: st_harvester_data_type_e, level: number, mipmap_filter: st_harvester_mipmap_filter_e, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_borders_job_sync(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_upsampling_job_sync(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_blur_raster_job_sync(data_type: st_harvester_data_type_e, level: number, sigma: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_water_mask_job_sync(error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_rasterize_water_mask_job_sync(error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_roads_job_sync(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_rasterize_decals_job_sync(textures: StHarvesterTextures, data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_rasterize_fields_job_sync(textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_fields_decals_job_sync(textures: StHarvesterTextures, data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_snow_mask_job_sync(textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_fields_alpha_job_sync(error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_generate_presets_job_sync(assets_libary: StHarvesterAssetLibrary, generated_presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_place_presets_job_sync(assets_libary: StHarvesterAssetLibrary, generated_presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_city_substrate_job_sync(assets_libary: StHarvesterAssetLibrary, textures: StHarvesterTextures, generated_presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_wang_city_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_wang_city_substrate_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_place_settlements_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_settlements_footprint_job_sync(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_dem_bbox_job_sync(level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_flatland_job_sync(error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_coastline_job_sync(raster_watermask_dataset: st_string_view_s, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_align_rivers_job_sync(level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_align_roads_job_sync(error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_retile_custom_height_job_sync(height_dataset_path: st_string_view_s, alpha_dataset_path: st_string_view_s, level_number: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_change_coverage_value_job_sync(from: number, to: number, level: number, mask: StHarvesterMask, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_sea_floor_job_sync(sigma: number, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_embed_masks_job_sync(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_replace_coverage_job_sync(type: number, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_mesh_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_power_lines_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_generic_objects_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_extended_brushes_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_fields_vegetation_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_fields_brush_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_buildings_job_sync(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_radar_job_sync(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_extract_quarters_job_sync(asset_library: StHarvesterAssetLibrary, dataset_path: st_string_view_s, driver: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_export_raster_job_sync(dataset_path: st_string_view_s, data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_read_raster_tiles_job_sync(tiles: ref.Ref<st_harvester_tile_s>, allocated_tile_count: number, data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_write_raster_tiles_job_sync(tiles: ref.Ref<st_harvester_tile_s>, tile_count: number, data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_update_meta_data_job_sync(layer: st_string_view_s, raster_datasets_dir: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_accumulate_meta_data_job_sync(error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_create_get_meta_data_job_sync(meta_data_strings: ref.Ref<ref.Ref<ref.Ref<ref.types.char>>>, meta_data_sizes: ref.Ref<ref.Ref<size_t>>, tile_count: ref.Ref<size_t>, level: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJob
    st_harvester_destroy_string_array_sync(string_array: ref.Ref<ref.Ref<ref.types.char>>, string_sizes: ref.Ref<size_t>, string_count: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_destroy_job_sync(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_create_job_list_sync(name: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJobList
    st_harvester_destroy_job_list_sync(job_list: StHarvesterJobList, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_job_list_append_sync(job_list: StHarvesterJobList, tile_map: StHarvesterTileMap, job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_job_list_get_tile_count_sync(job_list: StHarvesterJobList, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_job_list_get_name_sync(job_list: StHarvesterJobList, error_code: ref.Ref<st_harvester_error_e>): st_string_view_s
    st_harvester_create_vector_derivatives_job_list_sync(db: StHarvesterDatabase, asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, raster_datasets_dir: st_string_view_s, layer_names: ref.Ref<st_string_view_s>, layer_tile_maps: ref.Ref<StHarvesterTileMap>, layer_count: number, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJobList
    st_harvester_create_vector_patch_job_list_sync(editor_database: StHarvesterDatabase, asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, raster_datasets_dir: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): StHarvesterJobList
    st_harvester_gen_degree_grid_sync(shape_file_path: st_string_view_s, min_lat: number, min_lon: number, max_lat: number, max_lon: number, cell_size: number, segment_count: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_prepare_data_for_osm_loader_sync(bin_data_path: st_string_view_s, dst_dir_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_osm_extract_islands_sync(src_path: st_string_view_s, dst_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_make_panorama_pyramid_sync(src_path: st_string_view_s, rsc_path: st_string_view_s, dst_dir_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_rgb_to_coverage_sync(rgb_path: st_string_view_s, coverage_path: st_string_view_s, palette_path: st_string_view_s, default_value: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_copy_projection_ref_sync(src_path: st_string_view_s, dst_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_scene_decals_to_shape_files_sync(shape_files_dir: st_string_view_s, editor_database: StHarvesterDatabase, asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_scene_decals_to_geo_rasters_sync(geo_rasters_dir: st_string_view_s, editor_database: StHarvesterDatabase, assets_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, resources_path: st_string_view_s, pixel_size: number, tile_size: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_gen_face_perlin_noise_sync(path: st_string_view_s, face: st_harvester_face_e, x_min: number, y_min: number, x_max: number, y_max: number, pixel_size: number, seed: number, octave_count: number, freq: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_gen_noise_with_overlapped_borders_sync(path: st_string_view_s, tile_size_with_borders: number, border_size: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_rasterize_vector_wang_tile_sync(raster_tile_path: st_string_view_s, tile: ref.types.char, skin_number: number, trees_footprint_propability: number, target: number, render_img_size: number, final_img_size: number, render_brushes: number, asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, resources: st_unistore_s, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_get_tile_base_size_sync(data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_get_tile_border_size_sync(data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_get_tile_pixel_format_sync(data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): st_harvester_pixel_format_e
    st_harvester_get_bytes_per_pixel_sync(pixel_format: st_harvester_pixel_format_e, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_get_face_size_in_pixels_sync(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_get_pixel_size_in_meters_sync(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): number
    st_harvester_simplify_shp_sync(src_shp_path: st_string_view_s, dst_shp_path: st_string_view_s, linear_tolerance_meters: number, area_tolerance_meters: number, preserve_topology: number, show_progress: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_dissolve_shp_sync(src_shp_path: st_string_view_s, dst_shp_path: st_string_view_s, tolerance: number, show_progress: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid
    st_harvester_split_shp_by_points_count_sync(src_shp_path: st_string_view_s, dst_shp_path: st_string_view_s, max_points_count: number, show_progress: number, error_code: ref.Ref<st_harvester_error_e>): ref.types.rvoid

    st_harvester_get_last_error_description(): Promise<st_string_view_s>
    st_create_harvester(worker_threads_count: number, cuda_streams_count: number, resources_storage: st_unistore_s, tmp_database: StHarvesterDatabase, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvester>
    st_destroy_harvester(harvester: StHarvester, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_execute_job(harvester: StHarvester, database: StHarvesterDatabase, tile_map: StHarvesterTileMap, job: StHarvesterJob, diagnostic_callback: st_harvester_diagnostic_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_execute_job_list(harvester: StHarvester, database: StHarvesterDatabase, job_list: StHarvesterJobList, diagnostic_callback: st_harvester_diagnostic_callback_t, user_data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_stop(harvester: StHarvester, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_job_get_level(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_job_get_data_type(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): Promise<st_harvester_data_type_e>
    st_harvester_job_get_name(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): Promise<st_string_view_s>
    st_harvester_job_get_tile_count(job: StHarvesterJob, tile_map: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_create_textures(depot: st_unistore_s, configuration_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTextures>
    st_harvester_destroy_textures(textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_asset_library(depot: st_unistore_s, location_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterAssetLibrary>
    st_harvester_destroy_asset_library(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_asset_library_dump_asset_list_to_memory(asset_library: StHarvesterAssetLibrary, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_asset_library_dump_asset_list_to_file(asset_library: StHarvesterAssetLibrary, file_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_database(src_unistore: st_unistore_s, dst_unistore: st_unistore_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterDatabase>
    st_harvester_destroy_database(database: StHarvesterDatabase, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_import_vector_dataset_from_file(database: StHarvesterDatabase, dataset_path: st_string_view_s, layer: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterMask>
    st_harvester_import_vector_dataset_from_memory(database: StHarvesterDatabase, data: ref.Ref<ref.types.rvoid>, size: number, layer: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterMask>
    st_harvester_export_vector_dataset_to_file_by_box(database: StHarvesterDatabase, dataset_path: st_string_view_s, driver: st_string_view_s, layer: st_string_view_s, x_min: number, y_min: number, x_max: number, y_max: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_export_vector_dataset_to_memory_by_box(database: StHarvesterDatabase, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, driver: st_string_view_s, layer: st_string_view_s, x_min: number, y_min: number, x_max: number, y_max: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_export_vector_dataset_to_file_by_tm(database: StHarvesterDatabase, dataset_path: st_string_view_s, driver: st_string_view_s, layer: st_string_view_s, tm: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_export_vector_dataset_to_memory_by_tm(database: StHarvesterDatabase, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, driver: st_string_view_s, layer: st_string_view_s, tm: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_destroy_memory_buffer(data: ref.Ref<ref.types.rvoid>, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_reset_vector_cache(harvester: StHarvester, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_tile_map(level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_create_mask_tile_map(mask: StHarvesterMask, level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_create_face_tile_map(face: st_harvester_face_e, level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_create_world_tile_map(level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_create_raster_extents_tile_map(dataset_path: st_string_view_s, level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_create_vector_extents_tile_map(dataset_path: st_string_view_s, level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_create_merged_tile_map(tile_map_0: StHarvesterTileMap, tile_map_1: StHarvesterTileMap, level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_create_edited_areas_tile_map(database: StHarvesterDatabase, meta_layers: ref.Ref<st_string_view_s>, meta_layers_count: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterTileMap>
    st_harvester_tile_map_add_tile(tile_map: StHarvesterTileMap, face: st_harvester_face_e, level: number, row: number, column: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_tile_map_get_size(tile_map: StHarvesterTileMap, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_tile_map_get_array(tile_map: StHarvesterTileMap, data: ref.Ref<st_harvester_tile_map_index_s>, allocated_index_count: number, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_destroy_tile_map(tile_map: StHarvesterTileMap, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_proj4_mask(x: ref.Ref<ref.types.double>, y: ref.Ref<ref.types.double>, vertex_count: number, proj4: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterMask>
    st_harvester_create_wkt_mask(x: ref.Ref<ref.types.double>, y: ref.Ref<ref.types.double>, vertex_count: number, wkt: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterMask>
    st_harvester_create_ogr_mask(ogr_file_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterMask>
    st_harvester_ogr_mask_save_to_file(mask: StHarvesterMask, dataset_path: st_string_view_s, driver: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_ogr_mask_save_to_memory(mask: StHarvesterMask, data: ref.Ref<ref.Ref<ref.types.rvoid>>, size: ref.Ref<size_t>, driver: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_destroy_mask(mask: StHarvesterMask, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_generated_presets(error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterGeneratedPresets>
    st_harvester_destroy_generated_presets(presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_vector_layer_fields_info(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, layer_name: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<st_harvester_layer_fields_info_s>
    st_harvester_destroy_vector_layer_fields_info(fields: st_harvester_layer_fields_info_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_retile_raster_dataset_job(dataset_path: st_string_view_s, data_type: st_harvester_data_type_e, level: number, overwrite: number, resampling: st_harvester_resampling_e, cut_line: StHarvesterMask, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_mipmap_job(data_type: st_harvester_data_type_e, level: number, mipmap_filter: st_harvester_mipmap_filter_e, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_borders_job(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_upsampling_job(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_blur_raster_job(data_type: st_harvester_data_type_e, level: number, sigma: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_water_mask_job(error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_rasterize_water_mask_job(error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_roads_job(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_rasterize_decals_job(textures: StHarvesterTextures, data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_rasterize_fields_job(textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_fields_decals_job(textures: StHarvesterTextures, data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_snow_mask_job(textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_fields_alpha_job(error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_generate_presets_job(assets_libary: StHarvesterAssetLibrary, generated_presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_place_presets_job(assets_libary: StHarvesterAssetLibrary, generated_presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_city_substrate_job(assets_libary: StHarvesterAssetLibrary, textures: StHarvesterTextures, generated_presets: StHarvesterGeneratedPresets, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_wang_city_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_wang_city_substrate_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_place_settlements_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_settlements_footprint_job(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_dem_bbox_job(level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_flatland_job(error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_coastline_job(raster_watermask_dataset: st_string_view_s, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_align_rivers_job(level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_align_roads_job(error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_retile_custom_height_job(height_dataset_path: st_string_view_s, alpha_dataset_path: st_string_view_s, level_number: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_change_coverage_value_job(from: number, to: number, level: number, mask: StHarvesterMask, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_sea_floor_job(sigma: number, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_embed_masks_job(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_replace_coverage_job(type: number, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_mesh_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_power_lines_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_generic_objects_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_extended_brushes_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_fields_vegetation_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_fields_brush_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_buildings_job(asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_radar_job(asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_extract_quarters_job(asset_library: StHarvesterAssetLibrary, dataset_path: st_string_view_s, driver: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_export_raster_job(dataset_path: st_string_view_s, data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_read_raster_tiles_job(tiles: ref.Ref<st_harvester_tile_s>, allocated_tile_count: number, data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_write_raster_tiles_job(tiles: ref.Ref<st_harvester_tile_s>, tile_count: number, data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_update_meta_data_job(layer: st_string_view_s, raster_datasets_dir: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_accumulate_meta_data_job(error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_create_get_meta_data_job(meta_data_strings: ref.Ref<ref.Ref<ref.Ref<ref.types.char>>>, meta_data_sizes: ref.Ref<ref.Ref<size_t>>, tile_count: ref.Ref<size_t>, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJob>
    st_harvester_destroy_string_array(string_array: ref.Ref<ref.Ref<ref.types.char>>, string_sizes: ref.Ref<size_t>, string_count: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_destroy_job(job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_create_job_list(name: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJobList>
    st_harvester_destroy_job_list(job_list: StHarvesterJobList, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_job_list_append(job_list: StHarvesterJobList, tile_map: StHarvesterTileMap, job: StHarvesterJob, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_job_list_get_tile_count(job_list: StHarvesterJobList, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_job_list_get_name(job_list: StHarvesterJobList, error_code: ref.Ref<st_harvester_error_e>): Promise<st_string_view_s>
    st_harvester_create_vector_derivatives_job_list(db: StHarvesterDatabase, asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, raster_datasets_dir: st_string_view_s, layer_names: ref.Ref<st_string_view_s>, layer_tile_maps: ref.Ref<StHarvesterTileMap>, layer_count: number, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJobList>
    st_harvester_create_vector_patch_job_list(editor_database: StHarvesterDatabase, asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, raster_datasets_dir: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<StHarvesterJobList>
    st_harvester_gen_degree_grid(shape_file_path: st_string_view_s, min_lat: number, min_lon: number, max_lat: number, max_lon: number, cell_size: number, segment_count: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_prepare_data_for_osm_loader(bin_data_path: st_string_view_s, dst_dir_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_osm_extract_islands(src_path: st_string_view_s, dst_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_make_panorama_pyramid(src_path: st_string_view_s, rsc_path: st_string_view_s, dst_dir_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_rgb_to_coverage(rgb_path: st_string_view_s, coverage_path: st_string_view_s, palette_path: st_string_view_s, default_value: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_copy_projection_ref(src_path: st_string_view_s, dst_path: st_string_view_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_scene_decals_to_shape_files(shape_files_dir: st_string_view_s, editor_database: StHarvesterDatabase, asset_library: StHarvesterAssetLibrary, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_scene_decals_to_geo_rasters(geo_rasters_dir: st_string_view_s, editor_database: StHarvesterDatabase, assets_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, resources_path: st_string_view_s, pixel_size: number, tile_size: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_gen_face_perlin_noise(path: st_string_view_s, face: st_harvester_face_e, x_min: number, y_min: number, x_max: number, y_max: number, pixel_size: number, seed: number, octave_count: number, freq: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_gen_noise_with_overlapped_borders(path: st_string_view_s, tile_size_with_borders: number, border_size: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_rasterize_vector_wang_tile(raster_tile_path: st_string_view_s, tile: ref.types.char, skin_number: number, trees_footprint_propability: number, target: number, render_img_size: number, final_img_size: number, render_brushes: number, asset_library: StHarvesterAssetLibrary, textures: StHarvesterTextures, resources: st_unistore_s, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_get_tile_base_size(data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_get_tile_border_size(data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_get_tile_pixel_format(data_type: st_harvester_data_type_e, error_code: ref.Ref<st_harvester_error_e>): Promise<st_harvester_pixel_format_e>
    st_harvester_get_bytes_per_pixel(pixel_format: st_harvester_pixel_format_e, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_get_face_size_in_pixels(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_get_pixel_size_in_meters(data_type: st_harvester_data_type_e, level: number, error_code: ref.Ref<st_harvester_error_e>): Promise<number>
    st_harvester_simplify_shp(src_shp_path: st_string_view_s, dst_shp_path: st_string_view_s, linear_tolerance_meters: number, area_tolerance_meters: number, preserve_topology: number, show_progress: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_dissolve_shp(src_shp_path: st_string_view_s, dst_shp_path: st_string_view_s, tolerance: number, show_progress: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
    st_harvester_split_shp_by_points_count(src_shp_path: st_string_view_s, dst_shp_path: st_string_view_s, max_points_count: number, show_progress: number, error_code: ref.Ref<st_harvester_error_e>): Promise<ref.types.rvoid>
}
export declare function loadHarvesterLibrary(path: string): HarvesterLibrary
export declare enum st_heightmap_editor_error_e {
    st_heightmap_editor_success,
    st_heightmap_editor_runtime_error,
    st_heightmap_editor_array_too_small_error,
}
export declare enum st_heightmap_editor_brush_type_e {
    st_heightmap_editor_brush_type_flatten,
    st_heightmap_editor_brush_type_smooth,
    st_heightmap_editor_brush_type_sculpt,
}
export declare class st_heightmap_editor_brush extends ref.Type {
    type: st_heightmap_editor_brush_type_e
    lat: number
    lon: number
    radius: number
    falloff: number
    value: number
    constructor(data: Partial<st_heightmap_editor_brush>)
}

export interface HeightmapEditorLibrary {
    st_heightmap_editor_initialize_sync(error_code: ref.Ref<st_heightmap_editor_error_e>): ref.types.rvoid
    st_heightmap_editor_load_tiles_sync(tiles: ref.Ref<st_harvester_tile_s>, tile_count: number, level: number, error_code: ref.Ref<st_heightmap_editor_error_e>): ref.types.rvoid
    st_heightmap_editor_unload_tiles_sync(error_code: ref.Ref<st_heightmap_editor_error_e>): ref.types.rvoid
    st_heightmap_editor_apply_brush_sync(level: number, brush: ref.Ref<st_heightmap_editor_brush>, tiles: ref.Ref<ref.Ref<st_harvester_tile_s>>, size: number, count: ref.Ref<size_t>, error_code: ref.Ref<st_heightmap_editor_error_e>): ref.types.rvoid

    st_heightmap_editor_initialize(error_code: ref.Ref<st_heightmap_editor_error_e>): Promise<ref.types.rvoid>
    st_heightmap_editor_load_tiles(tiles: ref.Ref<st_harvester_tile_s>, tile_count: number, level: number, error_code: ref.Ref<st_heightmap_editor_error_e>): Promise<ref.types.rvoid>
    st_heightmap_editor_unload_tiles(error_code: ref.Ref<st_heightmap_editor_error_e>): Promise<ref.types.rvoid>
    st_heightmap_editor_apply_brush(level: number, brush: ref.Ref<st_heightmap_editor_brush>, tiles: ref.Ref<ref.Ref<st_harvester_tile_s>>, size: number, count: ref.Ref<size_t>, error_code: ref.Ref<st_heightmap_editor_error_e>): Promise<ref.types.rvoid>
}
export declare function loadHeightmapEditorLibrary(path: string): HeightmapEditorLibrary
export declare class StProgramOptValue_ extends ref.Type {
    constructor(data: Partial<StProgramOptValue_>)
}
export declare class StProgramOptValue extends ref.Ref<StProgramOptValue_> {}

export interface CompositeAdapterLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_unistore_composite_adapter_sync(unistores: ref.Ref<st_unistore_s>, count: number): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_unistore_composite_adapter(unistores: ref.Ref<st_unistore_s>, count: number): Promise<st_unistore_s>
}
export declare function loadCompositeAdapterLibrary(path: string): CompositeAdapterLibrary

export interface BundleFsAdapterLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_unistore_bundle_fs_adapter_sync(fs_unistore: st_unistore_s): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_unistore_bundle_fs_adapter(fs_unistore: st_unistore_s): Promise<st_unistore_s>
}
export declare function loadBundleFsAdapterLibrary(path: string): BundleFsAdapterLibrary

export interface LoggingAdapterLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_unistore_logging_adapter_sync(unistore: st_unistore_s): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_unistore_logging_adapter(unistore: st_unistore_s): Promise<st_unistore_s>
}
export declare function loadLoggingAdapterLibrary(path: string): LoggingAdapterLibrary

export interface RamStorageLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_ram_storage_sync(subprotocol: st_string_view_s): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_ram_storage(subprotocol: st_string_view_s): Promise<st_unistore_s>
}
export declare function loadRamStorageLibrary(path: string): RamStorageLibrary

export interface FsStorageLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_fs_storage_sync(root_path: st_string_view_s): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_fs_storage(root_path: st_string_view_s): Promise<st_unistore_s>
}
export declare function loadFsStorageLibrary(path: string): FsStorageLibrary
export declare enum st_bundle_storage_access_e {
    st_bundle_storage_access_readonly,
    st_bundle_storage_access_writable,
}

export interface BundleStorageLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_bundle_storage_sync(bundle_root_path: st_string_view_s, access: st_bundle_storage_access_e): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_bundle_storage(bundle_root_path: st_string_view_s, access: st_bundle_storage_access_e): Promise<st_unistore_s>
}
export declare function loadBundleStorageLibrary(path: string): BundleStorageLibrary
export declare class StUnistoreNetworkAdapterServer_ extends ref.Type {
    constructor(data: Partial<StUnistoreNetworkAdapterServer_>)
}
export declare class StUnistoreNetworkAdapterServer extends ref.Ref<StUnistoreNetworkAdapterServer_> {}
export declare class st_unistore_network_adapter_server_parameters_s extends ref.Type {
    worker_thread_count: number
    local_address: st_string_view_s
    enable_compression: number
    target_file_block_size: number
    constructor(data: Partial<st_unistore_network_adapter_server_parameters_s>)
}
export declare type st_unistore_network_adapter_server_stop_callback_t = (failed: number, user_data: ref.Ref<ref.types.rvoid>) => ref.types.rvoid

export interface NetworkAdapterServerLibrary {
    st_unistore_network_adapter_server_last_error_message_sync(): st_string_view_s
    st_create_unistore_network_adapter_server_sync(base_unistore: st_unistore_s): StUnistoreNetworkAdapterServer
    st_destroy_unistore_network_adapter_server_sync(server: StUnistoreNetworkAdapterServer): ref.types.rvoid
    st_unistore_network_adapter_server_start_sync(server: StUnistoreNetworkAdapterServer, parameters: ref.Ref<st_unistore_network_adapter_server_parameters_s>, callback: st_unistore_network_adapter_server_stop_callback_t, user_data: ref.Ref<ref.types.rvoid>): number
    st_unistore_network_adapter_server_stop_sync(server: StUnistoreNetworkAdapterServer): ref.types.rvoid

    st_unistore_network_adapter_server_last_error_message(): Promise<st_string_view_s>
    st_create_unistore_network_adapter_server(base_unistore: st_unistore_s): Promise<StUnistoreNetworkAdapterServer>
    st_destroy_unistore_network_adapter_server(server: StUnistoreNetworkAdapterServer): Promise<ref.types.rvoid>
    st_unistore_network_adapter_server_start(server: StUnistoreNetworkAdapterServer, parameters: ref.Ref<st_unistore_network_adapter_server_parameters_s>, callback: st_unistore_network_adapter_server_stop_callback_t, user_data: ref.Ref<ref.types.rvoid>): Promise<number>
    st_unistore_network_adapter_server_stop(server: StUnistoreNetworkAdapterServer): Promise<ref.types.rvoid>
}
export declare function loadNetworkAdapterServerLibrary(path: string): NetworkAdapterServerLibrary
export declare enum st_unistore_network_adapter_transport_protocol_e {
    st_unistore_network_adapter_transport_protocol_udp,
    st_unistore_network_adapter_transport_protocol_tcp,
}

export interface NetworkAdapterClientLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_unistore_network_adapter_client_sync(server_address: st_string_view_s, transport_protocol: st_unistore_network_adapter_transport_protocol_e, connection_timeout: number): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_unistore_network_adapter_client(server_address: st_string_view_s, transport_protocol: st_unistore_network_adapter_transport_protocol_e, connection_timeout: number): Promise<st_unistore_s>
}
export declare function loadNetworkAdapterClientLibrary(path: string): NetworkAdapterClientLibrary

export interface UnistoreSyncAdapterLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_unistore_sync_adapter_sync(base_unistore: st_unistore_s): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_unistore_sync_adapter(base_unistore: st_unistore_s): Promise<st_unistore_s>
}
export declare function loadUnistoreSyncAdapterLibrary(path: string): UnistoreSyncAdapterLibrary

export interface UnistoreAsyncAdapterLibrary {
    st_unistore_last_error_message_sync(): st_string_view_s
    st_create_unistore_sync(options: StProgramOptValue): st_unistore_s
    st_destroy_unistore_sync(unistore: StUnistore): ref.types.rvoid
    st_create_unistore_async_adapter_sync(base_unistore: st_unistore_s, thread_count: number): st_unistore_s

    st_unistore_last_error_message(): Promise<st_string_view_s>
    st_create_unistore(options: StProgramOptValue): Promise<st_unistore_s>
    st_destroy_unistore(unistore: StUnistore): Promise<ref.types.rvoid>
    st_create_unistore_async_adapter(base_unistore: st_unistore_s, thread_count: number): Promise<st_unistore_s>
}
export declare function loadUnistoreAsyncAdapterLibrary(path: string): UnistoreAsyncAdapterLibrary
