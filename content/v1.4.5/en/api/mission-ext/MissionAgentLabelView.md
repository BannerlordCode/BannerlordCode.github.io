---
title: "MissionAgentLabelView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionAgentLabelView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionAgentLabelView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MissionAgentLabelView : MissionView`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews/MissionAgentLabelView.cs`

## Overview

`MissionAgentLabelView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionAgentLabelView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAssignPlayerAsSergeantOfFormation
`public override void OnAssignPlayerAsSergeantOfFormation(Agent agent)`

**Purpose:** Called when the `assign player as sergeant of formation` event is raised.

### OnClearScene
`public override void OnClearScene()`

**Purpose:** Called when the `clear scene` event is raised.

### OnMissionModeChange
`public override void OnMissionModeChange(MissionMode oldMissionMode, bool atStart)`

**Purpose:** Called when the `mission mode change` event is raised.

### OnAgentTeamChanged
`public override void OnAgentTeamChanged(Team prevTeam, Team newTeam, Agent agent)`

**Purpose:** Called when the `agent team changed` event is raised.

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Called when the `photo mode activated` event is raised.

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Called when the `photo mode deactivated` event is raised.

## Usage Example

```csharp
var view = new MissionAgentLabelView();
```

## See Also

- [Complete Class Catalog](../catalog)