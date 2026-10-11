---
title: Physics Engine
description: TaleWorlds.Native.dll physics engine class reference
---
# Physics Engine

## Mental Model

Treat `Physics Engine` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

## Overview

The physics engine uses NVIDIA PhysX for rigid body physics, collision detection, and constraint systems. It is structured around a world/body/shape/constraint model (`rglPhysics_engine_world`, `rglPhysics_engine_body`, `rglPhysics_engine_shape`, `rglPhysics_engine_constraint`) with both PhysX-backed and null implementations. PhysX integration is handled through callback interfaces (error, allocator, deletion listener, contact recorder, simulation events), collision filtering callbacks, raycasting, heightfields, a task system for async simulation, cloth simulation, and terrain collision helpers.

> **Verification note:** The following symbols were not found in native-1.2.9 or native-1.4.5; neither tree is v1.3.15, so existence in the v1.3.15 decompile cannot be ruled out — unverified in this environment: `rglNull_physics_engine_world`, `cloth_instance`, `cloth_simulation`, `cloth_collider`. Note that `cloth_simulation` exists only as function names (`cloth_simulation_system_ctor`, `material_set_cloth_simulation`) in the 1.4.5 header — no type or vftable by that name was found.

## PhysX Callback Interfaces

### PxErrorCallback

PhysX error callback interface. Receives error and warning messages from PhysX.

```cpp
PxErrorCallback::vftable
```

### rglPhysx_error_callback

rgl PhysX error callback implementation.

```cpp
rglPhysx_error_callback::vftable
```

### PxAllocatorCallback

PhysX memory allocator callback interface.

```cpp
PxAllocatorCallback::vftable
```

### rglPhysx_allocator

rgl PhysX memory allocator implementation.

```cpp
rglPhysx_allocator::vftable
```

### PhysxStackCacheAllocator

PhysX stack cache allocator. Uses a stack-based allocation strategy with caching.

```cpp
PhysxStackCacheAllocator::vftable
```

### PxConstraintAllocator

PhysX constraint allocator interface.

```cpp
PxConstraintAllocator::vftable
```

### TestConstraintAllocator

Test constraint allocator. Used in tests and debugging.

```cpp
TestConstraintAllocator::vftable
```

### PxContactRecorder

PhysX contact recorder interface. Records contact points during simulation.

```cpp
PxContactRecorder::vftable
```

### TestContactRecorder

Test contact recorder. Used in tests and debugging.

```cpp
TestContactRecorder::vftable
```

### TestContactRecorder2

Test contact recorder 2. Alternate test implementation.

```cpp
TestContactRecorder2::vftable
```

### PxCacheAllocator

PhysX cache allocator interface.

```cpp
PxCacheAllocator::vftable
```

### TestCacheAllocator

Test cache allocator. Used in tests and debugging.

```cpp
TestCacheAllocator::vftable
```

### PxDeletionListener

PhysX deletion listener interface. Notifies when PhysX objects are destroyed.

```cpp
PxDeletionListener::vftable
```

### rglPhysX_deletion_listener

rgl PhysX deletion listener implementation.

```cpp
rglPhysX_deletion_listener::vftable
```

### PxInputData

PhysX input data. Wraps data for PhysX serialization.

```cpp
PxInputData::vftable
```

### PxInputStream

PhysX input stream interface. Reads serialized PhysX data.

```cpp
PxInputStream::vftable
```

## Physics World

### rglPhysics_engine_world

Physics world base class. Manages the physics simulation.

```cpp
rglPhysics_engine_world::vftable
```

### rglPhysX_physics_engine_world

PhysX physics world implementation.

```cpp
rglPhysX_physics_engine_world::vftable
```

**Capabilities:**
- Physics simulation
- Collision detection
- Raycasting
- Shape queries

### rglNull_physics_engine_world

Null physics world. No-op implementation used when physics is disabled.

```cpp
rglNull_physics_engine_world::vftable
```

## Rigid Bodies

### rglPhysics_engine_body

Physics rigid body base class.

```cpp
rglPhysics_engine_body::vftable
```

### rglPhysX_physics_engine_body

PhysX rigid body implementation.

```cpp
rglPhysX_physics_engine_body::vftable
```

**Properties:**
- Mass
- Position
- Rotation
- Velocity
- Angular velocity

### rglNull_physics_engine_body

Null physics rigid body. No-op implementation.

```cpp
rglNull_physics_engine_body::vftable
```

## Collision Shapes

### rglPhysics_engine_shape

Collision shape base class.

```cpp
rglPhysics_engine_shape::vftable
```

### rglPhysX_physics_engine_shape

PhysX collision shape implementation.

```cpp
rglPhysX_physics_engine_shape::vftable
```

**Types:**
- Sphere
- Box
- Capsule
- Convex hull
- Triangle mesh
- Heightfield

### rglNull_physics_engine_shape

Null collision shape. No-op implementation.

```cpp
rglNull_physics_engine_shape::vftable
```

### rglPhysics_material

Physics material. Defines friction and restitution for collision surfaces.

```cpp
rglPhysics_material::vftable
```

## Constraints

### rglPhysics_engine_constraint

Physics constraint base class.

```cpp
rglPhysics_engine_constraint::vftable
```

### rglPhysX_physics_engine_constraint

PhysX constraint implementation.

```cpp
rglPhysX_physics_engine_constraint::vftable
```

**Types:**
- Spherical joint
- Hinge joint
- Prismatic joint
- Fixed joint

### rglNull_physics_engine_constraint

Null constraint. No-op implementation.

