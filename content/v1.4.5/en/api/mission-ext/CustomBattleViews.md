---
title: "CustomBattleViews"
description: "Auto-generated class reference for CustomBattleViews."
---
# CustomBattleViews

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleViews`
**Base:** none
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/TaleWorlds.MountAndBlade.CustomBattle/CustomBattleViews.cs`

## Overview

`CustomBattleViews` lives in `TaleWorlds.MountAndBlade.CustomBattle` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenCustomBattleMission
`public static MissionView OpenCustomBattleMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with custom battle mission.

```csharp
// Static call; no instance required
CustomBattleViews.OpenCustomBattleMission(mission);
```

### OpenCustomSiegeBattleMission
`public static MissionView OpenCustomSiegeBattleMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with custom siege battle mission.

```csharp
// Static call; no instance required
CustomBattleViews.OpenCustomSiegeBattleMission(mission);
```

### OpenCustomBattleLordsHallMission
`public static MissionView OpenCustomBattleLordsHallMission(Mission mission)`

**Purpose:** Opens the resource or UI associated with custom battle lords hall mission.

```csharp
// Static call; no instance required
CustomBattleViews.OpenCustomBattleLordsHallMission(mission);
```

## Usage Example

```csharp
CustomBattleViews.OpenCustomBattleMission(mission);
```

## See Also

- [Area Index](../)