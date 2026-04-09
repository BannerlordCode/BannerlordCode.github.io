---
title: 场景系统 / Scene System
description: TaleWorlds.Native.dll 场景系统类参考
---

# 场景系统 / Scene System

## 概述 / Overview

场景系统管理游戏世界中的场景加载、场景对象和场景控制器。

The scene system manages scene loading, scene objects, and scene controllers in the game world.

## 场景对象 / Scene Objects

### Game_object

游戏对象。

```cpp
Game_object::vftable
```

### rglPath

路径。

```cpp
rglPath::vftable
```

### Volume_generator

体积生成器。

```cpp
Volume_generator::vftable
```

## 场景控制器 / Scene Controllers

### Game_scene_controller

游戏场景控制器。

```cpp
Game_scene_controller::vftable
```

### Mission_loader_task

任务加载任务。

```cpp
Mission_loader_task::vftable
```

## 脚本组件 / Script Components

### rglScript_component

脚本组件。

```cpp
rglScript_component::vftable
```

### rglManaged_script_component

托管脚本组件。

```cpp
rglManaged_script_component::vftable
```

### rglNative_script_component

原生脚本组件。

```cpp
rglNative_script_component::vftable
```

### script_component_filter_callback

脚本组件过滤回调。

```cpp
script_component_filter_callback::vftable
```

### rglComposite_component

复合组件。

```cpp
rglComposite_component::vftable
```

### rglReplay_component_data

回放组件数据。

```cpp
rglReplay_component_data::vftable
```

### rglReplay_composite_data

回放复合数据。

```cpp
rglReplay_composite_data::vftable
```

## 编辑器 / Editor

### rglEditor_application

编辑器应用程序。

```cpp
rglEditor_application::vftable
```

### rglEditor_config

编辑器配置。

```cpp
rglEditor_config::vftable
```

### rglEditor_script_component_definition

编辑器脚本组件定义。

```cpp
rglEditor_script_component_definition::vftable
```

### terrain_mesh_exporter

地形网格导出器。

```cpp
terrain_mesh_exporter::vftable
```

### skinned_mesh_viewer

蒙皮网格查看器。

```cpp
skinned_mesh_viewer::vftable
```

### skeletal_mesh_editer

骨骼网格编辑器。

```cpp
skeletal_mesh_editer::vftable
```

### face_visual_test_script

面部视觉测试脚本。

```cpp
face_visual_test_script::vftable
```

## 回放系统 / Replay System

### rglReplay_data_delete_task

回放数据删除任务。

```cpp
rglReplay_data_delete_task::vftable
```

### rglReplay_cloth_simulator_data

回放布料模拟器数据。

```cpp
rglReplay_cloth_simulator_data::vftable
```

### rglReplay_light_data

回放光照数据。

```cpp
rglReplay_light_data::vftable
```

### rglReplay_meta_mesh_data

回放元网格数据。

```cpp
rglReplay_meta_mesh_data::vftable
```

### rglReplay_particle_system_data

回放粒子系统数据。

```cpp
rglReplay_particle_system_data::vftable
```

### rglReplay_write_old_frame_data_to_disk_task

回放旧帧数据写入磁盘任务。

```cpp
rglReplay_write_old_frame_data_to_disk_task::vftable
```

## 特效系统 / Effect System

### disable_cloth_script

禁用布料脚本。

```cpp
disable_cloth_script::vftable
```

### debug_script

调试脚本。

```cpp
debug_script::vftable
```

### comment_script

注释脚本。

```cpp
comment_script::vftable
```

### show_component_bbox_radius_script

显示组件边界半径脚本。

```cpp
show_component_bbox_radius_script::vftable
```

## 其他场景类 / Other Scene Classes

### rglDeadlock_checker_task

死锁检查任务。

```cpp
rglDeadlock_checker_task::vftable
```

### rglFinal_cleanup_task

最终清理任务。

```cpp
rglFinal_cleanup_task::vftable
```

### rglInitialization_task

初始化任务。

```cpp
rglInitialization_task::vftable
```

### rglView

视图。

```cpp
rglView::vftable
```

### rglView_base

视图基类。

```cpp
rglView_base::vftable
```

### rglThumbnail_creator_view

缩略图创建器视图。

```cpp
rglThumbnail_creator_view::vftable
```

### rglTwo_dimension_view

二维视图。

```cpp
rglTwo_dimension_view::vftable
```

### rglWindow_creation_task

窗口创建任务。

```cpp
rglWindow_creation_task::vftable
```

### rglLoading_screen_view

加载屏幕视图。

