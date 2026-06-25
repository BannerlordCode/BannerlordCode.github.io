---
title: "UsableMissionObject"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMissionObject`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# UsableMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`
**Base:** `SynchedMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObject.cs`

## Overview

`UsableMissionObject` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `IsDeactivated` | `public bool IsDeactivated { get; }` |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; }` |
| `IsUserAgentExists` | `public bool IsUserAgentExists { get; }` |
| `AgentIndex` | `public int AgentIndex { get; }` |
| `UserAgent` | `public Agent UserAgent { get; }` |
| `PreviousUserAgent` | `public Agent PreviousUserAgent { get; }` |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition GameEntityWithWorldPosition { get; }` |
| `MovingAgent` | `public virtual Agent MovingAgent { get; }` |
| `DefendingAgents` | `public List<Agent> DefendingAgents { get; }` |
| `HasDefendingAgent` | `public bool HasDefendingAgent { get; }` |
| `LockUserFrames` | `public virtual bool LockUserFrames { get; set; }` |
| `LockUserPositions` | `public virtual bool LockUserPositions { get; set; }` |
| `IsInstantUse` | `public bool IsInstantUse { get; set; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; set; }` |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; set; }` |
| `HasAIUser` | `public bool HasAIUser { get; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |

## Key Methods

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**Purpose:** Handles logic related to `read from network`.

### OnUserConversationStart
`public virtual void OnUserConversationStart()`

**Purpose:** Called when the `user conversation start` event is raised.

### OnUserConversationEnd
`public virtual void OnUserConversationEnd()`

**Purpose:** Called when the `user conversation end` event is raised.

### SetAreUserPositionsUpdatedInTheMachineTick
`public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)`

**Purpose:** Sets the value or state of `are user positions updated in the machine tick`.

### GetIsUserPositionsUpdatedInTheMachineTick
`public bool GetIsUserPositionsUpdatedInTheMachineTick()`

**Purpose:** Gets the current value of `is user positions updated in the machine tick`.

### SetIsDeactivatedSynched
`public void SetIsDeactivatedSynched(bool value)`

**Purpose:** Sets the value or state of `is deactivated synched`.

### SetIsDisabledForPlayersSynched
`public void SetIsDisabledForPlayersSynched(bool value)`

**Purpose:** Sets the value or state of `is disabled for players synched`.

### IsDisabledForAgent
`public virtual bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

**Purpose:** Adds `component` to the current collection or state.

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**Purpose:** Removes `component` from the current collection or state.

### RefreshGameEntityWithWorldPosition
`public void RefreshGameEntityWithWorldPosition()`

**Purpose:** Refreshes the display or cache of `game entity with world position`.

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**Purpose:** Called when the `focus gain` event is raised.

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**Purpose:** Called when the `focus lose` event is raised.

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Gets the current value of `info text for being not interactable`.

### SetUserForClient
`public virtual void SetUserForClient(Agent userAgent)`

**Purpose:** Sets the value or state of `user for client`.

### OnUse
`public virtual void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### OnAIMoveToUse
`public virtual void OnAIMoveToUse(Agent userAgent, IDetachment detachment)`

**Purpose:** Called when the `a i move to use` event is raised.

### OnUseStopped
`public virtual void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### OnMoveToStopped
`public virtual void OnMoveToStopped(Agent movingAgent)`

**Purpose:** Called when the `move to stopped` event is raised.

### GetMovingAgentCount
`public virtual int GetMovingAgentCount()`

**Purpose:** Gets the current value of `moving agent count`.

### GetMovingAgentWithIndex
`public virtual Agent GetMovingAgentWithIndex(int index)`

**Purpose:** Gets the current value of `moving agent with index`.

### RemoveMovingAgent
`public virtual void RemoveMovingAgent(Agent movingAgent)`

**Purpose:** Removes `moving agent` from the current collection or state.

### AddMovingAgent
`public virtual void AddMovingAgent(Agent movingAgent)`

**Purpose:** Adds `moving agent` to the current collection or state.

### OnAIDefendBegin
`public void OnAIDefendBegin(Agent agent, IDetachment detachment)`

**Purpose:** Called when the `a i defend begin` event is raised.

### OnAIDefendEnd
`public void OnAIDefendEnd(Agent agent)`

**Purpose:** Called when the `a i defend end` event is raised.

### InitializeDefendingAgents
`public void InitializeDefendingAgents()`

**Purpose:** Initializes the state, resources, or bindings for `defending agents`.

### GetDefendingAgentCount
`public int GetDefendingAgentCount()`

**Purpose:** Gets the current value of `defending agent count`.

### AddDefendingAgent
`public void AddDefendingAgent(Agent agent)`

**Purpose:** Adds `defending agent` to the current collection or state.

### RemoveDefendingAgent
`public void RemoveDefendingAgent(Agent agent)`

**Purpose:** Removes `defending agent` from the current collection or state.

### IsAgentDefending
`public bool IsAgentDefending(Agent agent)`

**Purpose:** Handles logic related to `is agent defending`.

### SimulateTick
`public virtual void SimulateTick(float dt)`

**Purpose:** Handles logic related to `simulate tick`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### GetUserFrameForAgent
`public virtual WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** Gets the current value of `user frame for agent`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### IsAIMovingTo
`public virtual bool IsAIMovingTo(Agent agent)`

**Purpose:** Handles logic related to `is a i moving to`.

### HasUserPositionsChanged
`public virtual bool HasUserPositionsChanged(Agent agent)`

**Purpose:** Checks whether the current object has/contains `user positions changed`.

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Handles logic related to `write to network`.

### IsUsableByAgent
`public virtual bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Handles logic related to `is usable by agent`.

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**Purpose:** Sets the value or state of `custom local frame`.

### OnEndMission
`public override void OnEndMission()`

**Purpose:** Called when the `end mission` event is raised.

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Called when the `after read from network` event is raised.

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

## Usage Example

```csharp
var implementation = new CustomUsableMissionObject();
```

## See Also

- [Complete Class Catalog](../catalog)