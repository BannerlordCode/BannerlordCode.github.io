---
title: "MissionBattleUIBaseView"
description: "Auto-generated class reference for MissionBattleUIBaseView."
---
# MissionBattleUIBaseView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class MissionBattleUIBaseView : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/MissionBattleUIBaseView.cs`

## Overview

`MissionBattleUIBaseView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionBattleUIBaseView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsViewCreated` | `public bool IsViewCreated { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionBattleUIBaseView from the subsystem API first
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionBattleUIBaseView from the subsystem API first
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionBattleUIBaseView from the subsystem API first
MissionBattleUIBaseView missionBattleUIBaseView = ...;
missionBattleUIBaseView.OnMissionScreenFinalize();
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
MissionBattleUIBaseView instance = ...;
```

## See Also

- [Area Index](../)