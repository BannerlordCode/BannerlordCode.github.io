---
title: "SneakIntoTheVillaMissionController"
description: "Auto-generated class reference for SneakIntoTheVillaMissionController."
---
# SneakIntoTheVillaMissionController

**Namespace:** Storymode.Missions
**Module:** Storymode.Missions
**Type:** `public class SneakIntoTheVillaMissionController : MissionLogic`
**Base:** `MissionLogic`
**File:** `StoryMode/Storymode/Missions/SneakIntoTheVillaMissionController.cs`

## Overview

`SneakIntoTheVillaMissionController` is a controller whose job is less about storing data and more about driving the subsystem into its next state after receiving input.

## Mental Model

Treat `SneakIntoTheVillaMissionController` as a Controller-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Instance` | `public static SneakIntoTheVillaMissionController Instance { get; }` |
| `State` | `public SneakIntoTheVillaMissionController.MissionState State { get; }` |
| `HeadmanAgent` | `public Agent HeadmanAgent { get; }` |

## Key Methods

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Invoked when the mission tick event is raised.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnMissionTick(0);
```

### OnCreated
`public override void OnCreated()`

**Purpose:** Invoked when the created event is raised.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnCreated();
```

### AfterStart
`public override void AfterStart()`

**Purpose:** Executes the AfterStart logic.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.AfterStart();
```

### IsStealthTutorialReadyForActivation
`public static bool IsStealthTutorialReadyForActivation(SneakIntoTheVillaMissionController.MissionState missionState)`

**Purpose:** Determines whether the this instance is in the stealth tutorial ready for activation state or condition.

```csharp
// Static call; no instance required
SneakIntoTheVillaMissionController.IsStealthTutorialReadyForActivation(missionState);
```

### IsStealthTutorialReadyForCompletion
`public static bool IsStealthTutorialReadyForCompletion(SneakIntoTheVillaMissionController.MissionState missionState)`

**Purpose:** Determines whether the this instance is in the stealth tutorial ready for completion state or condition.

```csharp
// Static call; no instance required
SneakIntoTheVillaMissionController.IsStealthTutorialReadyForCompletion(missionState);
```

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Invoked when the remove behavior event is raised.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnRemoveBehavior();
```

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Invoked when the agent removed event is raised.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnAgentRemoved(affectedAgent, affectorAgent, agentState, blow);
```

### OnAfterTalkingToPrisoner
`public void OnAfterTalkingToPrisoner()`

**Purpose:** Invoked when the after talking to prisoner event is raised.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnAfterTalkingToPrisoner();
```

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Invoked when the object used event is raised.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnObjectUsed(userAgent, usedObject);
```

### IsTargetAgentDistracted
`public bool IsTargetAgentDistracted()`

**Purpose:** Determines whether the this instance is in the target agent distracted state or condition.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
var result = sneakIntoTheVillaMissionController.IsTargetAgentDistracted();
```

### IsTargetAgentKilled
`public bool IsTargetAgentKilled()`

**Purpose:** Determines whether the this instance is in the target agent killed state or condition.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
var result = sneakIntoTheVillaMissionController.IsTargetAgentKilled();
```

### IsMainAgentDraggingTargetBody
`public bool IsMainAgentDraggingTargetBody()`

**Purpose:** Determines whether the this instance is in the main agent dragging target body state or condition.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
var result = sneakIntoTheVillaMissionController.IsMainAgentDraggingTargetBody();
```

### OnMeleeHit
`public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Invoked when the melee hit event is raised.

```csharp
// Obtain an instance of SneakIntoTheVillaMissionController from the subsystem API first
SneakIntoTheVillaMissionController sneakIntoTheVillaMissionController = ...;
sneakIntoTheVillaMissionController.OnMeleeHit(attacker, victim, false, collisionData);
```

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SneakIntoTheVillaMissionController>();
```

## See Also

- [Area Index](../)