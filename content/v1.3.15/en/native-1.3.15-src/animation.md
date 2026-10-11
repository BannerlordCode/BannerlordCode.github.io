---
title: Animation System
description: TaleWorlds.Native.dll animation system class reference
---
# Animation System

## Mental Model

Treat `Animation System` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

The animation system manages all animations in the game, including character animations, horse animations, weapon animations, etc.

## Overview

The animation system is built around a tree of animation nodes (`rglAnim_node` subclasses) evaluated per agent each frame. Each node type handles one concern — movement, IK, layering, morphing, capture — and the agent-level anim systems (`Human_anim_system`, `Horse_anim_system`) drive the tree. Animation clips (`Animation_clip_data` and subclasses) supply the raw keyframe data, blend parameters, and event metadata that the nodes consume.

## Animation Tree

### rglAnim_tree

Animation tree root node. Manages the animation state machine.

```cpp
rglAnim_tree::vftable
```

**Responsibilities:**
- Animation state management
- Blend control
- Animation event triggering

## Animation Nodes

### rglAnim_node

Base class for all animation nodes.

```cpp
rglAnim_node::vftable
```

### rglAnim_node_human_adjustments

Human adjustment animation node.

```cpp
rglAnim_node_human_adjustments::vftable
```

### rglAnim_node_horse_adjustments

Horse adjustment animation node.

```cpp
rglAnim_node_horse_adjustments::vftable
```

### rglAnim_node_movement

Movement animation node.

```cpp
rglAnim_node_movement::vftable
```

> Not found in native-1.2.9 or native-1.4.5; neither tree is v1.3.15, so existence in the v1.3.15 decompile cannot be ruled out — unverified in this environment.

### rglAnim_node_horse_movement

Horse movement animation node.

```cpp
rglAnim_node_horse_movement::vftable
```

### rglAnim_node_inverse_kinematics

Inverse kinematics animation node.

```cpp
rglAnim_node_inverse_kinematics::vftable
```

### rglAnim_node_layer_system

Animation layer system node.

```cpp
rglAnim_node_layer_system::vftable
```

### Anim_node_morph

Animation morph node.

```cpp
Anim_node_morph::vftable
```

### Anim_node_capture

Animation capture node.

```cpp
Anim_node_capture::vftable
```

> Not found in native-1.2.9 or native-1.4.5; neither tree is v1.3.15, so existence in the v1.3.15 decompile cannot be ruled out — unverified in this environment.

## Agent Animation Systems

### Agent_anim_system

Agent generic animation system.

```cpp
Agent_anim_system::vftable
```

### Agent_renderer

Agent renderer.

```cpp
Agent_renderer::vftable
```

### Agent_anim_system

Agent animation system implementation.

```cpp
Agent_anim_system::vftable
```

## Human Animation System

### Human_anim_system

Human animation system.

```cpp
Human_anim_system::vftable
```

**Controls:**
- Walk / run
- Attack actions
- Defense actions
- Special actions

## Horse Animation System

### Horse_anim_system

Horse animation system.

```cpp
Horse_anim_system::vftable
```

**Controls:**
- Horse movement
- Horse gallop
- Horse idle

## Weapon Animation Systems

### Weapon_with_rope_anim_system

Rope weapon animation system.

```cpp
Weapon_with_rope_anim_system::vftable
```

### Rein_anim_system

Rein animation system.

```cpp
Rein_anim_system::vftable
```

### Holster_anim_system

Holster animation system.

```cpp
Holster_anim_system::vftable
```

### Weapon_meta_mesh

Weapon meta mesh.

```cpp
Weapon_meta_mesh::vftable
```

## Animation Clips

### Animation_clip_item

Animation clip item.

```cpp
Animation_clip_item::vftable
```

### Animation_clip_item_metadata

Animation clip item metadata.

```cpp
Animation_clip_item_metadata::vftable
```

### Animation_clip_data

Animation clip data.

```cpp
Animation_clip_data::vftable
```

### rglAnimation_clip_data

rgl animation clip data.

```cpp
rglAnimation_clip_data::vftable
```

### rglAnimation_memory_manager_task

Animation memory manager task.

```cpp
rglAnimation_memory_manager_task::vftable
```

## Animation Data

### rglAnimation_clip_bipedal_movement_and_ik_data

Bipedal movement and IK data.

```cpp
rglAnimation_clip_bipedal_movement_and_ik_data::vftable
```

### rglAnimation_clip_blend_data

Animation blend data.

```cpp
rglAnimation_clip_blend_data::vftable
```

### rglAnimation_clip_displacement_data

Animation displacement data.

```cpp
rglAnimation_clip_displacement_data::vftable
```

### rglAnimation_clip_hand_switch_data

Hand switch animation data.

```cpp
rglAnimation_clip_hand_switch_data::vftable
```

### rglAnimation_clip_mount_change_data

Mount change animation data.

```cpp
rglAnimation_clip_mount_change_data::vftable
```

### rglAnimation_clip_particle_data

Animation particle data.

```cpp
rglAnimation_clip_particle_data::vftable
```

### rglAnimation_clip_quadrupedal_movement_data

Quadrupedal movement animation data.

```cpp
rglAnimation_clip_quadrupedal_movement_data::vftable
```

## Skeleton

### rglSkeleton

Skeleton.

```cpp
rglSkeleton::vftable
```

### rglSkeleton_anim

Animated skeleton.

```cpp
rglSkeleton_anim::vftable
```

### rglSkeleton_model

Skeleton model.

```cpp
rglSkeleton_model::vftable
```

## Animation Instance

### animation_instance

Animation instance.

```cpp
animation_instance::vftable
```

### rglNull_anim_tree

Null animation tree.

```cpp
rglNull_anim_tree::vftable
```

### rglDefault_anim_system

Default animation system.

```cpp
rglDefault_anim_system::vftable
```

## Morph Animation

### rglMorph_anim

Morph animation.

```cpp
rglMorph_anim::vftable
```

### rglAsset_metadata_morph_anim

Morph animation asset metadata.

```cpp
rglAsset_metadata_morph_anim::vftable
```

## Usage Example

```csharp
// Example: the animation system is driven internally by the engine each frame.
// Modders typically interact with it indirectly through agent actions and
// Mount&Blade scripting rather than calling these vftables directly.
// Use the native source reference to trace which anim node handles a given
// action when debugging animation glitches or desyncs.
```

---

**Last updated:** 2026-05-14  
**Source version:** TaleWorlds.Native.dll v1.3.15
