---
title: "MusicStealthMissionView"
description: "Auto-generated class reference for MusicStealthMissionView."
---
# MusicStealthMissionView

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Sound
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MusicStealthMissionView : MissionView, IMusicHandler`
**Base:** `MissionView`
**File:** `Modules.Native/TaleWorlds.MountAndBlade.View/TaleWorlds.MountAndBlade.View.MissionViews.Sound/MusicStealthMissionView.cs`

## Overview

`MusicStealthMissionView` represents a view-layer object, usually responsible for projecting game state into a screen, scene, or interactive UI.

## Mental Model

Treat `MusicStealthMissionView` as a View-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Invoked when the `behavior initialize` event is raised.

```csharp
// Obtain an instance of MusicStealthMissionView from the subsystem API first
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnBehaviorInitialize();
```

### OnMissionScreenFinalize
`public override void OnMissionScreenFinalize()`

**Purpose:** Invoked when the `mission screen finalize` event is raised.

```csharp
// Obtain an instance of MusicStealthMissionView from the subsystem API first
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnMissionScreenFinalize();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of MusicStealthMissionView from the subsystem API first
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.AfterStart();
```

### OnAgentAlarmedStateChanged
`public override void OnAgentAlarmedStateChanged(Agent agent, AIStateFlag flag)`

**Purpose:** Invoked when the `agent alarmed state changed` event is raised.

```csharp
// Obtain an instance of MusicStealthMissionView from the subsystem API first
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnAgentAlarmedStateChanged(agent, flag);
```

### OnAgentHit
`public override void OnAgentHit(Agent affectedAgent, Agent affectorAgent, in MissionWeapon affectorWeapon, in Blow blow, in AttackCollisionData attackCollisionData)`

**Purpose:** Invoked when the `agent hit` event is raised.

```csharp
// Obtain an instance of MusicStealthMissionView from the subsystem API first
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnAgentHit(affectedAgent, affectorAgent, affectorWeapon, blow, attackCollisionData);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the `agent removed` event is raised.

```csharp
// Obtain an instance of MusicStealthMissionView from the subsystem API first
MusicStealthMissionView musicStealthMissionView = ...;
musicStealthMissionView.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## Usage Example

```csharp
// Retrieve this view from the subsystem API or scene
MusicStealthMissionView view = ...;
```

## See Also

- [Area Index](../)