```cpp
rglLoading_screen_view::vftable
```

### rglLogger_task

日志任务。

```cpp
rglLogger_task::vftable
```

### rglShader_manager_task

着色器管理器任务。

```cpp
rglShader_manager_task::vftable
```

### rglExecute_command_task

执行命令任务。

```cpp
rglExecute_command_task::vftable
```

### rglImage_save_task

图像保存任务。

```cpp
rglImage_save_task::vftable
```

### rglDelete_later_tick_task

延迟删除任务。

```cpp
rglDelete_later_tick_task::vftable
```

### rglGranite_task

Granite 任务。

```cpp
rglGranite_task::vftable
```

### rglGranite_performance_monitor

Granite 性能监视器。

```cpp
rglGranite_performance_monitor::vftable
```

### rglGranite_reading_callbacks

Granite 读取回调。

```cpp
rglGranite_reading_callbacks::vftable
```

### rglGraniteResourceCallbacks

Granite 资源回调。

```cpp
rglGraniteResourceCallbacks::vftable
```

### rglGranite_allocator

Granite 分配器。

```cpp
rglGranite_allocator::vftable
```

### rglGranite_scheduler

Granite 调度器。

```cpp
rglGranite_scheduler::vftable
```

### rgGranite_scheduler

另一个 Granite 调度器。

```cpp
rgGranite_scheduler::vftable
```

### rglMesh_rec_render_thread_data

网格记录渲染线程数据。

```cpp
rglMesh_rec_render_thread_data::vftable
```

### rglFace_mesh

面部网格。

```cpp
rglFace_mesh::vftable
```

### rglFace_mesh_commit_task

面部网格提交任务。

```cpp
rglFace_mesh_commit_task::vftable
```

### rglFace_mesh_replay_data

面部网格回放数据。

```cpp
rglFace_mesh_replay_data::vftable
```

### Face_generation_task

面部生成任务。

```cpp
Face_generation_task::vftable
```

### rglCloth_simulator_component

布料模拟器组件。

```cpp
rglCloth_simulator_component::vftable
```

### rglCloth_simulator_component

布料模拟器组件。

```cpp
rglCloth_simulator_component::vftable
```

### rglCloth_simulation_body_definition

布料模拟身体定义。

```cpp
rglCloth_simulation_body_definition::vftable
```

### rglCloth_simulation_state

布料模拟状态。

```cpp
rglCloth_simulation_state::vftable
```

### rglCloth_cook_read_task

布料 Cook 读取任务。

```cpp
rglCloth_cook_read_task::vftable
```

### rglCloth_map_read_task

布料贴图读取任务。

```cpp
rglCloth_map_read_task::vftable
```

### rglMesh_seasonal_material

网格季节材质。

```cpp
rglMesh_seasonal_material::vftable
```

### multi_material_paint

多材质绘制。

```cpp
multi_material_paint::vftable
```

### reflection_capturer

反射捕获器。

```cpp
reflection_capturer::vftable
```

### reflective_entity_duplicator

反射实体复制器。

```cpp
reflective_entity_duplicator::vftable
```

### Fading_out_entity

淡出实体。

```cpp
Fading_out_entity::vftable
```

### rglGPU_present_interceptor_handler

GPU 呈现拦截处理器。

```cpp
rglGPU_present_interceptor_handler::vftable
```

### rglGPU_present_interceptor_handler_test

GPU 呈现拦截处理器测试。

```cpp
rglGPU_present_interceptor_handler_test::vftable
```

### rglGPU_present_loop_task

GPU 呈现循环任务。

```cpp
rglGPU_present_loop_task::vftable
```

### rglBackground_worker_thread

后台工作线程。

```cpp
rglBackground_worker_thread::vftable
```

### rglAsyncIO_scheduler

异步 IO 调度器。

```cpp
rglAsyncIO_scheduler::vftable
```

### rglAsyncIO_file_record

异步 IO 文件记录。

```cpp
rglAsyncIO_file_record::vftable
```

### rglAsyncIO_file_record_windows

Windows 异步 IO 文件记录。

```cpp
rglAsyncIO_file_record_windows::vftable
```

### rglAsync_file_read_manager

异步文件读取管理器。

```cpp
rglAsync_file_read_manager::vftable
```

### rglAsync_file_read_manager_windows

Windows 异步文件读取管理器。

```cpp
rglAsync_file_read_manager_windows::vftable
```

### gi_partial_bake_probe

GI 部分烘焙探针。

```cpp
gi_partial_bake_probe::vftable
```

### Trail_render_async_task

拖尾渲染异步任务。

