---
title: Rendering System
description: TaleWorlds.Native.dll rendering system class reference
---
# Rendering System

## Mental Model

Treat `Rendering System` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Overview

The rendering system is responsible for all visual content in the game, including meshes, lighting, shadows, post-processing effects, terrain, water, flora, particles, and weather. It is built around a scene/view model (`rglScene` + `rglScene_view`), a D3D11 GPU device layer (`rglGPU_device` and friends), and a large post-processing graph (`rglPostfx_graph` with many `rgl*_fxnode` subclasses). Render work is scheduled onto a dedicated render thread (`rglRender_thread`) via a family of task types, and all GPU resources flow through the asset factory and metadata pipeline (`rglAsset_factory_class`, `rglAsset_metadata*`).

> **Verification note:** The following symbols were not found in native-1.2.9 or native-1.4.5; neither tree is v1.3.15, so existence in the v1.3.15 decompile cannot be ruled out — unverified in this environment: `rglSSR_fxnode`, `rglWater_body`.

## GPU Device

### rglGPU_device

Abstract GPU device interface. Base class for backend-specific device implementations.

```cpp
rglGPU_device::vftable
```

### rglGPU_device_d3d11

DirectX 11 GPU device implementation.

```cpp
rglGPU_device_d3d11::vftable
```

**Platform:** Windows DirectX 11

### rglGraphics_command_list

Graphics command list abstraction for recording GPU work.

```cpp
rglGraphics_command_list::vftable
```

### rglGraphics_command_list_d3d11

DirectX 11 graphics command list implementation.

```cpp
rglGraphics_command_list_d3d11::vftable
```

## Scene

### rglScene

Scene renderer. Manages rendering of all entities in a scene.

```cpp
rglScene::vftable
```

**Responsibilities:**
- Add/remove render entities
- Execute the scene render pass
- Own scene-level render state

### rglScene_view

Scene view. Defines the render viewport and camera for a scene.

```cpp
rglScene_view::vftable
```

### rglScene_view_clear_task

Task that clears the scene view (color, depth, and stencil buffers).

```cpp
rglScene_view_clear_task::vftable
```

## Entity

### rglEntity

Render entity. The basic renderable unit in a scene.

```cpp
rglEntity::vftable
```

**Composition:**
- Transform matrix
- Mesh data
- Material
- Render state

### rglEntity_component

Component that can be attached to a render entity.

```cpp
rglEntity_component::vftable
```

### rglSimple_game_object

Simple game object wrapper for lightweight renderables.

```cpp
rglSimple_game_object::vftable
```

## Mesh

### rglMesh

Mesh render class. Handles 3D model geometry data and rendering.

```cpp
rglMesh::vftable
```

**Data:**
- Vertex buffer
- Index buffer
- Material
- Bounding box

### rglMesh_vertex_buffer_data

Vertex buffer data container.

```cpp
rglMesh_vertex_buffer_data::vftable
```

### rglMesh_index_buffer_data

Index buffer data container.

```cpp
rglMesh_index_buffer_data::vftable
```

### rglMesh_vertex_buffer_gpu_holder

GPU-side holder for vertex buffer data.

```cpp
rglMesh_vertex_buffer_gpu_holder::vftable
```

### rglMesh_index_buffer_gpu_holder

GPU-side holder for index buffer data.

```cpp
rglMesh_index_buffer_gpu_holder::vftable
```

### rglMesh_clothing_properties

Clothing properties for a mesh.

```cpp
rglMesh_clothing_properties::vftable
```

### Meta_mesh

Meta mesh. Used for procedurally generated or morphed meshes.

```cpp
Meta_mesh::vftable
```

### rglMeta_mesh

rgl meta mesh implementation.

```cpp
rglMeta_mesh::vftable
```

### rglMeta_mesh_clothing_properties

Clothing properties for a meta mesh.

```cpp
rglMeta_mesh_clothing_properties::vftable
```

## Material & Shader

### rglShader

