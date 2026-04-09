---
title: 任务系统 / Mission System
description: TaleWorlds.Native.dll 任务/战斗系统类参考
---

# 任务系统 / Mission System

## 概述 / Overview

任务系统管理战斗场景中的实体、导航和寻路。

The mission system manages entities, navigation, and pathfinding in battle scenarios.

## Agent

### Agent

游戏实体代理。代表战斗中的士兵、玩家等。

```cpp
Agent::vftable
```

**功能:**
- 移动控制
- 攻击/防御
- 生命值管理
- 动画同步

### Missile

弹丸。弓箭、投掷物等。

```cpp
Missile::vftable
```

### Item_holster_set

物品挂载集。

```cpp
Item_holster_set::vftable
```

## 导航系统 / Navigation System

### path_navigator

路径导航器。

```cpp
path_navigator::vftable
```

### path_converger

路径收敛器。

```cpp
path_converger::vftable
```

### path_spline_sound_emitter

路径样条音效发射器。

```cpp
path_spline_sound_emitter::vftable
```

### barrier_builder

障碍物构建器。

```cpp
barrier_builder::vftable
```

## 城镇管理 / Town Management

### town_entity_manager

城镇实体管理器。

```cpp
town_entity_manager::vftable
```

### town_scene_manager

城镇场景管理器。

```cpp
town_scene_manager::vftable
```

### rglTown_icon_component

城镇图标组件。

```cpp
rglTown_icon_component::vftable
```

## 其他任务系统类 / Other Mission Classes

### Ship_visual_creator

船只视觉创建器。

```cpp
Ship_visual_creator::vftable
```

### mass_selection

大群选择。

```cpp
mass_selection::vftable
```

### worldmap_budget_checker

世界地图预算检查器。

```cpp
worldmap_budget_checker::vftable
```
