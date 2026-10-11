---
title: Scene System
description: TaleWorlds.Native.dll scene system class reference
---
# Scene System

## Mental Model

Treat `Scene System` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Overview

The scene system manages scene loading, scene objects, and scene controllers in the game world. It covers the full lifecycle of a scene: initialization and cleanup tasks, the game object hierarchy, script components (managed, native, composite, and replay), the editor tooling, the replay system, view and window management, async I/O, asset packages, and configuration. Many entries are internal engine plumbing that mod code never calls directly — they appear in decompiled traces, crash logs, and interop signatures.

> **Verification note:** The following symbols were not found in native-1.2.9 or native-1.4.5; neither tree is v1.3.15, so existence in the v1.3.15 decompile cannot be ruled out — unverified in this environment: `rglMesh_rec_render_thread_data`, `rglFace_mesh`, `rglFace_mesh_commit_task`, `rglFace_mesh_replay_data`, `rglMesh_seasonal_material`, `rglAsset_package_item_anim`, `Ship_visual_creator`. Additionally, `rglGranite_scheduler` was not found under that exact name; the near-identical `rgGranite_scheduler` (one fewer "l") is present in the native-1.4.5 src/ split (`src/modules/mod_0022.c`, `src/subsystems/asset.c`, `src/subsystems/_unsorted.c`) and in `TaleWorlds.Native.c`, so the entry likely refers to that scheduler under a name variant.

## Scene Objects

### Game_object

Game object. Base entity in the scene hierarchy.

```cpp
Game_object::vftable
```

### rglPath

Path. Represents a location or route in the scene.

```cpp
rglPath::vftable
```

### Volume_generator

Volume generator. Produces volumetric data for the scene.

```cpp
Volume_generator::vftable
```

## Scene Controllers

### Game_scene_controller

Game scene controller. Drives scene-level logic and state.

```cpp
Game_scene_controller::vftable
```

### Mission_loader_task

Mission loading task. Loads mission assets and initializes the scene.

```cpp
Mission_loader_task::vftable
```

## Script Components

### rglScript_component

Script component. Attaches scriptable behavior to a game object.

```cpp
rglScript_component::vftable
```

### rglManaged_script_component

