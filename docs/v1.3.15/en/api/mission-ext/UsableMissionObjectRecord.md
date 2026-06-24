<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMissionObjectRecord`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.15](../../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMissionObjectRecord

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct UsableMissionObjectRecord : ISynchedMissionObjectReadableRecord`
**Base:** `ISynchedMissionObjectReadableRecord`
**Area:** mission-ext

## Overview

`UsableMissionObjectRecord` lives in `TaleWorlds.MountAndBlade`, and its public surface shows that it acts as a formal extension or data entry point for this subsystem.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType { get; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get; }` |
| `UserAgent` | `public Agent UserAgent { get; }` |
| `PreviousUserAgent` | `public Agent PreviousUserAgent { get; }` |
| `GameEntityWithWorldPosition` | `public GameEntityWithWorldPosition GameEntityWithWorldPosition { get; }` |
| `MovingAgent` | `public virtual Agent MovingAgent { get; }` |
| `DefendingAgents` | `public List<Agent> DefendingAgents { get; }` |
| `HasDefendingAgent` | `public bool HasDefendingAgent { get; }` |
| `DisableCombatActionsOnUse` | `public virtual bool DisableCombatActionsOnUse { get; set; }` |
| `LockUserFrames` | `public virtual bool LockUserFrames { get; set; }` |
| `LockUserPositions` | `public virtual bool LockUserPositions { get; set; }` |
| `IsInstantUse` | `public bool IsInstantUse { get; set; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; set; }` |
| `IsDisabledForPlayers` | `public bool IsDisabledForPlayers { get; set; }` |
| `InteractionEntity` | `public virtual WeakGameEntity InteractionEntity { get; }` |
| `HasAIUser` | `public bool HasAIUser { get; }` |
| `HasUser` | `public bool HasUser { get; }` |
| `HasAIMovingTo` | `public virtual bool HasAIMovingTo { get; set; }` |
| `IsVisible` | `public bool IsVisible { get; set; }` |
| `IsDeactivated` | `public bool IsDeactivated { get; }` |

## Key Methods

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

## Usage Example

```csharp
// First obtain a UsableMissionObjectRecord instance from game state, then call one of its public methods
var value = new UsableMissionObjectRecord();
value.OnUserConversationStart();
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)