Shader. Defines the programmable stages of the render pipeline.

```cpp
rglShader::vftable
```

### rglMaterial

Material. Defines the visual properties of a surface.

```cpp
rglMaterial::vftable
```

**Properties:**
- Color
- Textures
- Lighting model
- Render state

### rglShader_compile_extensions_instance

Shader compile extensions instance.

```cpp
rglShader_compile_extensions_instance::vftable
```

### rglShader_compile_server_base

Base class for the shader compile server.

```cpp
rglShader_compile_server_base::vftable
```

### rglShader_compile_server_sndbs

Shader compile server implementation (sndbs backend).

```cpp
rglShader_compile_server_sndbs::vftable
```

### rglShader_compile_task

Asynchronous shader compilation task.

```cpp
rglShader_compile_task::vftable
```

## Texture

### rglTexture

Texture. Handles 2D image data.

```cpp
rglTexture::vftable
```

**Types:**
- 2D texture
- Cube map
- Render target
- Depth-stencil

### rglTexture_view

Texture view (shader-resource view onto texture data).

```cpp
rglTexture_view::vftable
```

### rglTexture_array_load_task

Task that loads a texture array.

```cpp
rglTexture_array_load_task::vftable
```

### rglTexture_release_later_task

Deferred texture release task.

```cpp
rglTexture_release_later_task::vftable
```

## Camera

### rglCamera_object

Camera. Defines the render viewpoint.

```cpp
rglCamera_object::vftable
```

**Properties:**
- Position
- Rotation
- Field of view
- Near/far clip planes

### rglTableau_view

Tableau view. Renders a static scene or portrait to an offscreen target.

```cpp
rglTableau_view::vftable
```

## Lighting

### rglLight

Light source. Implements directional, point, and spot lights.

```cpp
rglLight::vftable
```

**Types:**
- Directional light
- Point light
- Spot light

### rglEnvironment_map_probe_record

Environment map probe record.

```cpp
rglEnvironment_map_probe_record::vftable
```

## Terrain

### rglTerrain

Terrain. Procedurally generated or loaded terrain mesh.

```cpp
rglTerrain::vftable
```

### rglTerrain_node

Terrain node in the terrain tree.

```cpp
rglTerrain_node::vftable
```

### rglTerrain_layer_instance

Instance of a terrain layer.

```cpp
rglTerrain_layer_instance::vftable
```

### rglTerrain_renderer

Terrain renderer.

```cpp
rglTerrain_renderer::vftable
```

### rglTerrain_shaders_generate_headers_task

Task that generates terrain shader headers.

```cpp
rglTerrain_shaders_generate_headers_task::vftable
```

## Post-Processing

### rglPostfx_graph

Post-processing graph. Chains post-processing nodes into a full-screen effect pipeline.

```cpp
rglPostfx_graph::vftable
```

### rglPostfx_node

Base class for all post-processing nodes.

```cpp
rglPostfx_node::vftable
```

### rglPostfx_compute_node

Compute-shader post-processing node.

```cpp
rglPostfx_compute_node::vftable
```

### rglDepth_chain_node

Depth chain node. Builds a hierarchical depth representation for depth-based effects.

```cpp
rglDepth_chain_node::vftable
```

### rglHiZ_fxnode

Hi-Z (hierarchical depth) node.

```cpp
rglHiZ_fxnode::vftable
```

### rglSAO_fxnode

Screen-space ambient occlusion (SAO) node.

```cpp
rglSAO_fxnode::vftable
```

### rglSao_temporal_fxnode

Temporal SAO accumulation node.

```cpp
rglSao_temporal_fxnode::vftable
```

### rglDof_sep_node

Depth-of-field separation node.

```cpp
rglDof_sep_node::vftable
```

### rglDof_blur_final_node

Depth-of-field final blur node.

```cpp
rglDof_blur_final_node::vftable
```

### rglSSR_fxnode

Screen-space reflections node.

```cpp
rglSSR_fxnode::vftable
```

