---
title: "MusicStealthMissionView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MusicStealthMissionView`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MusicStealthMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicStealthMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `Bannerlord.Source/Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Sound/MusicStealthMissionView.cs`

## Overview

`MusicStealthMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicStealthMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Called when the `mission screen finalize` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Called when the `agent alarmed state changed` event is raised.

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

## Usage Example

```csharp
var view = new MusicStealthMissionView();
```

## See Also

- [Complete Class Catalog](../catalog)