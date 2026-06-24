<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletCrosshair`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletCrosshair

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletCrosshair : MissionBattleUIBaseView`
**Base:** `MissionBattleUIBaseView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission/MissionGauntletCrosshair.cs`

## Overview

`MissionGauntletCrosshair` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Called when the `photo mode activated` event is raised.

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Called when the `photo mode deactivated` event is raised.

## Usage Example

```csharp
var value = new MissionGauntletCrosshair();
value.OnMissionScreenTick(0);
```

## See Also

- [Complete Class Catalog](../catalog)