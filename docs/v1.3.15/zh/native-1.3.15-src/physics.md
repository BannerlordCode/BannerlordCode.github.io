---
title: 物理引擎 / Physics Engine
description: TaleWorlds.Native.dll 物理引擎类参考
---

# 物理引擎 / Physics Engine

## 概述 / Overview

物理引擎使用 NVIDIA PhysX 实现刚体物理、碰撞检测和约束系统。

The physics engine uses NVIDIA PhysX for rigid body physics, collision detection, and constraint systems.

## PhysX 回调接口 / PhysX Callback Interfaces

### PxErrorCallback

PhysX 错误回调。

```cpp
PxErrorCallback::vftable
```

### rglPhysx_error_callback

rgl PhysX 错误回调。

```cpp
rglPhysx_error_callback::vftable
```

### PxAllocatorCallback

PhysX 内存分配器回调。

```cpp
PxAllocatorCallback::vftable
```

### rglPhysx_allocator

rgl PhysX 内存分配器。

```cpp
rglPhysx_allocator::vftable
```

### PhysxStackCacheAllocator

PhysX 栈缓存分配器。

```cpp
PhysxStackCacheAllocator::vftable
```

### PxConstraintAllocator

PhysX 约束分配器。

```cpp
PxConstraintAllocator::vftable
```

### TestConstraintAllocator

测试用约束分配器。

```cpp
TestConstraintAllocator::vftable
```

### PxContactRecorder

PhysX 接触记录器。

```cpp
PxContactRecorder::vftable
```

### TestContactRecorder

测试用接触记录器。

```cpp
TestContactRecorder::vftable
```

### TestContactRecorder2

测试用接触记录器 2。

```cpp
TestContactRecorder2::vftable
```

### PxCacheAllocator

PhysX 缓存分配器。

```cpp
PxCacheAllocator::vftable
```

### TestCacheAllocator

测试用缓存分配器。

```cpp
TestCacheAllocator::vftable
```

### PxDeletionListener

PhysX 删除监听器。

```cpp
PxDeletionListener::vftable
```

### rglPhysX_deletion_listener

rgl PhysX 删除监听器。

```cpp
rglPhysX_deletion_listener::vftable
```

### PxInputData

PhysX 输入数据。

```cpp
PxInputData::vftable
```

### PxInputStream

PhysX 输入流。

```cpp
PxInputStream::vftable
```

## 物理世界 / Physics World

### rglPhysics_engine_world

物理世界基类。

```cpp
rglPhysics_engine_world::vftable
```

### rglPhysX_physics_engine_world

PhysX 物理世界实现。

```cpp
rglPhysX_physics_engine_world::vftable
```

**功能:**
- 物理模拟
- 碰撞检测
- 射线投射
- 形状查询

### rglNull_physics_engine_world

空物理世界（无物理）。

```cpp
rglNull_physics_engine_world::vftable
```

## 刚体 / Rigid Bodies

### rglPhysics_engine_body

物理刚体基类。

```cpp
rglPhysics_engine_body::vftable
```

### rglPhysX_physics_engine_body

PhysX 刚体实现。

```cpp
rglPhysX_physics_engine_body::vftable
```

**属性:**
- 质量 (Mass)
- 位置 (Position)
- 旋转 (Rotation)
- 速度 (Velocity)
- 角速度 (Angular Velocity)

### rglNull_physics_engine_body

空物理刚体。

```cpp
rglNull_physics_engine_body::vftable
```

## 碰撞形状 / Collision Shapes

### rglPhysics_engine_shape

碰撞形状基类。

```cpp
rglPhysics_engine_shape::vftable
```

### rglPhysX_physics_engine_shape

PhysX 碰撞形状。

```cpp
rglPhysX_physics_engine_shape::vftable
```

**类型:**
- 球体 (Sphere)
- 盒子 (Box)
- 胶囊 (Capsule)
- 凸包 (Convex Hull)
- 三角形网格 (Triangle Mesh)
- 高度场 (Heightfield)

### rglNull_physics_engine_shape

空碰撞形状。

```cpp
rglNull_physics_engine_shape::vftable
```

### rglPhysics_material

物理材质。

```cpp
rglPhysics_material::vftable
```

## 约束 / Constraints

### rglPhysics_engine_constraint

物理约束基类。

```cpp
rglPhysics_engine_constraint::vftable
```

### rglPhysX_physics_engine_constraint

PhysX 约束实现。

```cpp
rglPhysX_physics_engine_constraint::vftable
```

