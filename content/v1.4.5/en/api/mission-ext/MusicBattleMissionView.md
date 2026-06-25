---
title: "MusicBattleMissionView"
description: "Auto-generated class reference for MusicBattleMissionView."
---
# MusicBattleMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicBattleMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Sound/MusicBattleMissionView.cs`

## Overview

`MusicBattleMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicBattleMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MusicBattleMissionView from the subsystem API first
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.OnBehaviorInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the mission screen finalize event is raised.

```csharp
// Obtain an instance of MusicBattleMissionView from the subsystem API first
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.OnMissionScreenFinalize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of MusicBattleMissionView from the subsystem API first
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.AfterStart();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MusicBattleMissionView from the subsystem API first
MusicBattleMissionView musicBattleMissionView = ...;
musicBattleMissionView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MusicBattleMissionView view = ...;
```

## See Also

- [Area Index](../)