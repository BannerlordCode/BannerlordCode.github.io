<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletSingleplayerEscapeMenu`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletSingleplayerEscapeMenu

**Namespace:** TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletSingleplayerEscapeMenu : MissionGauntletEscapeMenuBase`
**Base:** `MissionGauntletEscapeMenuBase`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.GauntletUI/TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer/MissionGauntletSingleplayerEscapeMenu.cs`

## Overview

`MissionGauntletSingleplayerEscapeMenu` lives in `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.GauntletUI.Mission.Singleplayer` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnFocusChangeOnGameWindow
`public override void OnFocusChangeOnGameWindow(bool focusGained)`

**Purpose:** Called when the `focus change on game window` event is raised.

### OnSceneRenderingStarted
`public override void OnSceneRenderingStarted()`

**Purpose:** Called when the `scene rendering started` event is raised.

## Usage Example

```csharp
var value = new MissionGauntletSingleplayerEscapeMenu();
value.OnMissionScreenInitialize();
```

## See Also

- [Complete Class Catalog](../catalog)