---
title: Mission System
description: TaleWorlds.Native.dll mission/battle system class reference
---
# Mission System

## Mental Model

Treat `Mission System` as an entry point or data node for this subsystem: inspect its properties first, then decide which methods to call.

The mission system manages entities, navigation, and pathfinding in battle scenarios.

## Overview

The mission subsystem covers everything that lives inside a battle or scene mission: agents (soldiers, the player), missiles (arrows, thrown items), navigation helpers (`path_navigator`, `path_converger`), and town/scene management entities. Most mod interaction happens through the managed `Mission` API; these native classes are the engine-side implementation you see in decompiled traces.

## Agent

### Agent

Game entity proxy. Represents soldiers, the player, etc. in battle.

```cpp
Agent::vftable
```

**Responsibilities:**
- Movement control
- Attack / defense
- Health management
- Animation synchronization

### Missile

Projectile. Arrows, thrown items, etc.

```cpp
Missile::vftable
```

### Item_holster_set

Item holster set.

```cpp
Item_holster_set::vftable
```

## Navigation System

### path_navigator

Path navigator.

```cpp
path_navigator::vftable
```

### path_converger

Path converger.

```cpp
path_converger::vftable
```

### path_spline_sound_emitter

Path spline sound emitter.

```cpp
path_spline_sound_emitter::vftable
```

### barrier_builder

Barrier builder.

```cpp
barrier_builder::vftable
```

## Town Management

### town_entity_manager

Town entity manager.

```cpp
town_entity_manager::vftable
```

### town_scene_manager

Town scene manager.

```cpp
town_scene_manager::vftable
```

### rglTown_icon_component

Town icon component.

```cpp
rglTown_icon_component::vftable
```

## Other Mission Classes

### Ship_visual_creator

Ship visual creator.

```cpp
Ship_visual_creator::vftable
```

> Not found in native-1.2.9 or native-1.4.5; neither tree is v1.3.15, so existence in the v1.3.15 decompile cannot be ruled out — unverified in this environment.

### mass_selection

Mass selection.

```cpp
mass_selection::vftable
```

### worldmap_budget_checker

World map budget checker.

```cpp
worldmap_budget_checker::vftable
```

## Usage Example

```csharp
// Example: the mission system is driven by the engine during battles and scenes.
// Modders interact through the managed Mission API (Agent, Missile, etc.) rather
// than these native vftables. Use this reference to trace engine-side behavior
// when debugging battle logic, pathfinding, or entity lifecycle issues.
```

---

**Last updated:** 2026-05-14  
**Source version:** TaleWorlds.Native.dll v1.3.15
