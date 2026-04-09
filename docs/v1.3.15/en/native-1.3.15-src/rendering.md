---
title: 渲染系统 / Rendering System
description: TaleWorlds.Native.dll 渲染系统类参考
---

# 渲染系统 / Rendering System

## 概述 / Overview

渲染系统负责游戏中所有视觉内容的渲染，包括网格、光照、阴影、后处理效果等。

The rendering system is responsible for all visual content rendering in the game, including meshes, lights, shadows, post-processing effects, etc.

## GPU 设备 / GPU Device

### rglGPU_device

GPU 设备接口基类。

```cpp
rglGPU_device::vftable
```

### rglGPU_device_d3d11

DirectX 11 GPU 设备实现。

```cpp
rglGPU_device_d3d11::vftable
```

**平台:** Windows DirectX 11

### rglGraphics_command_list

图形命令列表。

```cpp
rglGraphics_command_list::vftable
```

### rglGraphics_command_list_d3d11

DirectX 11 图形命令列表。

```cpp
rglGraphics_command_list_d3d11::vftable
```

## 场景 / Scene

### rglScene

场景渲染器。管理场景中所有实体的渲染。

```cpp
rglScene::vftable
```

**主要方法:**
- `AddEntity()` - 添加渲染实体
- `RemoveEntity()` - 移除渲染实体
- `Render()` - 执行场景渲染

### rglScene_view

场景视图。定义渲染视口和相机。

```cpp
rglScene_view::vftable
```

### rglScene_view_clear_task

场景视图清理任务。

```cpp
rglScene_view_clear_task::vftable
```

## 实体 / Entity

### rglEntity

渲染实体。场景中的基本渲染单元。

```cpp
rglEntity::vftable
```

**组成:**
- 变换矩阵 (Transform)
- 网格数据 (Mesh)
- 材质 (Material)
- 渲染状态 (Render State)

### rglEntity_component

实体组件。

```cpp
rglEntity_component::vftable
```

### rglSimple_game_object

简单游戏对象。

```cpp
rglSimple_game_object::vftable
```

## 网格 / Mesh

### rglMesh

网格渲染类。处理 3D 模型的几何数据和渲染。

```cpp
rglMesh::vftable
```

**数据:**
- 顶点数据 (Vertex Buffer)
- 索引数据 (Index Buffer)
- 材质 (Material)
- 包围盒 (Bounding Box)

### rglMesh_vertex_buffer_data

顶点缓冲区数据。

```cpp
rglMesh_vertex_buffer_data::vftable
```

### rglMesh_index_buffer_data

索引缓冲区数据。

```cpp
rglMesh_index_buffer_data::vftable
```

### rglMesh_vertex_buffer_gpu_holder

GPU 顶点缓冲区持有者。

```cpp
rglMesh_vertex_buffer_gpu_holder::vftable
```

### rglMesh_index_buffer_gpu_holder

GPU 索引缓冲区持有者。

```cpp
rglMesh_index_buffer_gpu_holder::vftable
```

### rglMesh_clothing_properties

网格布料属性。

```cpp
rglMesh_clothing_properties::vftable
```

### Meta_mesh

元网格。用于程序化生成或变形网格。

```cpp
Meta_mesh::vftable
```

### rglMeta_mesh

rgl 元网格实现。

```cpp
rglMeta_mesh::vftable
```

### rglMeta_mesh_clothing_properties

元网格布料属性。

```cpp
rglMeta_mesh_clothing_properties::vftable
```

## 材质与着色器 / Material & Shader

### rglShader

着色器。定义渲染管线的可编程部分。

```cpp
rglShader::vftable
```

### rglMaterial

材质。定义表面的视觉属性。

```cpp
rglMaterial::vftable
```

**属性:**
- 颜色 (Color)
- 贴图 (Textures)
- 光照模型 (Lighting Model)
- 渲染状态 (Render State)

### rglShader_compile_extensions_instance

着色器编译扩展实例。

```cpp
rglShader_compile_extensions_instance::vftable
```

### rglShader_compile_server_base

着色器编译服务器基类。

```cpp
rglShader_compile_server_base::vftable
```

### rglShader_compile_server_sndbs

着色器编译服务器实现。

```cpp
rglShader_compile_server_sndbs::vftable
```

### rglShader_compile_task

着色器编译任务。

```cpp
rglShader_compile_task::vftable
```

## 纹理 / Texture

### rglTexture

纹理。处理 2D 图像数据。

```cpp
rglTexture::vftable
```

