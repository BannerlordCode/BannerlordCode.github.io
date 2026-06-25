---
title: "CustomBattleViews"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `CustomBattleViews`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# CustomBattleViews

**Namespace:** TaleWorlds.MountAndBlade.CustomBattle
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class CustomBattleViews`
**Area:** mission-ext

## Overview

`CustomBattleViews` lives in `TaleWorlds.MountAndBlade.CustomBattle`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.CustomBattle` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OpenCustomBattleMission
`public static MissionView OpenCustomBattleMission(Mission mission)`

**Purpose:** Handles logic related to `open custom battle mission`.

### OpenCustomSiegeBattleMission
`public static MissionView OpenCustomSiegeBattleMission(Mission mission)`

**Purpose:** Handles logic related to `open custom siege battle mission`.

### OpenCustomBattleLordsHallMission
`public static MissionView OpenCustomBattleLordsHallMission(Mission mission)`

**Purpose:** Handles logic related to `open custom battle lords hall mission`.

## Usage Example

```csharp
// Prepare the required context, then call the static entry point directly
CustomBattleViews.OpenCustomBattleMission(mission);
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
