<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SneakIntoTheVillaMissionController`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Called when the `mission tick` event is raised.

### OnCreated
`public override void OnCreated()`

**Purpose:** Called when the `created` event is raised.

### AfterStart
`public override void AfterStart()`

**Purpose:** Handles logic related to `after start`.

### IsStealthTutorialReadyForActivation
`public static bool IsStealthTutorialReadyForActivation(SneakIntoTheVillaMissionController.MissionState missionState)`

**Purpose:** Handles logic related to `is stealth tutorial ready for activation`.

### IsStealthTutorialReadyForCompletion
`public static bool IsStealthTutorialReadyForCompletion(SneakIntoTheVillaMissionController.MissionState missionState)`

**Purpose:** Handles logic related to `is stealth tutorial ready for completion`.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnAgentRemoved
`public override void OnAgentRemoved(Agent affectedAgent, Agent affectorAgent, AgentState agentState, KillingBlow blow)`

**Purpose:** Called when the `agent removed` event is raised.

### OnAfterTalkingToPrisoner
`public void OnAfterTalkingToPrisoner()`

**Purpose:** Called when the `after talking to prisoner` event is raised.

### OnObjectUsed
`public override void OnObjectUsed(Agent userAgent, UsableMissionObject usedObject)`

**Purpose:** Called when the `object used` event is raised.

### IsTargetAgentDistracted
`public bool IsTargetAgentDistracted()`

**Purpose:** Handles logic related to `is target agent distracted`.

### IsTargetAgentKilled
`public bool IsTargetAgentKilled()`

**Purpose:** Handles logic related to `is target agent killed`.

### IsMainAgentDraggingTargetBody
`public bool IsMainAgentDraggingTargetBody()`

**Purpose:** Handles logic related to `is main agent dragging target body`.

### OnMeleeHit
`public override void OnMeleeHit(Agent attacker, Agent victim, bool isCanceled, AttackCollisionData collisionData)`

**Purpose:** Called when the `melee hit` event is raised.

## Usage Example

```csharp
var controller = Mission.Current.GetMissionBehavior<SneakIntoTheVillaMissionController>();
```

## See Also

- [Complete Class Catalog](../catalog)