**类型:**
- 2D 纹理
- 立方体贴图
- 渲染目标
- 深度模板

### rglTexture_view

纹理视图。

```cpp
rglTexture_view::vftable
```

### rglTexture_array_load_task

纹理数组加载任务。

```cpp
rglTexture_array_load_task::vftable
```

### rglTexture_release_later_task

延迟释放纹理任务。

```cpp
rglTexture_release_later_task::vftable
```

## 相机 / Camera

### rglCamera_object

相机。定义渲染视角。

```cpp
rglCamera_object::vftable
```

**属性:**
- 位置 (Position)
- 旋转 (Rotation)
- 视场角 (FOV)
- 近/远裁剪面 (Near/Far Plane)

### rglTableau_view

Tableau 视图。

```cpp
rglTableau_view::vftable
```

## 光照 / Lighting

### rglLight

光源。实现点光源、聚光灯、方向光等。

```cpp
rglLight::vftable
```

**类型:**
- 方向光 (Directional Light)
- 点光源 (Point Light)
- 聚光灯 (Spot Light)

### rglEnvironment_map_probe_record

环境贴图探针记录。

```cpp
rglEnvironment_map_probe_record::vftable
```

## 地形 / Terrain

### rglTerrain

地形。程序化生成或加载的地形网格。

```cpp
rglTerrain::vftable
```

### rglTerrain_node

地形节点。

```cpp
rglTerrain_node::vftable
```

### rglTerrain_layer_instance

地形图层实例。

```cpp
rglTerrain_layer_instance::vftable
```

### rglTerrain_renderer

地形渲染器。

```cpp
rglTerrain_renderer::vftable
```

### rglTerrain_shaders_generate_headers_task

地形着色器头文件生成任务。

```cpp
rglTerrain_shaders_generate_headers_task::vftable
```

## 后处理 / Post-Processing

### rglPostfx_graph

后处理图。

```cpp
rglPostfx_graph::vftable
```

### rglPostfx_node

后处理节点基类。

```cpp
rglPostfx_node::vftable
```

### rglPostfx_compute_node

后处理计算节点。

```cpp
rglPostfx_compute_node::vftable
```

### rglDepth_chain_node

深度链节点。

```cpp
rglDepth_chain_node::vftable
```

### rglHiZ_fxnode

Hi-Z 节点。

```cpp
rglHiZ_fxnode::vftable
```

### rglSAO_fxnode

SAO (屏幕空间环境光遮蔽) 节点。

```cpp
rglSAO_fxnode::vftable
```

### rglSao_temporal_fxnode

时域 SAO 节点。

```cpp
rglSao_temporal_fxnode::vftable
```

### rglDof_sep_node

景深分离节点。

```cpp
rglDof_sep_node::vftable
```

### rglDof_blur_final_node

景深模糊最终节点。

```cpp
rglDof_blur_final_node::vftable
```

### rglSSR_fxnode

屏幕空间反射节点。

```cpp
rglSSR_fxnode::vftable
```

### rglSsr_blur_fxnode

SSR 模糊节点。

```cpp
rglSsr_blur_fxnode::vftable
```

### rglSsr_raycast_fxnode

SSR 光线投射节点。

```cpp
rglSsr_raycast_fxnode::vftable
```

### rglTaa_filter_fxnode

时间抗锯齿滤波节点。

```cpp
rglTaa_filter_fxnode::vftable
```

### rglTaa_resolve_fxnode

TAA 解析节点。

```cpp
rglTaa_resolve_fxnode::vftable
```

### rglFsr_upsample_node

FSR (FidelityFX 超分辨率) 上采样节点。

```cpp
rglFsr_upsample_node::vftable
```

### rglFsr_sharpen_node

FSR 锐化节点。

```cpp
rglFsr_sharpen_node::vftable
```

### rglDlss_fxnode

DLSS (深度学习超级采样) 节点。

```cpp
rglDlss_fxnode::vftable
```

### rglShadowmap_combine_fxnode

阴影图合并节点。

```cpp
rglShadowmap_combine_fxnode::vftable
```

### rglContour_final_fxnode

轮廓最终节点。

```cpp
rglContour_final_fxnode::vftable
```

### rglHalf_res_velocity_and_depth_node

半分辨率速度和深度节点。

```cpp
rglHalf_res_velocity_and_depth_node::vftable
```

### rglPosftx_halfres_combine_node

半分辨率合并节点。

```cpp
rglPosftx_halfres_combine_node::vftable
```

