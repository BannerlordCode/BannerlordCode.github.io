---
title: "MissionGauntletTournamentView"
description: "Auto-generated class reference for MissionGauntletTournamentView."
---
# MissionGauntletTournamentView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletTournamentView : MissionView`
**Base:** `MissionView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletTournamentView.cs`

## Overview

`MissionGauntletTournamentView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletTournamentView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the mission screen initialize event is raised.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnMissionScreenFinalize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnMissionTick(0);
```

### IsOpeningEscapeMenuOnFocusChangeAllowed
`public override bool IsOpeningEscapeMenuOnFocusChangeAllowed()`

**Purpose:** Determines whether the this instance is in the opening escape menu on focus change allowed state or condition.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
var result = missionGauntletTournamentView.IsOpeningEscapeMenuOnFocusChangeAllowed();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionGauntletTournamentView from the subsystem API first
MissionGauntletTournamentView missionGauntletTournamentView = ...;
missionGauntletTournamentView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletTournamentView view = ...;
```

## See Also

- [Area Index](../)