### rglSsr_blur_fxnode

SSR blur node.

```cpp
rglSsr_blur_fxnode::vftable
```

### rglSsr_raycast_fxnode

SSR raycast node.

```cpp
rglSsr_raycast_fxnode::vftable
```

### rglTaa_filter_fxnode

Temporal anti-aliasing (TAA) filter node.

```cpp
rglTaa_filter_fxnode::vftable
```

### rglTaa_resolve_fxnode

TAA resolve node.

```cpp
rglTaa_resolve_fxnode::vftable
```

### rglFsr_upsample_node

FidelityFX Super Resolution (FSR) upsample node.

```cpp
rglFsr_upsample_node::vftable
```

### rglFsr_sharpen_node

FSR sharpening node.

```cpp
rglFsr_sharpen_node::vftable
```

### rglDlss_fxnode

NVIDIA DLSS (deep learning super sampling) node.

```cpp
rglDlss_fxnode::vftable
```

### rglShadowmap_combine_fxnode

Shadow map combine node.

```cpp
rglShadowmap_combine_fxnode::vftable
```

### rglContour_final_fxnode

Contour (outline) final node.

```cpp
rglContour_final_fxnode::vftable
```

### rglHalf_res_velocity_and_depth_node

Half-resolution velocity and depth node.

```cpp
rglHalf_res_velocity_and_depth_node::vftable
```

### rglPosftx_halfres_combine_node

Half-resolution post-processing combine node.

```cpp
rglPosfx_halfres_combine_node::vftable
```

### rglHistory_node

History buffer node. Stores previous-frame data for temporal effects (TAA, SSR).

```cpp
rglHistory_node::vftable
```

### rglHistogram_node

Histogram node. Computes luminance histograms for auto-exposure.

```cpp
rglHistogram_node::vftable
```

### rglVt_resolve_node

Virtual texture resolve node.

```cpp
rglVt_resolve_node::vftable
```

### rglConvolve_fxnode

Generic convolution node.

```cpp
rglConvolve_fxnode::vftable
```

### rglPingPong_fxnode

Ping-pong buffer node. Alternates read/write targets for iterative effects.

```cpp
rglPingPong_fxnode::vftable
```

### rglSmaa_edge_detection_node

SMAA edge detection node.

```cpp
rglSmaa_edge_detection_node::vftable
```

### rglSmaa_blend_weight_calc_node

SMAA blend weight calculation node.

```cpp
rglSmaa_blend_weight_calc_node::vftable
```

### rglAfter_postfx_node

Final node after post-processing. Writes the completed frame to the backbuffer.

```cpp
rglAfter_postfx_node::vftable
```

### rglPRT_renderer

PRT (precomputed radiance transfer) renderer.

```cpp
rglPRT_renderer::vftable
```

### rglSSS_specular_add_fxnode

Subsurface scattering (SSS) specular add node.

```cpp
rglSSS_specular_add_fxnode::vftable
```

### rglSSS_fxnode

Subsurface scattering node.

```cpp
rglSSS_fxnode::vftable
```

### rglBeta_indicator_view

Beta indicator view. Overlays a watermark on beta builds.

```cpp
rglBeta_indicator_view::vftable
```

### rglCas_fxnode

Contrast adaptive sharpening (CAS) node.

```cpp
rglCas_fxnode::vftable
```

## Flora

### rglFlora_entity

Flora (vegetation) entity.

```cpp
rglFlora_entity::vftable
```

### rglFlora_kind

Flora kind. Describes a vegetation species or type.

```cpp
rglFlora_kind::vftable
```

### rglFlora_seasonal_kind

Seasonal flora kind variant.

```cpp
rglFlora_seasonal_kind::vftable
```

### rglFlora_render_task

Asynchronous flora render task.

```cpp
rglFlora_render_task::vftable
```

## Water

### rglWater_body

Water body. Renders a water surface with reflection and refraction.

```cpp
rglWater_body::vftable
```

