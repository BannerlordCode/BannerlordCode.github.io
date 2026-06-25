---
title: "UsableMissionObject"
description: "Auto-generated class reference for UsableMissionObject."
---
# UsableMissionObject

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMissionObject : SynchedMissionObject, IFocusable, IUsable, IVisible`
**Base:** `SynchedMissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/UsableMissionObject.cs`

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

**Purpose:** Reads the data or state of from network.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.ReadFromNetwork(bufferReadValid);
```

### OnUserConversationStart
`public virtual void OnUserConversationStart()`

**Purpose:** Invoked when the user conversation start event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUserConversationStart();
```

### OnUserConversationEnd
`public virtual void OnUserConversationEnd()`

**Purpose:** Invoked when the user conversation end event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUserConversationEnd();
```

### SetAreUserPositionsUpdatedInTheMachineTick
`public void SetAreUserPositionsUpdatedInTheMachineTick(bool value)`

**Purpose:** Assigns a new value to are user positions updated in the machine tick and updates the object's internal state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetAreUserPositionsUpdatedInTheMachineTick(false);
```

### GetIsUserPositionsUpdatedInTheMachineTick
`public bool GetIsUserPositionsUpdatedInTheMachineTick()`

**Purpose:** Reads and returns the is user positions updated in the machine tick value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetIsUserPositionsUpdatedInTheMachineTick();
```

### SetIsDeactivatedSynched
`public void SetIsDeactivatedSynched(bool value)`

**Purpose:** Assigns a new value to is deactivated synched and updates the object's internal state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetIsDeactivatedSynched(false);
```

### SetIsDisabledForPlayersSynched
`public void SetIsDisabledForPlayersSynched(bool value)`

**Purpose:** Assigns a new value to is disabled for players synched and updates the object's internal state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetIsDisabledForPlayersSynched(false);
```

### IsDisabledForAgent
`public virtual bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the disabled for agent state or condition.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsDisabledForAgent(agent);
```

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

**Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.AddComponent(component);
```

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**Purpose:** Removes component from the current collection or state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RemoveComponent(component);
```

### RefreshGameEntityWithWorldPosition
`public void RefreshGameEntityWithWorldPosition()`

**Purpose:** Keeps the display or cache of game entity with world position in sync with the underlying state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RefreshGameEntityWithWorldPosition();
```

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the focus gain event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnFocusGain(userAgent);
```

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**Purpose:** Invoked when the focus lose event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Reads and returns the info text for being not interactable value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetInfoTextForBeingNotInteractable(userAgent);
```

### SetUserForClient
`public virtual void SetUserForClient(Agent userAgent)`

**Purpose:** Assigns a new value to user for client and updates the object's internal state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetUserForClient(userAgent);
```

### OnUse
`public virtual void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the use event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUse(userAgent, 0);
```

### OnAIMoveToUse
`public virtual void OnAIMoveToUse(Agent userAgent, IDetachment detachment)`

**Purpose:** Invoked when the a i move to use event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAIMoveToUse(userAgent, detachment);
```

### OnUseStopped
`public virtual void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the use stopped event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnUseStopped(userAgent, false, 0);
```

### OnMoveToStopped
`public virtual void OnMoveToStopped(Agent movingAgent)`

**Purpose:** Invoked when the move to stopped event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnMoveToStopped(movingAgent);
```

### GetMovingAgentCount
`public virtual int GetMovingAgentCount()`

**Purpose:** Reads and returns the moving agent count value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetMovingAgentCount();
```

### GetMovingAgentWithIndex
`public virtual Agent GetMovingAgentWithIndex(int index)`

**Purpose:** Reads and returns the moving agent with index value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetMovingAgentWithIndex(0);
```

### RemoveMovingAgent
`public virtual void RemoveMovingAgent(Agent movingAgent)`

**Purpose:** Removes moving agent from the current collection or state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RemoveMovingAgent(movingAgent);
```

### AddMovingAgent
`public virtual void AddMovingAgent(Agent movingAgent)`

**Purpose:** Adds moving agent to the current collection or state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.AddMovingAgent(movingAgent);
```

### OnAIDefendBegin
`public void OnAIDefendBegin(Agent agent, IDetachment detachment)`

**Purpose:** Invoked when the a i defend begin event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAIDefendBegin(agent, detachment);
```

### OnAIDefendEnd
`public void OnAIDefendEnd(Agent agent)`

**Purpose:** Invoked when the a i defend end event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAIDefendEnd(agent);
```

### InitializeDefendingAgents
`public void InitializeDefendingAgents()`

**Purpose:** Prepares the resources, state, or bindings required by defending agents.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.InitializeDefendingAgents();
```

### GetDefendingAgentCount
`public int GetDefendingAgentCount()`

**Purpose:** Reads and returns the defending agent count value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetDefendingAgentCount();
```

### AddDefendingAgent
`public void AddDefendingAgent(Agent agent)`

**Purpose:** Adds defending agent to the current collection or state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.AddDefendingAgent(agent);
```

### RemoveDefendingAgent
`public void RemoveDefendingAgent(Agent agent)`

**Purpose:** Removes defending agent from the current collection or state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.RemoveDefendingAgent(agent);
```

### IsAgentDefending
`public bool IsAgentDefending(Agent agent)`

**Purpose:** Determines whether the this instance is in the agent defending state or condition.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsAgentDefending(agent);
```

### SimulateTick
`public virtual void SimulateTick(float dt)`

**Purpose:** Executes the SimulateTick logic.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SimulateTick(0);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetTickRequirement();
```

### GetUserFrameForAgent
`public virtual WorldFrame GetUserFrameForAgent(Agent agent)`

**Purpose:** Reads and returns the user frame for agent value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetUserFrameForAgent(agent);
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.ToString();
```

### IsAIMovingTo
`public virtual bool IsAIMovingTo(Agent agent)`

**Purpose:** Determines whether the this instance is in the a i moving to state or condition.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsAIMovingTo(agent);
```

### HasUserPositionsChanged
`public virtual bool HasUserPositionsChanged(Agent agent)`

**Purpose:** Determines whether the this instance already holds user positions changed.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.HasUserPositionsChanged(agent);
```

### WriteToNetwork
`public override void WriteToNetwork()`

**Purpose:** Writes to network to the target location.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.WriteToNetwork();
```

### IsUsableByAgent
`public virtual bool IsUsableByAgent(Agent userAgent)`

**Purpose:** Determines whether the this instance is in the usable by agent state or condition.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.IsUsableByAgent(userAgent);
```

### SetCustomLocalFrame
`public void SetCustomLocalFrame(in MatrixFrame customLocalFrame)`

**Purpose:** Assigns a new value to custom local frame and updates the object's internal state.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.SetCustomLocalFrame(customLocalFrame);
```

### OnEndMission
`public override void OnEndMission()`

**Purpose:** Invoked when the end mission event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnEndMission();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Invoked when the after read from network event is raised.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
usableMissionObject.OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of UsableMissionObject from the subsystem API first
UsableMissionObject usableMissionObject = ...;
var result = usableMissionObject.GetDescriptionText(gameEntity);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
UsableMissionObject instance = ...;
```

## See Also

- [Area Index](../)