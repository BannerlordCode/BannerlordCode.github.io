---
title: "MissionGauntletAdminPanel"
description: "Auto-generated class reference for MissionGauntletAdminPanel."
---
# MissionGauntletAdminPanel

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionGauntletAdminPanel : MissionView`
**Base:** `MissionView`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI/TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission/MissionGauntletAdminPanel.cs`

## Overview

`MissionGauntletAdminPanel` lives in `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade.Multiplayer.GauntletUI.Mission` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Methods

### CreateOptionProviderDelegeate
`public delegate IAdminPanelOptionProvider CreateOptionProviderDelegeate()`

**Purpose:** **Purpose:** Constructs a new option provider delegeate entity and returns it to the caller.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.CreateOptionProviderDelegeate();
```

### CreateOptionViewModelDelegate
`public delegate MultiplayerAdminPanelOptionBaseVM CreateOptionViewModelDelegate(IAdminPanelOption option)`

**Purpose:** **Purpose:** Constructs a new option view model delegate entity and returns it to the caller.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.CreateOptionViewModelDelegate(option);
```

### CreateActionViewModelDelegate
`public delegate MultiplayerAdminPanelOptionBaseVM CreateActionViewModelDelegate(IAdminPanelAction action)`

**Purpose:** **Purpose:** Constructs a new action view model delegate entity and returns it to the caller.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.CreateActionViewModelDelegate(action);
```

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** **Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.OnMissionScreenInitialize();
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission screen tick event is raised.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.OnMissionScreenTick(0);
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** **Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.OnMissionScreenFinalize();
```

### OnEscape
`public override bool OnEscape()`

**Purpose:** **Purpose:** Invoked when the escape event is raised.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
var result = missionGauntletAdminPanel.OnEscape();
```

### AddOptionProviderCreator
`public void AddOptionProviderCreator(CreateOptionProviderDelegeate creator)`

**Purpose:** **Purpose:** Adds option provider creator to the current collection or state.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.AddOptionProviderCreator(creator);
```

### AddOptionViewModelCreator
`public void AddOptionViewModelCreator(CreateOptionViewModelDelegate creator)`

**Purpose:** **Purpose:** Adds option view model creator to the current collection or state.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.AddOptionViewModelCreator(creator);
```

### AddActionViewModelCreator
`public void AddActionViewModelCreator(CreateActionViewModelDelegate creator)`

**Purpose:** **Purpose:** Adds action view model creator to the current collection or state.

```csharp
// Obtain an instance of MissionGauntletAdminPanel from the subsystem API first
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.AddActionViewModelCreator(creator);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
MissionGauntletAdminPanel missionGauntletAdminPanel = ...;
missionGauntletAdminPanel.CreateOptionProviderDelegeate();
```

## See Also

- [Area Index](../)