```cpp
Trail_render_async_task::vftable
```

### Fetch_prev_exp_task

获取先前经验任务。

```cpp
Fetch_prev_exp_task::vftable
```

### Environment_deformer_async_task

环境变形异步任务。

```cpp
Environment_deformer_async_task::vftable
```

### Highlights

高光。

```cpp
Highlights::vftable
```

### HighlightsImpl

高光实现。

```cpp
HighlightsImpl::vftable
```

### combat_particle_grid_instance

战斗粒子网格实例。

```cpp
combat_particle_grid_instance::vftable
```

### MB_Application

MB 应用程序。

```cpp
MB_Application::vftable
```

### MB_Asset_load_filter

MB 资源加载过滤器。

```cpp
MB_Asset_load_filter::vftable
```

### MultiModuleIncludeFixer

多模块包含修复器。

```cpp
MultiModuleIncludeFixer::vftable
```

### rglAsset_package_link

资源包链接。

```cpp
rglAsset_package_link::vftable
```

### rglAsset_package_link_wrdc

W RDC 资源包链接。

```cpp
rglAsset_package_link_wrdc::vftable
```

### rglAsset_package_item

资源包项基类。

```cpp
rglAsset_package_item::vftable
```

### rglAsset_package_item_texture

资源包纹理项。

```cpp
rglAsset_package_item_texture::vftable
```

### rglAsset_package_item_shader

资源包着色器项。

```cpp
rglAsset_package_item_shader::vftable
```

### rglAsset_package_item_material

资源包材质项。

```cpp
rglAsset_package_item_material::vftable
```

### rglAsset_package_item_skeleton

资源包骨骼项。

```cpp
rglAsset_package_item_skeleton::vftable
```

### rglAsset_package_item_skeleton_anim

资源包骨骼动画项。

```cpp
rglAsset_package_item_skeleton_anim::vftable
```

### rglAsset_package_item_anim

资源包动画项。

```cpp
rglAsset_package_item_anim::vftable
```

### rglAsset_package_item_morph_anim

资源包变形动画项。

```cpp
rglAsset_package_item_morph_anim::vftable
```

### rglAsset_package_item_particle

资源包粒子项。

```cpp
rglAsset_package_item_particle::vftable
```

### rglAsset_package_item_gpu_particle

资源包 GPU 粒子项。

```cpp
rglAsset_package_item_gpu_particle::vftable
```

### rglAsset_package_item_metamesh

资源包元网格项。

```cpp
rglAsset_package_item_metamesh::vftable
```

### rglAsset_package_item_geometry_file

资源包几何文件项。

```cpp
rglAsset_package_item_geometry_file::vftable
```

### rglAsset_package_item_physics_shape

资源包物理形状项。

```cpp
rglAsset_package_item_physics_shape::vftable
```

### rglAsset_package_item_procedural_vector_field

资源包程序化向量场项。

```cpp
rglAsset_package_item_procedural_vector_field::vftable
```

### rglData_texture_creation_task

数据纹理创建任务。

```cpp
rglData_texture_creation_task::vftable
```

### rglConfig

配置。

```cpp
rglConfig::vftable
```

### rglDev_config

开发者配置。

```cpp
rglDev_config::vftable
```

### rglUser_config

用户配置。

```cpp
rglUser_config::vftable
```

### rglOption_file_base

选项文件基类。

```cpp
rglOption_file_base::vftable
```

### rglModule_ini_options

模块 INI 选项。

```cpp
rglModule_ini_options::vftable
```

### rglRender_system

渲染系统。

```cpp
rglRender_system::vftable
```

### rglDecal

贴花。

```cpp
rglDecal::vftable
```

### rglDecal_renderer

贴花渲染器。

```cpp
rglDecal_renderer::vftable
```

### Ship_visual_creator

船只视觉创建器。

```cpp
Ship_visual_creator::vftable
```

### physics_test

物理测试。

```cpp
physics_test::vftable
```

### physics_test_manager_script

物理测试管理器脚本。

```cpp
physics_test_manager_script::vftable
```

### rglXMLObject

XML 对象。

```cpp
rglXMLObject::vftable
```

### rglIO_Stream

IO 流。

```cpp
rglIO_Stream::vftable
```

### rglIO_text_stream

IO 文本流。

```cpp
rglIO_text_stream::vftable
```

### rglIO_Output_text_file_stream

IO 输出文本文件流。

```cpp
rglIO_Output_text_file_stream::vftable
```

### rglOutput_text_file_stream

输出文本文件流。

```cpp
rglOutput_text_file_stream::vftable
```
