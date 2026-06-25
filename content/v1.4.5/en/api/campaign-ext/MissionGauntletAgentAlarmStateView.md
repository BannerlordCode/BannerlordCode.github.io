---
title: "MissionGauntletAgentAlarmStateView"
description: "Auto-generated class reference for MissionGauntletAgentAlarmStateView."
---
# MissionGauntletAgentAlarmStateView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletAgentAlarmStateView : MissionAgentAlarmStateView`
**Base:** `MissionAgentAlarmStateView`
**File:** `Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletAgentAlarmStateView.cs`

## Overview

`MissionGauntletAgentAlarmStateView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletAgentAlarmStateView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Invoked when the `mission screen initialize` event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentAlarmStateView from the subsystem API first
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnMissionScreenInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentAlarmStateView from the subsystem API first
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnMissionScreenFinalize();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the `agent build` event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentAlarmStateView from the subsystem API first
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnAgentBuild(agent, banner);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Invoked when the `agent team changed` event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentAlarmStateView from the subsystem API first
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentAlarmStateView from the subsystem API first
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Invoked when the `mission screen tick` event is raised.

```csharp
// Obtain an instance of MissionGauntletAgentAlarmStateView from the subsystem API first
MissionGauntletAgentAlarmStateView missionGauntletAgentAlarmStateView = ...;
missionGauntletAgentAlarmStateView.OnMissionScreenTick(0);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionGauntletAgentAlarmStateView view = ...;
```

## See Also

- [Area Index](../)