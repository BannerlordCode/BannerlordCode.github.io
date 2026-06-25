---
title: "MultiplayerAchievementComponent"
description: "Auto-generated class reference for MultiplayerAchievementComponent."
---
# MultiplayerAchievementComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MultiplayerAchievementComponent : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.CustomBattle/TaleWorlds.MountAndBlade.Multiplayer/TaleWorlds.MountAndBlade/MultiplayerAchievementComponent.cs`

## Overview

`MultiplayerAchievementComponent` is a component-style object, typically attached to an Agent, entity, or subsystem to hold localized state and behavior.

## Mental Model

Treat `MultiplayerAchievementComponent` as a Component-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MultiplayerAchievementComponent from the subsystem API first
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnBehaviorInitialize();
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MultiplayerAchievementComponent from the subsystem API first
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.EarlyStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MultiplayerAchievementComponent from the subsystem API first
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnMissionTick(0);
```

### OnAgentMount
`public override void OnAgentMount(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent mount event is raised.

```csharp
// Obtain an instance of MultiplayerAchievementComponent from the subsystem API first
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentMount(agent);
```

### OnAgentDismount
`public override void OnAgentDismount(Agent agent)`

**Purpose:** **Purpose:** Invoked when the agent dismount event is raised.

```csharp
// Obtain an instance of MultiplayerAchievementComponent from the subsystem API first
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentDismount(agent);
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MultiplayerAchievementComponent from the subsystem API first
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentBuild(agent, banner);
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** **Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of MultiplayerAchievementComponent from the subsystem API first
MultiplayerAchievementComponent multiplayerAchievementComponent = ...;
multiplayerAchievementComponent.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

## Usage Example

```csharp
var component = agent.GetComponent<MultiplayerAchievementComponent>();
```

## See Also

- [Area Index](../)