Managed script component. Bridges to the managed (C#) scripting layer.

```cpp
rglManaged_script_component::vftable
```

### rglNative_script_component

Native script component. Runs script logic entirely in native code.

```cpp
rglNative_script_component::vftable
```

### script_component_filter_callback

Script component filter callback. Selects which script components to process.

```cpp
script_component_filter_callback::vftable
```

### rglComposite_component

Composite component. Combines multiple components into one.

```cpp
rglComposite_component::vftable
```

### rglReplay_component_data

Replay component data. Stores component state for replay playback.

```cpp
rglReplay_component_data::vftable
```

### rglReplay_composite_data

Replay composite data. Aggregates replay data for a composite component.

```cpp
rglReplay_composite_data::vftable
```

## Editor

### rglEditor_application

Editor application. Hosts the scene editor.

```cpp
rglEditor_application::vftable
```

### rglEditor_config

Editor configuration.

```cpp
rglEditor_config::vftable
```

### rglEditor_script_component_definition

Editor script component definition. Describes a script component for the editor UI.

```cpp
rglEditor_script_component_definition::vftable
```

### terrain_mesh_exporter

Terrain mesh exporter. Exports terrain geometry for external tools.

```cpp
terrain_mesh_exporter::vftable
```

### skinned_mesh_viewer

Skinned mesh viewer. Previews skinned meshes in the editor.

```cpp
skinned_mesh_viewer::vftable
```

### skeletal_mesh_editer

Skeletal mesh editor. Edits skeletal mesh data in the editor.

```cpp
skeletal_mesh_editer::vftable
```

### face_visual_test_script

Face visual test script. Tests facial appearance in the editor.

```cpp
face_visual_test_script::vftable
```

## Replay System

### rglReplay_data_delete_task

Replay data deletion task.

```cpp
rglReplay_data_delete_task::vftable
```

### rglReplay_cloth_simulator_data

Replay cloth simulator data. Stores cloth state for replay.

```cpp
rglReplay_cloth_simulator_data::vftable
```

### rglReplay_light_data

Replay light data. Stores lighting state for replay.

```cpp
rglReplay_light_data::vftable
```

### rglReplay_meta_mesh_data

Replay meta mesh data. Stores meta mesh state for replay.

```cpp
rglReplay_meta_mesh_data::vftable
```

### rglReplay_particle_system_data

Replay particle system data. Stores particle state for replay.

```cpp
rglReplay_particle_system_data::vftable
```

### rglReplay_write_old_frame_data_to_disk_task

Task that writes old replay frame data to disk.

```cpp
rglReplay_write_old_frame_data_to_disk_task::vftable
```

## Effect System

### disable_cloth_script

Disables cloth simulation for the attached entity.

```cpp
disable_cloth_script::vftable
```

### debug_script

Debug script. Provides in-scene debugging hooks.

```cpp
debug_script::vftable
```

### comment_script

Comment script. Attaches a text comment to a scene object.

```cpp
comment_script::vftable
```

### show_component_bbox_radius_script

Displays the bounding box radius of a component in the editor.

```cpp
show_component_bbox_radius_script::vftable
```

## Other Scene Classes

### rglDeadlock_checker_task

Deadlock checker task. Monitors for deadlocks in scene logic.

```cpp
rglDeadlock_checker_task::vftable
```

### rglFinal_cleanup_task

Final cleanup task. Runs last during scene teardown.

```cpp
rglFinal_cleanup_task::vftable
```

### rglInitialization_task

Initialization task. Runs first during scene setup.

```cpp
rglInitialization_task::vftable
```

### rglView

View. Base class for scene views.

```cpp
rglView::vftable
```

### rglView_base

View base. Common base for all view types.

```cpp
rglView_base::vftable
```

### rglThumbnail_creator_view

Thumbnail creator view. Renders scene thumbnails.

```cpp
rglThumbnail_creator_view::vftable
```

### rglTwo_dimension_view

Two-dimensional view. Renders 2D overlays and UI elements.

```cpp
rglTwo_dimension_view::vftable
```

### rglWindow_creation_task

Window creation task.

```cpp
rglWindow_creation_task::vftable
```

### rglLoading_screen_view

Loading screen view. Renders the loading screen.

```cpp
rglLoading_screen_view::vftable
```

### rglLogger_task

Logger task. Handles scene-level logging.

```cpp
rglLogger_task::vftable
```

### rglShader_manager_task

Shader manager task. Coordinates shader compilation and caching.

```cpp
rglShader_manager_task::vftable
```

### rglExecute_command_task

Execute command task. Runs a scene command.

```cpp
rglExecute_command_task::vftable
```

### rglImage_save_task

Image save task. Saves a rendered image to disk.

```cpp
rglImage_save_task::vftable
```

### rglDelete_later_tick_task

Deferred deletion tick task. Deletes objects at a safe point in the frame.

```cpp
rglDelete_later_tick_task::vftable
```

### rglGranite_task

Granite task. Runs a Granite (virtual texture) operation.

```cpp
rglGranite_task::vftable
```

### rglGranite_performance_monitor

Granite performance monitor. Tracks virtual texture performance.

```cpp
rglGranite_performance_monitor::vftable
```

### rglGranite_reading_callbacks

Granite reading callbacks. Notifies when virtual texture data is ready.

```cpp
rglGranite_reading_callbacks::vftable
```

### rglGraniteResourceCallbacks

Granite resource callbacks. Manages virtual texture resource lifecycle.

```cpp
rglGraniteResourceCallbacks::vftable
```

### rglGranite_allocator

Granite allocator. Allocates memory for virtual textures.

```cpp
rglGranite_allocator::vftable
```

### rglGranite_scheduler

Granite scheduler. Schedules virtual texture operations.

```cpp
rglGranite_scheduler::vftable
```

### rgGranite_scheduler

Another Granite scheduler variant.

```cpp
rgGranite_scheduler::vftable
```

### rglMesh_rec_render_thread_data

Mesh recording render thread data. Captures mesh data on the render thread.

```cpp
rglMesh_rec_render_thread_data::vftable
```

### rglFace_mesh

Face mesh. Represents facial geometry for character generation.

```cpp
rglFace_mesh::vftable
```

### rglFace_mesh_commit_task

Face mesh commit task. Commits generated face mesh data.

```cpp
rglFace_mesh_commit_task::vftable
```

### rglFace_mesh_replay_data

Face mesh replay data. Stores face mesh state for replay.

```cpp
rglFace_mesh_replay_data::vftable
```

### Face_generation_task

Face generation task. Generates facial geometry asynchronously.

```cpp
Face_generation_task::vftable
```

### rglCloth_simulator_component

Cloth simulator component. Simulates cloth on a game object.

```cpp
rglCloth_simulator_component::vftable
```

### rglCloth_simulator_component

Cloth simulator component (alternate entry point).

```cpp
rglCloth_simulator_component::vftable
```

### rglCloth_simulation_body_definition

Cloth simulation body definition. Describes the physical body used for cloth.

```cpp
rglCloth_simulation_body_definition::vftable
```

### rglCloth_simulation_state

Cloth simulation state. Holds the current state of a cloth simulation.

```cpp
rglCloth_simulation_state::vftable
```

### rglCloth_cook_read_task

Cloth cook read task. Reads pre-cooked cloth simulation data.

```cpp
rglCloth_cook_read_task::vftable
```

### rglCloth_map_read_task

Cloth map read task. Reads cloth texture or weight maps.

```cpp
rglCloth_map_read_task::vftable
```

### rglMesh_seasonal_material

Mesh seasonal material. Applies season-dependent material variants to a mesh.

```cpp
rglMesh_seasonal_material::vftable
```

### multi_material_paint

Multi-material paint. Paints multiple materials onto a mesh.

```cpp
multi_material_paint::vftable
```

### reflection_capturer

Reflection capturer. Captures the scene into a reflection texture.

```cpp
reflection_capturer::vftable
```

### reflective_entity_duplicator

Reflective entity duplicator. Clones entities for reflection rendering.

```cpp
reflective_entity_duplicator::vftable
```

### Fading_out_entity

Fading out entity. Gradually fades an entity out of the scene.

```cpp
Fading_out_entity::vftable
```

### rglGPU_present_interceptor_handler

GPU present interceptor handler. Intercepts GPU present calls.

```cpp
rglGPU_present_interceptor_handler::vftable
```

### rglGPU_present_interceptor_handler_test

GPU present interceptor handler test.

```cpp
rglGPU_present_interceptor_handler_test::vftable
```

### rglGPU_present_loop_task

GPU present loop task. Drives the GPU present loop.

```cpp
rglGPU_present_loop_task::vftable
```

### rglBackground_worker_thread

Background worker thread. Runs scene work off the main thread.

```cpp
rglBackground_worker_thread::vftable
```

### rglAsyncIO_scheduler

Asynchronous I/O scheduler. Coordinates async file operations.

```cpp
rglAsyncIO_scheduler::vftable
```

### rglAsyncIO_file_record

Asynchronous I/O file record. Tracks an async file operation.

```cpp
rglAsyncIO_file_record::vftable
```

### rglAsyncIO_file_record_windows

Windows asynchronous I/O file record.

```cpp
rglAsyncIO_file_record_windows::vftable
```

### rglAsync_file_read_manager

Asynchronous file read manager. Manages async file reads.

```cpp
rglAsync_file_read_manager::vftable
```

### rglAsync_file_read_manager_windows

Windows asynchronous file read manager.

```cpp
rglAsync_file_read_manager_windows::vftable
```

### gi_partial_bake_probe

GI partial bake probe. Captures partial global illumination data.

```cpp
gi_partial_bake_probe::vftable
```

### Trail_render_async_task

Asynchronous trail render task.

```cpp
Trail_render_async_task::vftable
```

### Fetch_prev_exp_task

Fetch previous experience task. Retrieves prior experience data.

```cpp
Fetch_prev_exp_task::vftable
```

### Environment_deformer_async_task

Asynchronous environment deformer task.

```cpp
Environment_deformer_async_task::vftable
```

### Highlights

Highlights. Manages highlighted entities in the scene.

```cpp
Highlights::vftable
```

### HighlightsImpl

Highlights implementation.

```cpp
HighlightsImpl::vftable
```

### combat_particle_grid_instance

Combat particle grid instance. Manages particles in a combat grid.

```cpp
combat_particle_grid_instance::vftable
```

### MB_Application

MB application. Base application class for the game.

```cpp
MB_Application::vftable
```

### MB_Asset_load_filter

MB asset load filter. Selects which assets to load.

```cpp
MB_Asset_load_filter::vftable
```

### MultiModuleIncludeFixer

Multi-module include fixer. Resolves include paths across modules.

```cpp
MultiModuleIncludeFixer::vftable
```

### rglAsset_package_link

Asset package link. Links an asset package to the scene.

```cpp
rglAsset_package_link::vftable
```

### rglAsset_package_link_wrdc

WRDC asset package link variant.

```cpp
rglAsset_package_link_wrdc::vftable
```

### rglAsset_package_item

Asset package item base class.

```cpp
rglAsset_package_item::vftable
```

### rglAsset_package_item_texture

Asset package texture item.

```cpp
rglAsset_package_item_texture::vftable
```

### rglAsset_package_item_shader

Asset package shader item.

```cpp
rglAsset_package_item_shader::vftable
```

### rglAsset_package_item_material

Asset package material item.

```cpp
rglAsset_package_item_material::vftable
```

### rglAsset_package_item_skeleton

Asset package skeleton item.

```cpp
rglAsset_package_item_skeleton::vftable
```

### rglAsset_package_item_skeleton_anim

Asset package skeleton animation item.

```cpp
rglAsset_package_item_skeleton_anim::vftable
```

### rglAsset_package_item_anim

Asset package animation item.

```cpp
rglAsset_package_item_anim::vftable
```

### rglAsset_package_item_morph_anim

Asset package morph animation item.

```cpp
rglAsset_package_item_morph_anim::vftable
```

### rglAsset_package_item_particle

Asset package particle item.

```cpp
rglAsset_package_item_particle::vftable
```

### rglAsset_package_item_gpu_particle

Asset package GPU particle item.

```cpp
rglAsset_package_item_gpu_particle::vftable
```

### rglAsset_package_item_metamesh

Asset package meta mesh item.

```cpp
rglAsset_package_item_metamesh::vftable
```

### rglAsset_package_item_geometry_file

Asset package geometry file item.

```cpp
rglAsset_package_item_geometry_file::vftable
```

### rglAsset_package_item_physics_shape

Asset package physics shape item.

```cpp
rglAsset_package_item_physics_shape::vftable
```

### rglAsset_package_item_procedural_vector_field

Asset package procedural vector field item.

```cpp
rglAsset_package_item_procedural_vector_field::vftable
```

### rglData_texture_creation_task

Data texture creation task. Creates a texture from raw data.

```cpp
rglData_texture_creation_task::vftable
```

### rglConfig

Configuration. Base class for engine configuration.

```cpp
rglConfig::vftable
```

### rglDev_config

Developer configuration.

```cpp
rglDev_config::vftable
```

### rglUser_config

User configuration.

```cpp
rglUser_config::vftable
```

### rglOption_file_base

Option file base class.

```cpp
rglOption_file_base::vftable
```

### rglModule_ini_options

Module INI options. Reads per-module settings from INI files.

```cpp
rglModule_ini_options::vftable
```

### rglRender_system

Render system. Entry point for the rendering subsystem.

```cpp
rglRender_system::vftable
```

### rglDecal

Decal. A projected texture applied to a surface.

```cpp
rglDecal::vftable
```

### rglDecal_renderer

Decal renderer. Manages decal rendering.

```cpp
rglDecal_renderer::vftable
```

### Ship_visual_creator

Ship visual creator. Generates ship visuals for naval scenes.

```cpp
Ship_visual_creator::vftable
```

### physics_test

Physics test. Runs a physics test scenario.

```cpp
physics_test::vftable
```

### physics_test_manager_script

Physics test manager script. Manages physics test execution.

```cpp
physics_test_manager_script::vftable
```

### rglXMLObject

XML object. Represents an XML document or node.

```cpp
rglXMLObject::vftable
```

### rglIO_Stream

I/O stream. Base class for scene I/O operations.

```cpp
rglIO_Stream::vftable
```

### rglIO_text_stream

I/O text stream. Reads and writes text data.

```cpp
rglIO_text_stream::vftable
```

### rglIO_Output_text_file_stream

I/O output text file stream. Writes text to a file.

```cpp
rglIO_Output_text_file_stream::vftable
```

### rglOutput_text_file_stream

Output text file stream. Writes text to a file.

```cpp
rglOutput_text_file_stream::vftable
```

## Usage Example

```csharp
// Example: the scene system is driven internally by the engine during mission
// load and gameplay. Modders typically interact with it indirectly through
// scene scripts, the mission system, and MB scripting rather than calling these
// vftables directly. Use the native source reference to trace which scene
// controller or script component handles a given behavior when debugging
// scene-level issues.
```

---

**Last updated:** 2026-10-08  
**Source version:** TaleWorlds.Native.dll v1.3.15
