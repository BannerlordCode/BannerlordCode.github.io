---
title: "MissionConversationLogic"
description: "Auto-generated class reference for MissionConversationLogic."
---
# MissionConversationLogic

**Namespace:** SandBox.Conversation.MissionLogics
**Module:** SandBox.Conversation
**Type:** `public class MissionConversationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `Modules.SandBox/SandBox/SandBox.Conversation.MissionLogics/MissionConversationLogic.cs`

## Overview

`MissionConversationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionConversationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `State` | `public MissionState State { get; }` |
| `ConversationManager` | `public ConversationManager ConversationManager { get; }` |
| `IsReadyForConversation` | `public bool IsReadyForConversation { get; }` |
| `ConversationAgent` | `public Agent ConversationAgent { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** **Purpose:** Invoked when the behavior initialize event is raised.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnBehaviorInitialize();
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** **Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnRemoveBehavior();
```

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** **Purpose:** Invoked when the agent build event is raised.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnAgentBuild(agent, banner);
```

### SetSpawnArea
`public void SetSpawnArea(Alley alley)`

**Purpose:** **Purpose:** Assigns a new value to spawn area and updates the object's internal state.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.SetSpawnArea(alley);
```

### SetSpawnArea
`public void SetSpawnArea(Workshop workshop)`

**Purpose:** **Purpose:** Assigns a new value to spawn area and updates the object's internal state.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.SetSpawnArea(workshop);
```

### SetSpawnArea
`public void SetSpawnArea(string customTag)`

**Purpose:** **Purpose:** Assigns a new value to spawn area and updates the object's internal state.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.SetSpawnArea("example");
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** **Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnMissionTick(0);
```

### EarlyStart
`public override void EarlyStart()`

**Purpose:** **Purpose:** Executes the EarlyStart logic.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.EarlyStart();
```

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** **Purpose:** Invoked when the agent interaction event is raised.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnAgentInteraction(userAgent, agent, 0);
```

### StartConversation
`public void StartConversation(Agent agent, bool setActionsInstantly, bool isInitialization = false)`

**Purpose:** **Purpose:** Starts the conversation flow or state machine.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.StartConversation(agent, false, false);
```

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** **Purpose:** Determines whether the this instance is in the there agent action state or condition.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
var result = missionConversationLogic.IsThereAgentAction(userAgent, otherAgent);
```

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** **Purpose:** Invoked when the rendering started event is raised.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.OnRenderingStarted();
```

### DisableStartConversation
`public void DisableStartConversation(bool isDisabled)`

**Purpose:** **Purpose:** Executes the DisableStartConversation logic.

```csharp
// Obtain an instance of MissionConversationLogic from the subsystem API first
MissionConversationLogic missionConversationLogic = ...;
missionConversationLogic.DisableStartConversation(false);
```

## Usage Example

```csharp
var behavior = Mission.Current.GetMissionBehavior<MissionConversationLogic>();
```

## See Also

- [Area Index](../)