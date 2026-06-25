---
title: "MissionGauntletCategoryLoadManager"
description: "Auto-generated class reference for MissionGauntletCategoryLoadManager."
---
# MissionGauntletCategoryLoadManager

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletCategoryLoadManager : MissionView, IMissionListener`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletCategoryLoadManager.cs`

## Overview

`MissionGauntletCategoryLoadManager` is a manager: it owns a subsystem's lifecycle, lookup entry points, and cross-object coordination responsibilities.

## Mental Model

Treat `MissionGauntletCategoryLoadManager` as a Manager-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** **Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletCategoryLoadManager from the subsystem API first
MissionGauntletCategoryLoadManager missionGauntletCategoryLoadManager = ...;
missionGauntletCategoryLoadManager.AfterStart();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletCategoryLoadManager from the subsystem API first
MissionGauntletCategoryLoadManager missionGauntletCategoryLoadManager = ...;
missionGauntletCategoryLoadManager.OnMissionScreenFinalize();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionGauntletCategoryLoadManager from the subsystem API first
MissionGauntletCategoryLoadManager missionGauntletCategoryLoadManager = ...;
missionGauntletCategoryLoadManager.OnMissionTick(0);
```

## Usage Example

```csharp
var manager = MissionGauntletCategoryLoadManager.Current;
```

## See Also

- [Area Index](../)