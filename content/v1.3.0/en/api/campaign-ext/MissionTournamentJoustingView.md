---
title: "MissionTournamentJoustingView"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionTournamentJoustingView`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionTournamentJoustingView

**Namespace:** SandBox.View.Missions.Tournaments
**Module:** SandBox.View
**Type:** `public class MissionTournamentJoustingView : MissionView`
**Base:** `MissionView`
**File:** `SandBox.View/Missions/Tournaments/MissionTournamentJoustingView.cs`

## Overview

`MissionTournamentJoustingView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MissionTournamentJoustingView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Called when the `agent hit` event is raised.

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**Purpose:** Handles logic related to `show message`.

### ShowMessage
`public void ShowMessage(Agent agent, string str, float duration, bool hasPriority = true)`

**Purpose:** Handles logic related to `show message`.

### DeleteMessage
`public void DeleteMessage(string str)`

**Purpose:** Handles logic related to `delete message`.

### DeleteMessage
`public void DeleteMessage(Agent agent, string str)`

**Purpose:** Handles logic related to `delete message`.

## Usage Example

```csharp
var view = new MissionTournamentJoustingView();
```

## See Also

- [Complete Class Catalog](../catalog)