```cpp
rglNull_physics_engine_constraint::vftable
```

## Collision Filtering

### rglPhysics_filter_callback

Physics filter callback. Determines which bodies collide.

```cpp
rglPhysics_filter_callback::vftable
```

### rglPhysx_filter_callback

PhysX filter callback implementation.

```cpp
rglPhysx_filter_callback::vftable
```

### rglPhysX_simulation_filter

PhysX simulation filter. Filters collisions during simulation.

```cpp
rglPhysX_simulation_filter::vftable
```

### PxSimulationFilterCallback

PhysX simulation filter callback interface.

```cpp
PxSimulationFilterCallback::vftable
```

### PxQueryFilterCallback

PhysX query filter callback interface. Filters raycast and shape query results.

```cpp
PxQueryFilterCallback::vftable
```

### rglPhysics_filter_two_entities_callback

Two-entity physics filter callback. Filters collisions between a specific pair of entities.

```cpp
rglPhysics_filter_two_entities_callback::vftable
```

### PxSimulationEventCallback

PhysX simulation event callback interface. Receives collision and trigger events.

```cpp
PxSimulationEventCallback::vftable
```

### rglPhysX_simulation_callback

PhysX simulation callback implementation.

```cpp
rglPhysX_simulation_callback::vftable
```

### collide_only_with

Collide only with a specific entity. Filter callback that restricts collisions to one target.

```cpp
collide_only_with::vftable
```

### collide_only_with_capsule

Collide only with a capsule. Filter callback that restricts collisions to a capsule shape.

```cpp
collide_only_with_capsule::vftable
```

## Raycasting

### rglAgent_capsule_world

Agent capsule world. Manages capsule-based raycasting for agents.

```cpp
rglAgent_capsule_world::vftable
```

### rglAgent_capsule_world_physx

Agent capsule PhysX world. PhysX-backed capsule raycasting for agents.

```cpp
rglAgent_capsule_world_physx::vftable
```

## Heightfield

### rglPhysics_engine_heightfield

Physics heightfield base class.

```cpp
rglPhysics_engine_heightfield::vftable
```

### rglPhysx_physics_engine_heightfield

PhysX heightfield implementation.

```cpp
rglPhysx_physics_engine_heightfield::vftable
```

## Task System

### rglPhysx_task

PhysX task base class.

```cpp
rglPhysx_task::vftable
```

### rglPhysx_async_simulate_task

PhysX asynchronous simulation task.

```cpp
rglPhysx_async_simulate_task::vftable
```

### rglPhysx_cpu_dispatcher

PhysX CPU dispatcher. Schedules PhysX tasks across CPU threads.

```cpp
rglPhysx_cpu_dispatcher::vftable
```

### PxCpuDispatcher

PhysX CPU dispatcher interface.

```cpp
PxCpuDispatcher::vftable
```

### rglPhysx_completion_task

PhysX completion task. Signals when async PhysX work is done.

```cpp
rglPhysx_completion_task::vftable
```

### PxBaseTask

PhysX base task interface.

```cpp
PxBaseTask::vftable
```

### PxLightCpuTask

PhysX light CPU task. A low-overhead task for simple operations.

```cpp
PxLightCpuTask::vftable
```

## Effects

### cloth_instance

Cloth instance. A single piece of simulated cloth.

```cpp
cloth_instance::vftable
```

### cloth_simulation

Cloth simulation. Drives cloth physics for a cloth instance.

```cpp
cloth_simulation::vftable
```

### cloth_collider

Cloth collider. A collision shape that cloth interacts with.

```cpp
cloth_collider::vftable
```

## Terrain Collision

### exclude_entity_callback

Exclude entity callback. Excludes a specific entity from terrain collision.

```cpp
exclude_entity_callback::vftable
```

### ignore_entity_callback

Ignore entity callback. Ignores a specific entity during collision.

```cpp
ignore_entity_callback::vftable
```

### ignore_forward_collisions_callback

Ignore forward collisions callback. Skips forward-facing collisions.

```cpp
ignore_forward_collisions_callback::vftable
```

### Exclude_invalid_get_height_callback

Exclude invalid get-height callback. Skips invalid heightfield lookups.

```cpp
Exclude_invalid_get_height_callback::vftable
```

## Other Physics Classes

### focus_raycast_callback

Focus raycast callback. Handles raycasts for focus/targeting.

```cpp
focus_raycast_callback::vftable
```

### missile_collide_callback

Missile collide callback. Handles missile collision events.

```cpp
missile_collide_callback::vftable
```

### missile_collide_with_exclude_entity_callback

Missile collide with exclude entity callback. Handles missile collisions while excluding specific entities.

```cpp
missile_collide_with_exclude_entity_callback::vftable
```

### object_mover

Object mover. Moves physics objects programmatically.

```cpp
object_mover::vftable
```

### object_shaker

Object shaker. Applies shake effects to physics objects.

```cpp
object_shaker::vftable
```

### trajectory_visualizer

Trajectory visualizer. Draws predicted trajectories for debugging.

```cpp
trajectory_visualizer::vftable
```

## Usage Example

```csharp
// Example: the physics engine is driven internally by the engine each frame.
// Modders typically interact with it indirectly through agent behaviors,
// missile scripts, and MB scripting rather than calling these vftables directly.
// Use the native source reference to trace which physics callback or constraint
// handles a given behavior when debugging physics glitches or desyncs.
```

---

**Last updated:** 2026-10-08  
**Source version:** TaleWorlds.Native.dll v1.3.15
