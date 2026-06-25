---
title: "MissionAgentLabelView"
description: "Auto-generated class reference for MissionAgentLabelView."
---
# MissionAgentLabelView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLabelView : MissionView`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentLabelView.cs`

## Overview

`MissionAgentLabelView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionAgentLabelView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnBehaviorInitialize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnMissionTick(0);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnRemoveBehavior();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnMissionScreenFinalize();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, killingBlow);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAgentBuild(agent, banner);
```

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**Purpose:** Invoked when the assign player as sergeant of formation event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAssignPlayerAsSergeantOfFormation(agent);
```

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Invoked when the clear scene event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnClearScene();
```

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Invoked when the mission mode change event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnMissionModeChange(oldMissionMode, false);
```

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Invoked when the agent team changed event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnAgentTeamChanged(prevTeam, newTeam, agent);
```

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Invoked when the photo mode activated event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnPhotoModeActivated();
```

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Invoked when the photo mode deactivated event is raised.

```csharp
// Obtain an instance of MissionAgentLabelView from the subsystem API first
MissionAgentLabelView missionAgentLabelView = ...;
missionAgentLabelView.OnPhotoModeDeactivated();
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionAgentLabelView view = ...;
```

## See Also

- [Area Index](../)