**类型:**
- 球窝关节 (Spherical Joint)
- 铰链关节 (Hinge Joint)
- 滑动关节 (Prismatic Joint)
- 固定约束 (Fixed Joint)

### rglNull_physics_engine_constraint

空约束。

```cpp
rglNull_physics_engine_constraint::vftable
```

## 碰撞过滤 / Collision Filtering

### rglPhysics_filter_callback

物理过滤回调。

```cpp
rglPhysics_filter_callback::vftable
```

### rglPhysx_filter_callback

PhysX 过滤回调。

```cpp
rglPhysx_filter_callback::vftable
```

### rglPhysX_simulation_filter

PhysX 模拟过滤。

```cpp
rglPhysX_simulation_filter::vftable
```

### PxSimulationFilterCallback

PhysX 模拟过滤回调。

```cpp
PxSimulationFilterCallback::vftable
```

### PxQueryFilterCallback

PhysX 查询过滤回调。

```cpp
PxQueryFilterCallback::vftable
```

### rglPhysics_filter_two_entities_callback

两个实体过滤回调。

```cpp
rglPhysics_filter_two_entities_callback::vftable
```

### PxSimulationEventCallback

PhysX 模拟事件回调。

```cpp
PxSimulationEventCallback::vftable
```

### rglPhysX_simulation_callback

PhysX 模拟回调。

```cpp
rglPhysX_simulation_callback::vftable
```

### collide_only_with

仅与指定实体碰撞。

```cpp
collide_only_with::vftable
```

### collide_only_with_capsule

仅与胶囊体碰撞。

```cpp
collide_only_with_capsule::vftable
```

## 射线投射 / Raycasting

### rglAgent_capsule_world

Agent 胶囊世界。

```cpp
rglAgent_capsule_world::vftable
```

### rglAgent_capsule_world_physx

Agent 胶囊 PhysX 世界。

```cpp
rglAgent_capsule_world_physx::vftable
```

## 高度场 / Heightfield

### rglPhysics_engine_heightfield

物理高度场地基类。

```cpp
rglPhysics_engine_heightfield::vftable
```

### rglPhysx_physics_engine_heightfield

PhysX 高度场。

```cpp
rglPhysx_physics_engine_heightfield::vftable
```

## 任务系统 / Task System

### rglPhysx_task

PhysX 任务基类。

```cpp
rglPhysx_task::vftable
```

### rglPhysx_async_simulate_task

PhysX 异步模拟任务。

```cpp
rglPhysx_async_simulate_task::vftable
```

### rglPhysx_cpu_dispatcher

PhysX CPU 调度器。

```cpp
rglPhysx_cpu_dispatcher::vftable
```

### PxCpuDispatcher

PhysX CPU 调度器接口。

```cpp
PxCpuDispatcher::vftable
```

### rglPhysx_completion_task

PhysX 完成任务。

```cpp
rglPhysx_completion_task::vftable
```

### PxBaseTask

PhysX 基础任务。

```cpp
PxBaseTask::vftable
```

### PxLightCpuTask

PhysX 轻量 CPU 任务。

```cpp
PxLightCpuTask::vftable
```

## 特效 / Effects

### cloth_instance

布料实例。

```cpp
cloth_instance::vftable
```

### cloth_simulation

布料模拟。

```cpp
cloth_simulation::vftable
```

### cloth_collider

布料碰撞体。

```cpp
cloth_collider::vftable
```

## 地形碰撞 / Terrain Collision

### exclude_entity_callback

排除实体回调。

```cpp
exclude_entity_callback::vftable
```

### ignore_entity_callback

忽略实体回调。

```cpp
ignore_entity_callback::vftable
```

### ignore_forward_collisions_callback

忽略正向碰撞回调。

```cpp
ignore_forward_collisions_callback::vftable
```

### Exclude_invalid_get_height_callback

排除无效高度获取回调。

```cpp
Exclude_invalid_get_height_callback::vftable
```

## 其他物理类 / Other Physics Classes

### focus_raycast_callback

焦点射线投射回调。

```cpp
focus_raycast_callback::vftable
```

### missile_collide_callback

弹丸碰撞回调。

```cpp
missile_collide_callback::vftable
```

### missile_collide_with_exclude_entity_callback

弹丸与排除实体碰撞回调。

```cpp
missile_collide_with_exclude_entity_callback::vftable
```

### object_mover

物体移动器。

```cpp
object_mover::vftable
```

### object_shaker

物体震动器。

```cpp
object_shaker::vftable
```

### trajectory_visualizer

轨迹可视化器。

```cpp
trajectory_visualizer::vftable
```
