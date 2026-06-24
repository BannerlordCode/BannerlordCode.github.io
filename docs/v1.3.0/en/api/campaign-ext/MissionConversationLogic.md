<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `MissionConversationLogic`
- [← Area / Back to campaign-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# MissionConversationLogic

**Namespace:** SandBox.Conversation.MissionLogics
**Module:** SandBox.Conversation
**Type:** `public class MissionConversationLogic : MissionLogic`
**Base:** `MissionLogic`
**File:** `SandBox/Conversation/MissionLogics/MissionConversationLogic.cs`

## Overview

`MissionConversationLogic` sits closer to the behavior layer: it reacts to events, drives flows, and updates subsystem state every tick or at key transitions.

## Mental Model

Treat `MissionConversationLogic` as a Logic-style extension point: first identify who creates it, who owns it, and who calls it, then decide whether you should subclass it, compose it, or only read from it.

## Key Properties

| Name | Signature |
|------|-----------|
| `Current` | `public static MissionConversationLogic Current { get; }` |
| `State` | `public MissionState State { get; }` |
| `ConversationManager` | `public ConversationManager ConversationManager { get; }` |
| `IsReadyForConversation` | `public bool IsReadyForConversation { get; }` |
| `ConversationAgent` | `public Agent ConversationAgent { get; }` |

## Key Methods

### OnBehaviorInitialize
`public override void OnBehaviorInitialize()`

**Purpose:** Called when the `behavior initialize` event is raised.

### OnRemoveBehavior
`public override void OnRemoveBehavior()`

**Purpose:** Called when the `remove behavior` event is raised.

### OnAgentBuild
`public override void OnAgentBuild(Agent agent, Banner banner)`

**Purpose:** Called when the `agent build` event is raised.

### SetSpawnArea
`public void SetSpawnArea(Alley alley)`

**Purpose:** Sets the value or state of `spawn area`.

### SetSpawnArea
`public void SetSpawnArea(Workshop workshop)`

**Purpose:** Sets the value or state of `spawn area`.

### SetSpawnArea
`public void SetSpawnArea(string customTag)`

**Purpose:** Sets the value or state of `spawn area`.

### OnMissionTick
`public override void OnMissionTick(float dt)`

**Purpose:** Called when the `mission tick` event is raised.

### EarlyStart
`public override void EarlyStart()`

**Purpose:** Handles logic related to `early start`.

### OnAgentInteraction
`public override void OnAgentInteraction(Agent userAgent, Agent agent, sbyte agentBoneIndex)`

**Purpose:** Called when the `agent interaction` event is raised.

### StartConversation
`public void StartConversation(Agent agent, bool setActionsInstantly, bool isInitialization = false)`

**Purpose:** Handles logic related to `start conversation`.

### IsThereAgentAction
`public override bool IsThereAgentAction(Agent userAgent, Agent otherAgent)`

**Purpose:** Handles logic related to `is there agent action`.

### OnRenderingStarted
`public override void OnRenderingStarted()`

**Purpose:** Called when the `rendering started` event is raised.

### DisableStartConversation
`public void DisableStartConversation(bool isDisabled)`

**Purpose:** Handles logic related to `disable start conversation`.

## Usage Example

```csharp
Mission.Current.AddMissionBehavior(new MissionConversationLogic());
```

## See Also

- [Complete Class Catalog](../catalog)