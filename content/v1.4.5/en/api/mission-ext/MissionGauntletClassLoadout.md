---
title: "MissionGauntletClassLoadout"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletClassLoadout`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletClassLoadout

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletClassLoadout : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletClassLoadout.cs`

## Overview

`MissionGauntletClassLoadout` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsActive` | `public bool IsActive { get; }` |
| `IsForceClosed` | `public bool IsForceClosed { get; }` |

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnTryToggle
`public void OnTryToggle(bool isActive)`

**Purpose:** Called when the `try toggle` event is raised.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

## Usage Example

```csharp
var value = new MissionGauntletClassLoadout();
value.OnMissionScreenInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)