### rglHistory_node

历史节点。

```cpp
rglHistory_node::vftable
```

### rglHistogram_node

直方图节点。

```cpp
rglHistogram_node::vftable
```

### rglVt_resolve_node

VT 解析节点。

```cpp
rglVt_resolve_node::vftable
```

### rglConvolve_fxnode

卷积节点。

```cpp
rglConvolve_fxnode::vftable
```

### rglPingPong_fxnode

乒乓缓冲节点。

```cpp
rglPingPong_fxnode::vftable
```

### rglSmaa_edge_detection_node

SMAA 边缘检测节点。

```cpp
rglSmaa_edge_detection_node::vftable
```

### rglSmaa_blend_weight_calc_node

SMAA 混合权重计算节点。

```cpp
rglSmaa_blend_weight_calc_node::vftable
```

### rglAfter_postfx_node

后后处理节点。

```cpp
rglAfter_postfx_node::vftable
```

### rglPRT_renderer

PRT 渲染器。

```cpp
rglPRT_renderer::vftable
```

### rglSSS_specular_add_fxnode

SSS 镜面添加节点。

```cpp
rglSSS_specular_add_fxnode::vftable
```

### rglSSS_fxnode

SSS 节点。

```cpp
rglSSS_fxnode::vftable
```

### rglBeta_indicator_view

Beta 指示器视图。

```cpp
rglBeta_indicator_view::vftable
```

### rglCas_fxnode

CAS (对比度自适应锐化) 节点。

```cpp
rglCas_fxnode::vftable
```

## 植被 / Flora

### rglFlora_entity

植被实体。

```cpp
rglFlora_entity::vftable
```

### rglFlora_kind

植被种类。

```cpp
rglFlora_kind::vftable
```

### rglFlora_seasonal_kind

季节性植被种类。

```cpp
rglFlora_seasonal_kind::vftable
```

### rglFlora_render_task

植被渲染任务。

```cpp
rglFlora_render_task::vftable
```

## 水体 / Water

### rglWater_body

水体。

```cpp
rglWater_body::vftable
```

### water_body

水体实现。

```cpp
water_body::vftable
```

### water_flowmap

水流图。

```cpp
water_flowmap::vftable
```

## 粒子系统 / Particle System

### rglGpu_particle_system

GPU 粒子系统。

```cpp
rglGpu_particle_system::vftable
```

### rglParticle_system_instanced

实例化粒子系统。

```cpp
rglParticle_system_instanced::vftable
```

### rglParticle_system_interpolator_base

粒子系统插值器基类。

```cpp
rglParticle_system_interpolator_base::vftable
```

### rglParticle_system_interpolator_definition

粒子系统插值器定义。

```cpp
rglParticle_system_interpolator_definition::vftable
```

### rglParticle_effect

粒子效果。

```cpp
rglParticle_effect::vftable
```

### rglParticle_emitter

粒子发射器。

```cpp
rglParticle_emitter::vftable
```

## 特效 / Effects

### decal_instance

贴花实例。

```cpp
decal_instance::vftable
```

### decal_placer

贴花放置器。

```cpp
decal_placer::vftable
```

### rglParticle_effect

粒子效果。

```cpp
rglParticle_effect::vftable
```

### rglVector_field

向量场。

```cpp
rglVector_field::vftable
```

### flickering_light

闪烁光源。

```cpp
flickering_light::vftable
```

## 渲染任务 / Render Tasks

### rglFrame_move_task

帧移动任务。

```cpp
rglFrame_move_task::vftable
```

### rglRender_thread

渲染线程。

```cpp
rglRender_thread::vftable
```

### rglRender_thread_task

渲染线程任务。

```cpp
rglRender_thread_task::vftable
```

### rglRender_thread_simple_task

渲染线程简单任务。

```cpp
rglRender_thread_simple_task::vftable
```

### rglRender_thread_simple_unwaitable_task

渲染线程不可等待简单任务。

```cpp
rglRender_thread_simple_unwaitable_task::vftable
```

### rglRender_thread_waitable_task

渲染线程可等待任务。

```cpp
rglRender_thread_waitable_task::vftable
```

### rglRender_thread_block_task

渲染线程阻塞任务。

```cpp
rglRender_thread_block_task::vftable
```

### rglParallel_for_task

并行 for 循环任务。

```cpp
rglParallel_for_task::vftable
```

### rglOro_task

Oro 任务。

```cpp
rglOro_task::vftable
```

### Async_render_task

异步渲染任务。

