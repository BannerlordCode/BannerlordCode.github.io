---
title: "MissionTournamentJoustingView"
description: "Auto-generated class reference for MissionTournamentJoustingView."
---
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

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionTournamentJoustingView from the subsystem API first
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.AfterStart();
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon attackerWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of MissionTournamentJoustingView from the subsystem API first
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.OnAgentHit(affectedAgent, affectorAgent, attackerWeapon, blow, attackCollisionData);
```

### ShowMessage
`public void ShowMessage(string str, float duration, bool hasPriority = true)`

**Purpose:** Displays the UI or element associated with `message`.

```csharp
// Obtain an instance of MissionTournamentJoustingView from the subsystem API first
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.ShowMessage("example", 0, false);
```

### ShowMessage
`public void ShowMessage(Agent agent, string str, float duration, bool hasPriority = true)`

**Purpose:** Displays the UI or element associated with `message`.

```csharp
// Obtain an instance of MissionTournamentJoustingView from the subsystem API first
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.ShowMessage(agent, "example", 0, false);
```

### DeleteMessage
`public void DeleteMessage(string str)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionTournamentJoustingView from the subsystem API first
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.DeleteMessage("example");
```

### DeleteMessage
`public void DeleteMessage(Agent agent, string str)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MissionTournamentJoustingView from the subsystem API first
MissionTournamentJoustingView missionTournamentJoustingView = ...;
missionTournamentJoustingView.DeleteMessage(agent, "example");
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MissionTournamentJoustingView view = ...;
```

## See Also

- [Area Index](../)