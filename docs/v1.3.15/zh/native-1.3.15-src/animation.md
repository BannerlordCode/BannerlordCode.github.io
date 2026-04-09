---
title: 动画系统 / Animation System
description: TaleWorlds.Native.dll 动画系统类参考
---

# 动画系统 / Animation System

## 概述 / Overview

动画系统管理游戏中的所有动画，包括人物动画、马匹动画、武器动画等。

The animation system manages all animations in the game, including character animations, horse animations, weapon animations, etc.

## 动画树 / Animation Tree

### rglAnim_tree

动画树根节点。管理动画状态机。

```cpp
rglAnim_tree::vftable
```

**功能:**
- 动画状态管理
- 混合控制
- 动画事件触发

## 动画节点 / Animation Nodes

### rglAnim_node

动画节点基类。

```cpp
rglAnim_node::vftable
```

### rglAnim_node_human_adjustments

人物调整动画节点。

```cpp
rglAnim_node_human_adjustments::vftable
```

### rglAnim_node_horse_adjustments

马匹调整动画节点。

```cpp
rglAnim_node_horse_adjustments::vftable
```

### rglAnim_node_movement

移动动画节点。

```cpp
rglAnim_node_movement::vftable
```

### rglAnim_node_horse_movement

马匹移动动画节点。

```cpp
rglAnim_node_horse_movement::vftable
```

### rglAnim_node_inverse_kinematics

反向运动学动画节点。

```cpp
rglAnim_node_inverse_kinematics::vftable
```

### rglAnim_node_layer_system

动画层级系统节点。

```cpp
rglAnim_node_layer_system::vftable
```

### Anim_node_morph

动画变形节点。

```cpp
Anim_node_morph::vftable
```

### Anim_node_capture

动画捕获节点。

```cpp
Anim_node_capture::vftable
```

## Agent 动画系统

### Agent_anim_system

Agent 通用动画系统。

```cpp
Agent_anim_system::vftable
```

### Agent_renderer

Agent 渲染器。

```cpp
Agent_renderer::vftable
```

### Agent_anim_system

Agent 动画系统实现。

```cpp
Agent_anim_system::vftable
```

## 人物动画系统

### Human_anim_system

人物动画系统。

```cpp
Human_anim_system::vftable
```

**控制:**
- 行走/奔跑
- 攻击动作
- 防御动作
- 特殊动作

## 马匹动画系统

### Horse_anim_system

马匹动画系统。

```cpp
Horse_anim_system::vftable
```

**控制:**
- 马匹移动
- 马匹奔跑
- 马匹站立

## 武器动画系统

### Weapon_with_rope_anim_system

绳索武器动画系统。

```cpp
Weapon_with_rope_anim_system::vftable
```

### Rein_anim_system

缰绳动画系统。

```cpp
Rein_anim_system::vftable
```

### Holster_anim_system

挂载动画系统。

```cpp
holster_script::vftable
```

### Weapon_meta_mesh

武器元网格。

```cpp
Weapon_meta_mesh::vftable
```

## 动画剪辑 / Animation Clips

### Animation_clip_item

动画剪辑项。

```cpp
Animation_clip_item::vftable
```

### Animation_clip_item_metadata

动画剪辑项元数据。

```cpp
Animation_clip_item_metadata::vftable
```

### Animation_clip_data

动画剪辑数据。

```cpp
Animation_clip_data::vftable
```

### rglAnimation_clip_data

rgl 动画剪辑数据。

```cpp
rglAnimation_clip_data::vftable
```

### rglAnimation_memory_manager_task

动画内存管理任务。

```cpp
rglAnimation_memory_manager_task::vftable
```

## 动画数据 / Animation Data

### rglAnimation_clip_bipedal_movement_and_ik_data

双足移动和 IK 数据。

```cpp
rglAnimation_clip_bipedal_movement_and_ik_data::vftable
```

### rglAnimation_clip_blend_data

动画混合数据。

```cpp
rglAnimation_clip_blend_data::vftable
```

### rglAnimation_clip_displacement_data

动画位移数据。

```cpp
rglAnimation_clip_displacement_data::vftable
```

### rglAnimation_clip_hand_switch_data

手部切换动画数据。

```cpp
rglAnimation_clip_hand_switch_data::vftable
```

### rglAnimation_clip_mount_change_data

骑乘切换动画数据。

```cpp
rglAnimation_clip_mount_change_data::vftable
```

### rglAnimation_clip_particle_data

动画粒子数据。

```cpp
rglAnimation_clip_particle_data::vftable
```

### rglAnimation_clip_quadrupedal_movement_data

四足移动动画数据。

```cpp
rglAnimation_clip_quadrupedal_movement_data::vftable
```

## 骨骼 / Skeleton

### rglSkeleton

骨骼。

```cpp
rglSkeleton::vftable
```

### rglSkeleton_anim

动画骨骼。

```cpp
rglSkeleton_anim::vftable
```

### rglSkeleton_model

骨骼模型。

```cpp
rglSkeleton_model::vftable
```

## 动画实例 / Animation Instance

### animation_instance

动画实例。

```cpp
animation_instance::vftable
```

### rglNull_anim_tree

空动画树。

```cpp
rglNull_anim_tree::vftable
```

### rglDefault_anim_system

默认动画系统。

```cpp
rglDefault_anim_system::vftable
```

## Morph 动画

### rglMorph_anim

变形动画。

```cpp
rglMorph_anim::vftable
```

### rglAsset_metadata_morph_anim

变形动画资源元数据。

```cpp
rglAsset_metadata_morph_anim::vftable
```