```cpp
Async_render_task::vftable
```

## 资源管理 / Resource Management

### rglResource

资源基类。

```cpp
rglResource::vftable
```

### rglAsset_factory_class

资源工厂类。

```cpp
rglAsset_factory_class::vftable
```

### rglAsset_load_filter

资源加载过滤器。

```cpp
rglAsset_load_filter::vftable
```

### rglAsset_metadata

资源元数据。

```cpp
rglAsset_metadata::vftable
```

### rglAsset_metadata_texture

纹理元数据。

```cpp
rglAsset_metadata_texture::vftable
```

### rglAsset_metadata_shader

着色器元数据。

```cpp
rglAsset_metadata_shader::vftable
```

### rglAsset_metadata_material

材质元数据。

```cpp
rglAsset_metadata_material::vftable
```

### rglAsset_metadata_skeleton

骨骼元数据。

```cpp
rglAsset_metadata_skeleton::vftable
```

### rglAsset_metadata_geometry_file

几何文件元数据。

```cpp
rglAsset_metadata_geometry_file::vftable
```

### rglPage_resolver_granite

Granite 页面解析器。

```cpp
rglPage_resolver_granite::vftable
```

### rglEngine_async_loader_task

引擎异步加载任务。

```cpp
rglEngine_async_loader_task::vftable
```

## 天空盒 / Skybox

### rglAtmosphere

大气。

```cpp
rglAtmosphere::vftable
```

### rglInterpolated_atmosphere

插值大气。

```cpp
rglInterpolated_atmosphere::vftable
```

### Weather

天气。

```cpp
Weather::vftable
```

### Weather_rainy

雨天。

```cpp
Weather_rainy::vftable
```

### Weather_snowy

雪天。

```cpp
Weather_snowy::vftable
```

## 遮蔽 / Occlusion

### rglSoftware_occlusion_rasterization_task

软件遮挡光栅化任务。

```cpp
rglSoftware_occlusion_rasterization_task::vftable
```

### DepthBufferRasterizer

深度缓冲光栅化器。

```cpp
DepthBufferRasterizer::vftable
```

### DepthBufferRasterizerScalar

标量深度缓冲光栅化器。

```cpp
DepthBufferRasterizerScalar::vftable
```

### DepthBufferRasterizerSSE

SSE 深度缓冲光栅化器。

```cpp
DepthBufferRasterizerSSE::vftable
```

### DepthBufferRasterizerAVX

AVX 深度缓冲光栅化器。

```cpp
DepthBufferRasterizerAVX::vftable
```

## 视频 / Video

### rglVideo_player

视频播放器。

```cpp
rglVideo_player::vftable
```

### rglVideo_player_view

视频播放器视图。

```cpp
rglVideo_player_view::vftable
```

### rglVideo_player_vpx

VPX 视频播放器。

```cpp
rglVideo_player_vpx::vftable
```

### rglVideo_player_get_frame_task

视频获取帧任务。

```cpp
rglVideo_player_get_frame_task::vftable
```

## 其他渲染类 / Other Rendering Classes

### rglSkeleton_model

骨骼模型。

```cpp
rglSkeleton_model::vftable
```

### rglSkinned_decal_records

蒙皮贴花记录。

```cpp
rglSkinned_decal_records::vftable
```

### rglRope

绳索。

```cpp
rglRope::vftable
```

### rglRope_physx

PhysX 绳索。

```cpp
rglRope_physx::vftable
```

### Agent_visuals

Agent 视觉。

```cpp
Agent_visuals::vftable
```

### Corpse_renderer

尸体渲染器。

```cpp
Corpse_renderer::vftable
```

### rglQuad_tree_atlas

四叉树图集。

```cpp
rglQuad_tree_atlas::vftable
```

### rglCompressor_interface

压缩器接口。

```cpp
rglCompressor_interface::vftable
```

### rglData_compressor_lz4hc

LZ4HC 数据压缩器。

```cpp
rglData_compressor_lz4hc::vftable
```

### rglMemory_block_typeless

无类型内存块。

```cpp
rglMemory_block_typeless::vftable
```

### rglMemory_allocator_base

内存分配器基类。

```cpp
rglMemory_allocator_base::vftable
```

### rglInterpolator_base

插值器基类。

```cpp
rglInterpolator_base::vftable
```

### rglInterpolator

插值器。

```cpp
rglInterpolator::vftable
```

### rglInterpolator_base_definition

插值器基类定义。

```cpp
rglInterpolator_base_definition::vftable
```