### water_body

Water body implementation.

```cpp
water_body::vftable
```

### water_flowmap

Water flow map. Texture describing current direction and speed for water surfaces.

```cpp
water_flowmap::vftable
```

## Particle System

### rglGpu_particle_system

GPU particle system.

```cpp
rglGpu_particle_system::vftable
```

### rglParticle_system_instanced

Instanced particle system.

```cpp
rglParticle_system_instanced::vftable
```

### rglParticle_system_interpolator_base

Base class for particle system interpolators.

```cpp
rglParticle_system_interpolator_base::vftable
```

### rglParticle_system_interpolator_definition

Particle system interpolator definition.

```cpp
rglParticle_system_interpolator_definition::vftable
```

### rglParticle_effect

Particle effect. A configurable effect made of one or more emitters.

```cpp
rglParticle_effect::vftable
```

### rglParticle_emitter

Particle emitter. Spawns particles with initial parameters.

```cpp
rglParticle_emitter::vftable
```

## Effects

### decal_instance

Decal instance. A projected texture applied to a surface.

```cpp
decal_instance::vftable
```

### decal_placer

Decal placer. Projects decals onto scene geometry.

```cpp
decal_placer::vftable
```

### rglParticle_effect

Particle effect (alternate entry point).

```cpp
rglParticle_effect::vftable
```

### rglVector_field

Vector field. Applies directional forces to particles and cloth.

```cpp
rglVector_field::vftable
```

### flickering_light

Flickering light. Animated light source for torches, fire, and similar effects.

```cpp
flickering_light::vftable
```

## Render Tasks

### rglFrame_move_task

Per-frame move/update task.

```cpp
rglFrame_move_task::vftable
```

### rglRender_thread

Render thread. Executes render tasks off the main thread.

```cpp
rglRender_thread::vftable
```

### rglRender_thread_task

Base task for the render thread.

```cpp
rglRender_thread_task::vftable
```

### rglRender_thread_simple_task

Simple render thread task.

```cpp
rglRender_thread_simple_task::vftable
```

### rglRender_thread_simple_unwaitable_task

Fire-and-forget render thread task with no wait handle.

```cpp
rglRender_thread_simple_unwaitable_task::vftable
```

### rglRender_thread_waitable_task

Render thread task with a waitable completion handle.

```cpp
rglRender_thread_waitable_task::vftable
```

### rglRender_thread_block_task

Render thread blocking task.

```cpp
rglRender_thread_block_task::vftable
```

### rglParallel_for_task

Parallel-for loop task.

```cpp
rglParallel_for_task::vftable
```

### rglOro_task

Oro task. Internal render-thread task type.

```cpp
rglOro_task::vftable
```

### Async_render_task

Generic asynchronous render task.

```cpp
Async_render_task::vftable
```

## Resource Management

### rglResource

Base class for render resources.

```cpp
rglResource::vftable
```

### rglAsset_factory_class

Asset factory. Creates render assets from metadata.

```cpp
rglAsset_factory_class::vftable
```

### rglAsset_load_filter

Asset load filter. Selects which assets to load.

```cpp
rglAsset_load_filter::vftable
```

### rglAsset_metadata

Base asset metadata.

```cpp
rglAsset_metadata::vftable
```

### rglAsset_metadata_texture

Texture asset metadata.

```cpp
rglAsset_metadata_texture::vftable
```

### rglAsset_metadata_shader

Shader asset metadata.

```cpp
rglAsset_metadata_shader::vftable
```

### rglAsset_metadata_material

Material asset metadata.

```cpp
rglAsset_metadata_material::vftable
```

### rglAsset_metadata_skeleton

Skeleton asset metadata.

```cpp
rglAsset_metadata_skeleton::vftable
```

### rglAsset_metadata_geometry_file

Geometry file asset metadata.

```cpp
rglAsset_metadata_geometry_file::vftable
```

### rglPage_resolver_granite

Granite virtual texture page resolver.

