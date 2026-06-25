---
title: "MissionGauntletMultiplayerOrderUIHandler"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletMultiplayerOrderUIHandler`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletMultiplayerOrderUIHandler

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletMultiplayerOrderUIHandler : GauntletOrderUIHandler`
**Base:** `GauntletOrderUIHandler`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletMultiplayerOrderUIHandler.cs`

## Overview

`MissionGauntletMultiplayerOrderUIHandler` is a handler used to run agreed response logic when a specific event occurs.

## Mental Model

Treat `MissionGauntletMultiplayerOrderUIHandler` as a Handler-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsValidForTick` | `public override bool IsValidForTick { get; }` |

## Key Methods

### IsReady
`public override bool IsReady()`

**Purpose:** Handles logic related to `is ready`.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### InitializeInADisgustingManner
`public void InitializeInADisgustingManner()`

**Purpose:** Initializes the state, resources, or bindings for `in a disgusting manner`.

### ValidateInADisgustingManner
`public void ValidateInADisgustingManner()`

**Purpose:** Handles logic related to `validate in a disgusting manner`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionGauntletMultiplayerOrderUIHandler());
```

## See Also

- [Complete Class Catalog](../catalog)