
const ffi = require('ffi')
const ref = require('ref')
const ArrayType = require('ref-array')
const StructType = require('ref-struct')
const util = require('util')

ref.types.rvoid = ref.types.void
ref.Ref = ref.refType(ref.types.size_t)

exports.allocEnum = function() {
    return ref.alloc(ref.types.int)
}

exports.StHarvester_ = StructType({
})
exports.StHarvester = ref.refType(exports.StHarvester_)
exports.StHarvesterTileMap_ = StructType({
})
exports.StHarvesterTileMap = ref.refType(exports.StHarvesterTileMap_)
exports.StHarvesterDatabase_ = StructType({
})
exports.StHarvesterDatabase = ref.refType(exports.StHarvesterDatabase_)
exports.StHarvesterAssetLibrary_ = StructType({
})
exports.StHarvesterAssetLibrary = ref.refType(exports.StHarvesterAssetLibrary_)
exports.StHarvesterJob_ = StructType({
})
exports.StHarvesterJob = ref.refType(exports.StHarvesterJob_)
exports.StHarvesterMask_ = StructType({
})
exports.StHarvesterMask = ref.refType(exports.StHarvesterMask_)
exports.StHarvesterTextures_ = StructType({
})
exports.StHarvesterTextures = ref.refType(exports.StHarvesterTextures_)
exports.StHarvesterGeneratedPresets_ = StructType({
})
exports.StHarvesterGeneratedPresets = ref.refType(exports.StHarvesterGeneratedPresets_)
exports.StHarvesterJobList_ = StructType({
})
exports.StHarvesterJobList = ref.refType(exports.StHarvesterJobList_)
exports.uint8_t = ref.types.uchar
exports.st_harvester_coverage_type_t = exports.uint8_t
exports.st_harvester_diagnostic_callback_type_e = {
    st_harvester_diagnostic_callback_type_on_job_start: 0,
    st_harvester_diagnostic_callback_type_on_job_finish: 1,
    st_harvester_diagnostic_callback_type_on_progress_increment: 2,
    st_harvester_diagnostic_callback_type_on_pipeline_stop: 3,
    st_harvester_diagnostic_callback_type_on_warning_message: 4,
}
exports.st_harvester_diagnostic_callback_on_job_start_params_s = StructType({
    tile_map: exports.StHarvesterTileMap,
    job: exports.StHarvesterJob,
})
exports.size_t = ref.types.ulonglong
exports.st_harvester_diagnostic_callback_on_progress_increment_params_s = StructType({
    progress_increment: exports.size_t,
})
exports.st_string_view_s = StructType({
    data: ref.refType(ref.types.char),
    size: exports.size_t,
})
exports.st_harvester_diagnostic_callback_on_warning_message_params_s = StructType({
    msg: exports.st_string_view_s,
})
exports.st_harvester_diagnostic_callback_t = ffi.Function(ref.types.void, [ref.types.int, ref.refType(ref.types.void), ref.refType(ref.types.void)])
exports.st_harvester_error_e = {
    st_harvester_success: 0,
    st_harvester_intrernal_runtime_error: 1,
    st_harvester_cuda_error: 2,
    st_harvester_filesystem_error: 3,
    st_harvester_bad_alloc: 4,
    st_harvester_illegal_argument_error: 5,
}
exports.st_harvester_resampling_e = {
    st_harvester_resampling_default: 0,
    st_harvester_resampling_nearest: 1,
    st_harvester_resampling_bilinear: 2,
    st_harvester_resampling_cubic: 3,
    st_harvester_resampling_cubic_spline: 4,
    st_harvester_resampling_lanczos: 5,
    st_harvester_resampling_count: 6,
}
exports.st_harvester_mipmap_filter_e = {
    st_harvester_mipmap_filter_default: 0,
    st_harvester_mipmap_filter_nearest: 1,
    st_harvester_mipmap_filter_triangle_3x3: 2,
    st_harvester_mipmap_filter_gauss_3x3: 3,
    st_harvester_mipmap_filter_count: 4,
}
exports.st_harvester_face_e = {
    st_harvester_face_pos_x: 0,
    st_harvester_face_pos_y: 1,
    st_harvester_face_neg_x: 2,
    st_harvester_face_neg_y: 3,
    st_harvester_face_pos_z: 4,
    st_harvester_face_neg_z: 5,
    st_harvester_face_count: 6,
    st_harvester_face_unknown: 255,
}
exports.st_harvester_data_type_e = {
    st_harvester_data_type_height: 0,
    st_harvester_data_type_coverage: 1,
    st_harvester_data_type_brush: 2,
    st_harvester_data_type_albedo: 3,
    st_harvester_data_type_water_mask: 4,
    st_harvester_data_type_satellite: 5,
    st_harvester_data_type_radar: 6,
    st_harvester_data_type_decals: 7,
    st_harvester_data_type_fields: 8,
    st_harvester_data_type_lightmap: 9,
    st_harvester_data_type_gmp_height: 10,
    st_harvester_data_type_gmp_height_clr: 11,
    st_harvester_data_type_noise: 12,
    st_harvester_data_type_mask: 13,
    st_harvester_data_type_fields_vector: 14,
    st_harvester_data_type_geo_map: 15,
    st_harvester_data_type_satellite_map: 16,
    st_harvester_data_type_meta_data: 17,
    st_harvester_data_type_snow_mask: 18,
    st_harvester_data_type_fields_alpha: 19,
    st_harvester_data_type_count: 20,
    st_harvester_data_type_unknown: 255,
}
exports.st_harvester_pixel_format_e = {
    st_harvester_pixel_format_g8: 0,
    st_harvester_pixel_format_g16: 1,
    st_harvester_pixel_format_rgb48: 2,
    st_harvester_pixel_format_rgb24: 3,
    st_harvester_pixel_format_rgba32: 4,
    st_harvester_pixel_format_srgba32: 5,
    st_harvester_pixel_format_f32: 6,
    st_harvester_pixel_format_xy64: 7,
    st_harvester_pixel_format_xyzw128: 8,
    st_harvester_pixel_format_rgba32_dxt5: 9,
    st_harvester_pixel_format_srgba32_dxt5: 10,
    st_harvester_pixel_format_bc5: 11,
    st_harvester_pixel_format_rgba32_bptc: 12,
    st_harvester_pixel_format_srgba32_bptc: 13,
    st_harvester_pixel_format_f2x32: 14,
    st_harvester_pixel_format_f4x32: 15,
    st_harvester_pixel_format_g32: 16,
    st_harvester_pixel_format_count: 17,
}
exports.st_harvester_field_type_e = {
    st_harvester_field_type_integer: 0,
    st_harvester_field_type_real: 1,
    st_harvester_field_type_string: 2,
    st_harvester_field_type_boolean: 3,
}
exports.st_harvester_field_value_e = {
    st_harvester_field_value_set: 0,
    st_harvester_field_value_range: 1,
    st_harvester_field_value_any: 2,
}
exports.st_harvester_field_value_set_s = StructType({
    data: ref.refType(ref.types.void),
    count: exports.size_t,
})
exports.st_harvester_field_value_integer_range_s = StructType({
    min: ref.types.int,
    max: ref.types.int,
})
exports.st_harvester_field_value_real_range_s = StructType({
    min: ref.types.double,
    max: ref.types.double,
})
exports.st_byte_t = ref.types.uchar
exports.st_bool_t = exports.st_byte_t
exports.st_harvester_field_info_s = StructType({
    name: exports.st_string_view_s,
    type: ref.types.int,
    value: ref.types.int,
    optional: exports.st_bool_t,
    value_data: ref.refType(ref.types.void),
})
exports.st_harvester_layer_fields_info_s = StructType({
    field_data: ref.refType(exports.st_harvester_field_info_s),
    field_count: exports.size_t,
})
exports.uint64_t = ref.types.ulonglong
exports.st_harvester_tile_map_index_s = StructType({
    face: exports.uint8_t,
    row: exports.uint64_t,
    column: exports.uint64_t,
})
exports.st_harvester_tile_s = StructType({
    index: exports.st_harvester_tile_map_index_s,
    data: ref.refType(ref.types.void),
    allocated_buf_size: exports.size_t,
})
exports.uint16_t = ref.types.short
exports.st_unistore_version_s = StructType({
    major: exports.uint16_t,
    minor: exports.uint16_t,
})
exports.StUnistore_ = StructType({
})
exports.StUnistore = ref.refType(exports.StUnistore_)
exports.st_unistore_capabilities_t = exports.uint64_t
exports.st_memory_block_s = StructType({
    data: ref.refType(ref.types.void),
    size: exports.size_t,
})
exports.uintmax_t = ref.types.ulonglong
exports.int64_t = ref.types.longlong
exports.st_unistore_file_time_t = exports.int64_t
exports.st_unistore_file_info_s = StructType({
    size: exports.uintmax_t,
    last_modified: exports.st_unistore_file_time_t,
    _reserved: ArrayType(exports.uint64_t, 14),
})
exports.st_unistore_flags_t = exports.uint64_t
exports.st_unistore_error_e = {
    st_unistore_success: 0,
    st_unistore_error_bad_alloc: 1,
    st_unistore_error_capability_not_supported: 2,
    st_unistore_error_invalid_argument: 3,
    st_unistore_error_bad_file_id: 4,
    st_unistore_error_file_not_found: 5,
    st_unistore_error_already_exists: 6,
    st_unistore_error_permission_denied: 7,
    st_unistore_error_io_failed: 8,
    st_unistore_error_size_limit_exceeded: 9,
    st_unistore_error_time_point_out_of_range: 10,
    st_unistore_error_resource_unavailable: 11,
    st_unistore_error_would_copy: 12,
    st_unistore_error_unknown: -1,
}
exports.st_unistore_get_file_info_by_id_callback_t = ffi.Function(ref.types.void, [ref.refType(exports.st_unistore_file_info_s), ref.types.int, ref.refType(ref.types.void)])
exports.st_memory_allocation_s = StructType({
    size: exports.size_t,
    data: ref.refType(ref.types.void),
    alignment: exports.size_t,
})
exports.StMemoryResource_ = StructType({
})
exports.StMemoryResource = ref.refType(exports.StMemoryResource_)
exports.st_memory_resource_dispatch_table_s = StructType({
    allocate: ffi.Function(exports.st_memory_allocation_s, [exports.StMemoryResource, exports.size_t, exports.size_t]),
    try_resize: ffi.Function(exports.st_memory_allocation_s, [exports.StMemoryResource, exports.st_memory_allocation_s, exports.size_t]),
    deallocate: ffi.Function(ref.types.void, [exports.StMemoryResource, exports.st_memory_allocation_s]),
})
exports.st_memory_resource_s = StructType({
    dispatch: ref.refType(exports.st_memory_resource_dispatch_table_s),
    resource: exports.StMemoryResource,
})
exports.st_unistore_load_callback_t = ffi.Function(ref.types.void, [exports.st_memory_allocation_s, ref.refType(exports.st_unistore_file_info_s), ref.types.int, ref.refType(ref.types.void)])
exports.st_mutable_memory_block_s = StructType({
    data: ref.refType(ref.types.void),
    size: exports.size_t,
})
exports.st_unistore_load_to_buffer_callback_t = ffi.Function(ref.types.void, [exports.size_t, ref.refType(exports.st_unistore_file_info_s), ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_store_callback_t = ffi.Function(ref.types.void, [ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_remove_callback_t = ffi.Function(ref.types.void, [ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_rename_callback_t = ffi.Function(ref.types.void, [ref.types.int, ref.refType(ref.types.void)])
exports.StUnistoreFileHandle_ = StructType({
})
exports.StUnistoreFileHandle = ref.refType(exports.StUnistoreFileHandle_)
exports.st_unistore_open_callback_t = ffi.Function(ref.types.void, [exports.StUnistoreFileHandle, ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_close_callback_t = ffi.Function(ref.types.void, [ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_get_file_info_by_handle_callback_t = ffi.Function(ref.types.void, [ref.refType(exports.st_unistore_file_info_s), ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_read_callback_t = ffi.Function(ref.types.void, [exports.size_t, ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_write_callback_t = ffi.Function(ref.types.void, [exports.size_t, ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_resize_callback_t = ffi.Function(ref.types.void, [ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_flush_callback_t = ffi.Function(ref.types.void, [ref.types.int, ref.refType(ref.types.void)])
exports.st_unistore_dispatch_table_s = StructType({
    api_version: ffi.Function(exports.st_unistore_version_s, [exports.StUnistore]),
    name: ffi.Function(exports.st_string_view_s, [exports.StUnistore]),
    capabilities: ffi.Function(exports.st_unistore_capabilities_t, [exports.StUnistore]),
    subprotocol: ffi.Function(exports.st_string_view_s, [exports.StUnistore]),
    get_file_info_by_id: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, ref.refType(exports.st_unistore_file_info_s), exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_get_file_info_by_id: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_unistore_flags_t, exports.st_unistore_get_file_info_by_id_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    load: ffi.Function(exports.st_memory_allocation_s, [exports.StUnistore, exports.st_memory_block_s, exports.st_memory_resource_s, ref.refType(exports.st_unistore_file_info_s), exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_load: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_memory_resource_s, exports.st_bool_t, exports.st_unistore_flags_t, exports.st_unistore_load_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    load_to_buffer: ffi.Function(exports.size_t, [exports.StUnistore, exports.st_memory_block_s, exports.st_mutable_memory_block_s, ref.refType(exports.st_unistore_file_info_s), exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_load_to_buffer: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_mutable_memory_block_s, exports.st_bool_t, exports.st_unistore_flags_t, exports.st_unistore_load_to_buffer_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    store: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_memory_block_s, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_store: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_memory_block_s, exports.st_unistore_flags_t, exports.st_unistore_store_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    remove: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_remove: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_unistore_flags_t, exports.st_unistore_remove_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    rename: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_memory_block_s, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_rename: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_memory_block_s, exports.st_unistore_flags_t, exports.st_unistore_rename_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    open: ffi.Function(exports.StUnistoreFileHandle, [exports.StUnistore, exports.st_memory_block_s, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_open: ffi.Function(ref.types.void, [exports.StUnistore, exports.st_memory_block_s, exports.st_unistore_flags_t, exports.st_unistore_open_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    close: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_close: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.st_unistore_flags_t, exports.st_unistore_close_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    get_file_info_by_handle: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, ref.refType(exports.st_unistore_file_info_s), exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_get_file_info_by_handle: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.st_unistore_flags_t, exports.st_unistore_get_file_info_by_handle_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    read: ffi.Function(exports.size_t, [exports.StUnistore, exports.StUnistoreFileHandle, exports.uintmax_t, exports.st_mutable_memory_block_s, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_read: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.uintmax_t, exports.st_mutable_memory_block_s, exports.st_unistore_flags_t, exports.st_unistore_read_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    write: ffi.Function(exports.size_t, [exports.StUnistore, exports.StUnistoreFileHandle, exports.uintmax_t, exports.st_memory_block_s, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_write: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.uintmax_t, exports.st_memory_block_s, exports.st_unistore_flags_t, exports.st_unistore_write_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    resize: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.uintmax_t, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_resize: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.uintmax_t, exports.st_unistore_flags_t, exports.st_unistore_resize_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
    flush: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.st_unistore_flags_t, ref.refType(ref.types.int)]),
    async_flush: ffi.Function(ref.types.void, [exports.StUnistore, exports.StUnistoreFileHandle, exports.st_unistore_flags_t, exports.st_unistore_flush_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]),
})
exports.st_unistore_s = StructType({
    dispatch: ref.refType(exports.st_unistore_dispatch_table_s),
    unistore: exports.StUnistore,
})

exports.loadHarvesterLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_harvester_get_last_error_description': [exports.st_string_view_s, []],
        'st_create_harvester': [exports.StHarvester, [exports.size_t, exports.size_t, exports.st_unistore_s, exports.StHarvesterDatabase, ref.refType(ref.types.int)]],
        'st_destroy_harvester': [ref.types.void, [exports.StHarvester, ref.refType(ref.types.int)]],
        'st_harvester_execute_job': [ref.types.void, [exports.StHarvester, exports.StHarvesterDatabase, exports.StHarvesterTileMap, exports.StHarvesterJob, exports.st_harvester_diagnostic_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]],
        'st_harvester_execute_job_list': [ref.types.void, [exports.StHarvester, exports.StHarvesterDatabase, exports.StHarvesterJobList, exports.st_harvester_diagnostic_callback_t, ref.refType(ref.types.void), ref.refType(ref.types.int)]],
        'st_harvester_stop': [ref.types.void, [exports.StHarvester, ref.refType(ref.types.int)]],
        'st_harvester_job_get_level': [exports.size_t, [exports.StHarvesterJob, ref.refType(ref.types.int)]],
        'st_harvester_job_get_data_type': [ref.types.int, [exports.StHarvesterJob, ref.refType(ref.types.int)]],
        'st_harvester_job_get_name': [exports.st_string_view_s, [exports.StHarvesterJob, ref.refType(ref.types.int)]],
        'st_harvester_job_get_tile_count': [exports.size_t, [exports.StHarvesterJob, exports.StHarvesterTileMap, ref.refType(ref.types.int)]],
        'st_harvester_create_textures': [exports.StHarvesterTextures, [exports.st_unistore_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_destroy_textures': [ref.types.void, [exports.StHarvesterTextures, ref.refType(ref.types.int)]],
        'st_harvester_create_asset_library': [exports.StHarvesterAssetLibrary, [exports.st_unistore_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_destroy_asset_library': [ref.types.void, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_asset_library_dump_asset_list_to_memory': [ref.types.void, [exports.StHarvesterAssetLibrary, ref.refType(ref.refType(ref.types.void)), ref.refType(exports.size_t), ref.refType(ref.types.int)]],
        'st_harvester_asset_library_dump_asset_list_to_file': [ref.types.void, [exports.StHarvesterAssetLibrary, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_create_database': [exports.StHarvesterDatabase, [exports.st_unistore_s, exports.st_unistore_s, ref.refType(ref.types.int)]],
        'st_harvester_destroy_database': [ref.types.void, [exports.StHarvesterDatabase, ref.refType(ref.types.int)]],
        'st_harvester_import_vector_dataset_from_file': [exports.StHarvesterMask, [exports.StHarvesterDatabase, exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_import_vector_dataset_from_memory': [exports.StHarvesterMask, [exports.StHarvesterDatabase, ref.refType(ref.types.void), exports.size_t, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_export_vector_dataset_to_file_by_box': [ref.types.void, [exports.StHarvesterDatabase, exports.st_string_view_s, exports.st_string_view_s, exports.st_string_view_s, ref.types.double, ref.types.double, ref.types.double, ref.types.double, ref.refType(ref.types.int)]],
        'st_harvester_export_vector_dataset_to_memory_by_box': [ref.types.void, [exports.StHarvesterDatabase, ref.refType(ref.refType(ref.types.void)), ref.refType(exports.size_t), exports.st_string_view_s, exports.st_string_view_s, ref.types.double, ref.types.double, ref.types.double, ref.types.double, ref.refType(ref.types.int)]],
        'st_harvester_export_vector_dataset_to_file_by_tm': [ref.types.void, [exports.StHarvesterDatabase, exports.st_string_view_s, exports.st_string_view_s, exports.st_string_view_s, exports.StHarvesterTileMap, ref.refType(ref.types.int)]],
        'st_harvester_export_vector_dataset_to_memory_by_tm': [ref.types.void, [exports.StHarvesterDatabase, ref.refType(ref.refType(ref.types.void)), ref.refType(exports.size_t), exports.st_string_view_s, exports.st_string_view_s, exports.StHarvesterTileMap, ref.refType(ref.types.int)]],
        'st_harvester_destroy_memory_buffer': [ref.types.void, [ref.refType(ref.types.void), ref.refType(ref.types.int)]],
        'st_harvester_reset_vector_cache': [ref.types.void, [exports.StHarvester, ref.refType(ref.types.int)]],
        'st_harvester_create_tile_map': [exports.StHarvesterTileMap, [ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_mask_tile_map': [exports.StHarvesterTileMap, [exports.StHarvesterMask, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_face_tile_map': [exports.StHarvesterTileMap, [ref.types.int, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_world_tile_map': [exports.StHarvesterTileMap, [ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_raster_extents_tile_map': [exports.StHarvesterTileMap, [exports.st_string_view_s, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_vector_extents_tile_map': [exports.StHarvesterTileMap, [exports.st_string_view_s, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_merged_tile_map': [exports.StHarvesterTileMap, [exports.StHarvesterTileMap, exports.StHarvesterTileMap, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_edited_areas_tile_map': [exports.StHarvesterTileMap, [exports.StHarvesterDatabase, ref.refType(exports.st_string_view_s), exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_tile_map_add_tile': [ref.types.void, [exports.StHarvesterTileMap, ref.types.int, exports.size_t, exports.size_t, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_tile_map_get_size': [exports.size_t, [exports.StHarvesterTileMap, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_tile_map_get_array': [ref.types.void, [exports.StHarvesterTileMap, ref.refType(exports.st_harvester_tile_map_index_s), exports.size_t, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_destroy_tile_map': [ref.types.void, [exports.StHarvesterTileMap, ref.refType(ref.types.int)]],
        'st_harvester_create_proj4_mask': [exports.StHarvesterMask, [ref.refType(ref.types.double), ref.refType(ref.types.double), exports.size_t, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_create_wkt_mask': [exports.StHarvesterMask, [ref.refType(ref.types.double), ref.refType(ref.types.double), exports.size_t, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_create_ogr_mask': [exports.StHarvesterMask, [exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_ogr_mask_save_to_file': [ref.types.void, [exports.StHarvesterMask, exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_ogr_mask_save_to_memory': [ref.types.void, [exports.StHarvesterMask, ref.refType(ref.refType(ref.types.void)), ref.refType(exports.size_t), exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_destroy_mask': [ref.types.void, [exports.StHarvesterMask, ref.refType(ref.types.int)]],
        'st_harvester_create_generated_presets': [exports.StHarvesterGeneratedPresets, [ref.refType(ref.types.int)]],
        'st_harvester_destroy_generated_presets': [ref.types.void, [exports.StHarvesterGeneratedPresets, ref.refType(ref.types.int)]],
        'st_harvester_create_vector_layer_fields_info': [exports.st_harvester_layer_fields_info_s, [exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_destroy_vector_layer_fields_info': [ref.types.void, [exports.st_harvester_layer_fields_info_s, ref.refType(ref.types.int)]],
        'st_harvester_create_retile_raster_dataset_job': [exports.StHarvesterJob, [exports.st_string_view_s, ref.types.int, exports.size_t, exports.st_bool_t, ref.types.int, exports.StHarvesterMask, ref.refType(ref.types.int)]],
        'st_harvester_create_mipmap_job': [exports.StHarvesterJob, [ref.types.int, exports.size_t, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_borders_job': [exports.StHarvesterJob, [ref.types.int, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_upsampling_job': [exports.StHarvesterJob, [ref.types.int, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_blur_raster_job': [exports.StHarvesterJob, [ref.types.int, exports.size_t, ref.types.double, ref.refType(ref.types.int)]],
        'st_harvester_create_water_mask_job': [exports.StHarvesterJob, [ref.refType(ref.types.int)]],
        'st_harvester_create_rasterize_water_mask_job': [exports.StHarvesterJob, [ref.refType(ref.types.int)]],
        'st_harvester_create_roads_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_rasterize_decals_job': [exports.StHarvesterJob, [exports.StHarvesterTextures, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_rasterize_fields_job': [exports.StHarvesterJob, [exports.StHarvesterTextures, ref.refType(ref.types.int)]],
        'st_harvester_create_fields_decals_job': [exports.StHarvesterJob, [exports.StHarvesterTextures, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_create_snow_mask_job': [exports.StHarvesterJob, [exports.StHarvesterTextures, ref.refType(ref.types.int)]],
        'st_harvester_create_fields_alpha_job': [exports.StHarvesterJob, [ref.refType(ref.types.int)]],
        'st_harvester_create_generate_presets_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.StHarvesterGeneratedPresets, ref.refType(ref.types.int)]],
        'st_harvester_create_place_presets_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.StHarvesterGeneratedPresets, ref.refType(ref.types.int)]],
        'st_harvester_create_city_substrate_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, exports.StHarvesterGeneratedPresets, ref.refType(ref.types.int)]],
        'st_harvester_create_wang_city_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_wang_city_substrate_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_place_settlements_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_settlements_footprint_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, ref.refType(ref.types.int)]],
        'st_harvester_create_dem_bbox_job': [exports.StHarvesterJob, [exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_flatland_job': [exports.StHarvesterJob, [ref.refType(ref.types.int)]],
        'st_harvester_create_coastline_job': [exports.StHarvesterJob, [exports.st_string_view_s, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_align_rivers_job': [exports.StHarvesterJob, [exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_align_roads_job': [exports.StHarvesterJob, [ref.refType(ref.types.int)]],
        'st_harvester_create_retile_custom_height_job': [exports.StHarvesterJob, [exports.st_string_view_s, exports.st_string_view_s, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_change_coverage_value_job': [exports.StHarvesterJob, [exports.st_harvester_coverage_type_t, exports.st_harvester_coverage_type_t, exports.size_t, exports.StHarvesterMask, ref.refType(ref.types.int)]],
        'st_harvester_create_sea_floor_job': [exports.StHarvesterJob, [ref.types.double, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_embed_masks_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_replace_coverage_job': [exports.StHarvesterJob, [exports.st_harvester_coverage_type_t, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_mesh_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_power_lines_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_generic_objects_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_extended_brushes_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_fields_vegetation_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_fields_brush_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_buildings_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_create_radar_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, ref.refType(ref.types.int)]],
        'st_harvester_create_extract_quarters_job': [exports.StHarvesterJob, [exports.StHarvesterAssetLibrary, exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_create_export_raster_job': [exports.StHarvesterJob, [exports.st_string_view_s, ref.types.int, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_read_raster_tiles_job': [exports.StHarvesterJob, [ref.refType(exports.st_harvester_tile_s), exports.size_t, ref.types.int, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_write_raster_tiles_job': [exports.StHarvesterJob, [ref.refType(exports.st_harvester_tile_s), exports.size_t, ref.types.int, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_update_meta_data_job': [exports.StHarvesterJob, [exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_create_accumulate_meta_data_job': [exports.StHarvesterJob, [ref.refType(ref.types.int)]],
        'st_harvester_create_get_meta_data_job': [exports.StHarvesterJob, [ref.refType(ref.refType(ref.refType(ref.types.char))), ref.refType(ref.refType(exports.size_t)), ref.refType(exports.size_t), exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_destroy_string_array': [ref.types.void, [ref.refType(ref.refType(ref.types.char)), ref.refType(exports.size_t), exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_destroy_job': [ref.types.void, [exports.StHarvesterJob, ref.refType(ref.types.int)]],
        'st_harvester_create_job_list': [exports.StHarvesterJobList, [exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_destroy_job_list': [ref.types.void, [exports.StHarvesterJobList, ref.refType(ref.types.int)]],
        'st_harvester_job_list_append': [ref.types.void, [exports.StHarvesterJobList, exports.StHarvesterTileMap, exports.StHarvesterJob, ref.refType(ref.types.int)]],
        'st_harvester_job_list_get_tile_count': [exports.size_t, [exports.StHarvesterJobList, ref.refType(ref.types.int)]],
        'st_harvester_job_list_get_name': [exports.st_string_view_s, [exports.StHarvesterJobList, ref.refType(ref.types.int)]],
        'st_harvester_create_vector_derivatives_job_list': [exports.StHarvesterJobList, [exports.StHarvesterDatabase, exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, exports.st_string_view_s, ref.refType(exports.st_string_view_s), ref.refType(exports.StHarvesterTileMap), exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_create_vector_patch_job_list': [exports.StHarvesterJobList, [exports.StHarvesterDatabase, exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_gen_degree_grid': [ref.types.void, [exports.st_string_view_s, ref.types.double, ref.types.double, ref.types.double, ref.types.double, ref.types.double, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_prepare_data_for_osm_loader': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_osm_extract_islands': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_make_panorama_pyramid': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_rgb_to_coverage': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, exports.st_string_view_s, exports.st_byte_t, ref.refType(ref.types.int)]],
        'st_harvester_copy_projection_ref': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, ref.refType(ref.types.int)]],
        'st_harvester_scene_decals_to_shape_files': [ref.types.void, [exports.st_string_view_s, exports.StHarvesterDatabase, exports.StHarvesterAssetLibrary, ref.refType(ref.types.int)]],
        'st_harvester_scene_decals_to_geo_rasters': [ref.types.void, [exports.st_string_view_s, exports.StHarvesterDatabase, exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, exports.st_string_view_s, ref.types.double, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_gen_face_perlin_noise': [ref.types.void, [exports.st_string_view_s, ref.types.int, ref.types.double, ref.types.double, ref.types.double, ref.types.double, ref.types.double, ref.types.int, ref.types.int, ref.types.double, ref.refType(ref.types.int)]],
        'st_harvester_gen_noise_with_overlapped_borders': [ref.types.void, [exports.st_string_view_s, ref.types.int, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_rasterize_vector_wang_tile': [ref.types.void, [exports.st_string_view_s, ref.types.char, ref.types.int, ref.types.double, ref.types.int, ref.types.int, ref.types.int, exports.st_bool_t, exports.StHarvesterAssetLibrary, exports.StHarvesterTextures, exports.st_unistore_s, ref.refType(ref.types.int)]],
        'st_harvester_get_tile_base_size': [exports.size_t, [ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_get_tile_border_size': [exports.size_t, [ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_get_tile_pixel_format': [ref.types.int, [ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_get_bytes_per_pixel': [exports.size_t, [ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_get_face_size_in_pixels': [exports.size_t, [ref.types.int, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_get_pixel_size_in_meters': [ref.types.double, [ref.types.int, exports.size_t, ref.refType(ref.types.int)]],
        'st_harvester_simplify_shp': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, ref.types.double, ref.types.double, ref.types.int, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_dissolve_shp': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, ref.types.double, ref.types.int, ref.refType(ref.types.int)]],
        'st_harvester_split_shp_by_points_count': [ref.types.void, [exports.st_string_view_s, exports.st_string_view_s, ref.types.int, ref.types.int, ref.refType(ref.types.int)]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}
exports.st_heightmap_editor_error_e = {
    st_heightmap_editor_success: 0,
    st_heightmap_editor_runtime_error: 1,
    st_heightmap_editor_array_too_small_error: 2,
}
exports.st_heightmap_editor_brush_type_e = {
    st_heightmap_editor_brush_type_flatten: 0,
    st_heightmap_editor_brush_type_smooth: 1,
    st_heightmap_editor_brush_type_sculpt: 2,
}
exports.st_heightmap_editor_brush = StructType({
    type: ref.types.int,
    lat: ref.types.float,
    lon: ref.types.float,
    radius: ref.types.float,
    falloff: ref.types.float,
    value: ref.types.float,
})

exports.loadHeightmapEditorLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_heightmap_editor_initialize': [ref.types.void, [ref.refType(ref.types.int)]],
        'st_heightmap_editor_load_tiles': [ref.types.void, [ref.refType(exports.st_harvester_tile_s), exports.size_t, exports.size_t, ref.refType(ref.types.int)]],
        'st_heightmap_editor_unload_tiles': [ref.types.void, [ref.refType(ref.types.int)]],
        'st_heightmap_editor_apply_brush': [ref.types.void, [exports.size_t, ref.refType(exports.st_heightmap_editor_brush), ref.refType(ref.refType(exports.st_harvester_tile_s)), exports.size_t, ref.refType(exports.size_t), ref.refType(ref.types.int)]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}
exports.StProgramOptValue_ = StructType({
})
exports.StProgramOptValue = ref.refType(exports.StProgramOptValue_)

exports.loadCompositeAdapterLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_unistore_composite_adapter': [exports.st_unistore_s, [ref.refType(exports.st_unistore_s), exports.size_t]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}

exports.loadBundleFsAdapterLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_unistore_bundle_fs_adapter': [exports.st_unistore_s, [exports.st_unistore_s]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}

exports.loadLoggingAdapterLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_unistore_logging_adapter': [exports.st_unistore_s, [exports.st_unistore_s]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}

exports.loadRamStorageLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_ram_storage': [exports.st_unistore_s, [exports.st_string_view_s]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}

exports.loadFsStorageLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_fs_storage': [exports.st_unistore_s, [exports.st_string_view_s]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}
exports.st_bundle_storage_access_e = {
    st_bundle_storage_access_readonly: 0,
    st_bundle_storage_access_writable: 1,
}

exports.loadBundleStorageLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_bundle_storage': [exports.st_unistore_s, [exports.st_string_view_s, ref.types.int]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}
exports.StUnistoreNetworkAdapterServer_ = StructType({
})
exports.StUnistoreNetworkAdapterServer = ref.refType(exports.StUnistoreNetworkAdapterServer_)
exports.st_unistore_network_adapter_server_parameters_s = StructType({
    worker_thread_count: exports.size_t,
    local_address: exports.st_string_view_s,
    enable_compression: exports.st_bool_t,
    target_file_block_size: exports.size_t,
})
exports.st_unistore_network_adapter_server_stop_callback_t = ffi.Function(ref.types.void, [exports.st_bool_t, ref.refType(ref.types.void)])

exports.loadNetworkAdapterServerLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_network_adapter_server_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore_network_adapter_server': [exports.StUnistoreNetworkAdapterServer, [exports.st_unistore_s]],
        'st_destroy_unistore_network_adapter_server': [ref.types.void, [exports.StUnistoreNetworkAdapterServer]],
        'st_unistore_network_adapter_server_start': [exports.st_bool_t, [exports.StUnistoreNetworkAdapterServer, ref.refType(exports.st_unistore_network_adapter_server_parameters_s), exports.st_unistore_network_adapter_server_stop_callback_t, ref.refType(ref.types.void)]],
        'st_unistore_network_adapter_server_stop': [ref.types.void, [exports.StUnistoreNetworkAdapterServer]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}
exports.st_unistore_network_adapter_transport_protocol_e = {
    st_unistore_network_adapter_transport_protocol_udp: 0,
    st_unistore_network_adapter_transport_protocol_tcp: 1,
}

exports.loadNetworkAdapterClientLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_unistore_network_adapter_client': [exports.st_unistore_s, [exports.st_string_view_s, ref.types.int, exports.int64_t]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}

exports.loadUnistoreSyncAdapterLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_unistore_sync_adapter': [exports.st_unistore_s, [exports.st_unistore_s]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}

exports.loadUnistoreAsyncAdapterLibrary = function(path) { 
    const lib = ffi.Library(path, {
        'st_unistore_last_error_message': [exports.st_string_view_s, []],
        'st_create_unistore': [exports.st_unistore_s, [exports.StProgramOptValue]],
        'st_destroy_unistore': [ref.types.void, [exports.StUnistore]],
        'st_create_unistore_async_adapter': [exports.st_unistore_s, [exports.st_unistore_s, exports.size_t]],
    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}