```cpp
rglPage_resolver_granite::vftable
```

### rglEngine_async_loader_task

Engine asynchronous asset load task.

```cpp
rglEngine_async_loader_task::vftable
```

## Skybox

### rglAtmosphere

Atmosphere. Renders the sky and atmospheric effects.

```cpp
rglAtmosphere::vftable
```

### rglInterpolated_atmosphere

Interpolated atmosphere. Blends between weather states over time.

```cpp
rglInterpolated_atmosphere::vftable
```

### Weather

Weather state base class.

```cpp
Weather::vftable
```

### Weather_rainy

Rainy weather variant.

```cpp
Weather_rainy::vftable
```

### Weather_snowy

Snowy weather variant.

```cpp
Weather_snowy::vftable
```

## Occlusion

### rglSoftware_occlusion_rasterization_task

Software occlusion rasterization task.

```cpp
rglSoftware_occlusion_rasterization_task::vftable
```

### DepthBufferRasterizer

Depth buffer rasterizer base class.

```cpp
DepthBufferRasterizer::vftable
```

### DepthBufferRasterizerScalar

Scalar depth buffer rasterizer.

```cpp
DepthBufferRasterizerScalar::vftable
```

### DepthBufferRasterizerSSE

SSE-optimized depth buffer rasterizer.

```cpp
DepthBufferRasterizerSSE::vftable
```

### DepthBufferRasterizerAVX

AVX-optimized depth buffer rasterizer.

```cpp
DepthBufferRasterizerAVX::vftable
```

## Video

### rglVideo_player

Video player.

```cpp
rglVideo_player::vftable
```

### rglVideo_player_view

Video player view.

```cpp
rglVideo_player_view::vftable
```

### rglVideo_player_vpx

VPX (VP8/VP9) video player.

```cpp
rglVideo_player_vpx::vftable
```

### rglVideo_player_get_frame_task

Asynchronous video frame fetch task.

```cpp
rglVideo_player_get_frame_task::vftable
```

## Other Rendering Classes

### rglSkeleton_model

Skeleton model.

```cpp
rglSkeleton_model::vftable
```

### rglSkinned_decal_records

Skinned decal records.

```cpp
rglSkinned_decal_records::vftable
```

### rglRope

Rope rendering.

```cpp
rglRope::vftable
```

### rglRope_physx

PhysX-simulated rope.

```cpp
rglRope_physx::vftable
```

### Agent_visuals

Agent visuals. Controls character appearance and equipment rendering.

```cpp
Agent_visuals::vftable
```

### Corpse_renderer

Corpse renderer.

```cpp
Corpse_renderer::vftable
```

### rglQuad_tree_atlas

Quad tree texture atlas.

```cpp
rglQuad_tree_atlas::vftable
```

### rglCompressor_interface

Compressor interface.

```cpp
rglCompressor_interface::vftable
```

### rglData_compressor_lz4hc

LZ4HC data compressor.

```cpp
rglData_compressor_lz4hc::vftable
```

### rglMemory_block_typeless

Typeless memory block.

```cpp
rglMemory_block_typeless::vftable
```

### rglMemory_allocator_base

Base memory allocator.

```cpp
rglMemory_allocator_base::vftable
```

### rglInterpolator_base

Base interpolator.

```cpp
rglInterpolator_base::vftable
```

### rglInterpolator

Interpolator. Blends between values over time.

```cpp
rglInterpolator::vftable
```

### rglInterpolator_base_definition

Interpolator base definition.

```cpp
rglInterpolator_base_definition::vftable
```

## Usage Example

```csharp
// Example: the rendering system is driven internally by the engine each frame.
// Modders typically interact with it indirectly through scene scripts, material
// overrides, and the mission system rather than calling these vftables directly.
// Use the native source reference to trace which postfx node or render task
// handles a given visual feature when debugging rendering glitches.
```

---

**Last updated:** 2026-10-08  
**Source version:** TaleWorlds.Native.dll v1.3.15
