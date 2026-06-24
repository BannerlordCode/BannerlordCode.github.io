<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletAdminPanel`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletAdminPanel

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAdminPanel : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletAdminPanel.cs`

## Overview

`MissionGauntletAdminPanel` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateOptionProviderDelegeate
`public delegate IAdminPanelOptionProvider CreateOptionProviderDelegeate()`

**Purpose:** Creates a new `option provider delegeate` instance or object.

### CreateOptionViewModelDelegate
`public delegate MultiplayerAdminPanelOptionBaseVM CreateOptionViewModelDelegate(IAdminPanelOption option)`

**Purpose:** Creates a new `option view model delegate` instance or object.

### CreateActionViewModelDelegate
`public delegate MultiplayerAdminPanelOptionBaseVM CreateActionViewModelDelegate(IAdminPanelAction action)`

**Purpose:** Creates a new `action view model delegate` instance or object.

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnEscape
`public override bool OnEscape()`

**Purpose:** Called when the `escape` event is raised.

### AddOptionProviderCreator
`public void AddOptionProviderCreator(CreateOptionProviderDelegeate creator)`

**Purpose:** Adds `option provider creator` to the current collection or state.

### AddOptionViewModelCreator
`public void AddOptionViewModelCreator(CreateOptionViewModelDelegate creator)`

**Purpose:** Adds `option view model creator` to the current collection or state.

### AddActionViewModelCreator
`public void AddActionViewModelCreator(CreateActionViewModelDelegate creator)`

**Purpose:** Adds `action view model creator` to the current collection or state.

## Usage Example

```csharp
var value = new MissionGauntletAdminPanel();
value.CreateOptionProviderDelegeate();
```

## See Also

- [Complete Class Catalog](../catalog)