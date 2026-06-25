---
title: "MissionGauntletNameMarkerView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionGauntletNameMarkerView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionGauntletNameMarkerView

**Namespace:** SandBox.GauntletUI.Missions
**Module:** SandBox.GauntletUI
**Type:** `public class MissionGauntletNameMarkerView : MissionNameMarkerUIHandler`
**Base:** `MissionNameMarkerUIHandler`
**File:** `Bannerlord.Source/Modules.SandBox/SandBox.GauntletUI/SandBox.GauntletUI.Missions/MissionGauntletNameMarkerView.cs`

## Overview

`MissionGauntletNameMarkerView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionGauntletNameMarkerView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnMissionScreenInitialize
`public override void OnMissionScreenInitialize()`

**Purpose:** Called when the `mission screen initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**Purpose:** Called when the `mission screen tick` event is raised.

### SetMarkersDirty
`public override void SetMarkersDirty()`

**Purpose:** Sets the value or state of `markers dirty`.

### OnAgentBuild
`public override void OnAgentBuild(Agent affectedAgent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### OnAgentDeleted
`public override void OnAgentDeleted(Agent affectedAgent)`

**Purpose:** Called when the `agent deleted` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow killingBlow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnPhotoModeActivated
`public override void OnPhotoModeActivated()`

**Purpose:** Called when the `photo mode activated` event is raised.

### OnPhotoModeDeactivated
`public override void OnPhotoModeDeactivated()`

**Purpose:** Called when the `photo mode deactivated` event is raised.

## Usage Example

```csharp
var view = new MissionGauntletNameMarkerView();
```

## See Also

- [Complete Class Catalog](../catalog)