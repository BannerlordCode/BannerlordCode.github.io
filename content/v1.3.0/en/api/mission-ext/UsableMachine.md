---
title: "UsableMachine"
description: "Auto-generated class reference for UsableMachine."
---
# UsableMachine

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class UsableMachine : SynchedMissionObject, IFocusable, IOrderable, IDetachment`
**Base:** `SynchedMissionObject`
**File:** `TaleWorlds.MountAndBlade/UsableMachine.cs`

## Overview

`UsableMachine` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `StandingPoints` | `public MBList<StandingPoint> StandingPoints { get; }` |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint { get; }` |
| `DestructionComponent` | `public DestructableComponent DestructionComponent { get; }` |
| `IsDestructible` | `public bool IsDestructible { get; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; }` |
| `PilotAgent` | `public Agent PilotAgent { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `SinkingReferenceOffset` | `public virtual float SinkingReferenceOffset { get; }` |
| `Ai` | `public UsableMachineAIBase Ai { get; }` |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType { get; }` |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint { get; set; }` |
| `HasAIPickingUpAmmo` | `public bool HasAIPickingUpAmmo { get; }` |
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `UserCountNotInStruckAction` | `public int UserCountNotInStruckAction { get; }` |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction { get; }` |
| `MaxUserCount` | `public virtual int MaxUserCount { get; }` |
| `HasWaitFrame` | `public virtual bool HasWaitFrame { get; }` |
| `WaitFrame` | `public MatrixFrame WaitFrame { get; }` |
| `WaitEntity` | `public GameEntity WaitEntity { get; }` |
| `IsDeactivated` | `public virtual bool IsDeactivated { get; }` |

## Key Methods

### AddComponent
`public void AddComponent(UsableMissionObjectComponent component)`

**Purpose:** Adds component to the current collection or state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.AddComponent(component);
```

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**Purpose:** Removes component from the current collection or state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.RemoveComponent(component);
```

### GetOrder
`public virtual OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Reads and returns the order value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetOrder(side);
```

### CreateAIBehaviorObject
`public virtual UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Constructs a new a i behavior object entity and returns it to the caller.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.CreateAIBehaviorObject();
```

### GetValidStandingPointForAgent
`public WeakGameEntity GetValidStandingPointForAgent(Agent agent)`

**Purpose:** Reads and returns the valid standing point for agent value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetValidStandingPointForAgent(agent);
```

### SetAI
`public void SetAI(UsableMachineAIBase ai)`

**Purpose:** Assigns a new value to a i and updates the object's internal state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.SetAI(ai);
```

### GetValidStandingPointForAgentWithoutDistanceCheck
`public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)`

**Purpose:** Reads and returns the valid standing point for agent without distance check value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetValidStandingPointForAgentWithoutDistanceCheck(agent);
```

### GetVacantStandingPointForAI
`public StandingPoint GetVacantStandingPointForAI(Agent agent)`

**Purpose:** Reads and returns the vacant standing point for a i value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetVacantStandingPointForAI(agent);
```

### GetTargetStandingPointOfAIAgent
`public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)`

**Purpose:** Reads and returns the target standing point of a i agent value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetTargetStandingPointOfAIAgent(agent);
```

### OnMissionEnded
`public override void OnMissionEnded()`

**Purpose:** Invoked when the mission ended event is raised.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.OnMissionEnded();
```

### SetVisibleSynched
`public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**Purpose:** Assigns a new value to visible synched and updates the object's internal state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.SetVisibleSynched(false, false);
```

### SetPhysicsStateSynched
`public override void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**Purpose:** Assigns a new value to physics state synched and updates the object's internal state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.SetPhysicsStateSynched(false, false);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the tick requirement value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetTickRequirement();
```

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the focus gain event is raised.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.OnFocusGain(userAgent);
```

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**Purpose:** Invoked when the focus lose event is raised.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.OnFocusLose(userAgent);
```

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Reads and returns the info text for being not interactable value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetInfoTextForBeingNotInteractable(userAgent);
```

### Deactivate
`public void Deactivate()`

**Purpose:** Deactivates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.Deactivate();
```

### Activate
`public void Activate()`

**Purpose:** Activates the resource, state, or feature represented by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.Activate();
```

### IsDisabledForBattleSide
`public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

**Purpose:** Determines whether the this instance is in the disabled for battle side state or condition.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.IsDisabledForBattleSide(sideEnum);
```

### IsDisabledForBattleSideAI
`public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)`

**Purpose:** Determines whether the this instance is in the disabled for battle side a i state or condition.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.IsDisabledForBattleSideAI(sideEnum);
```

### ShouldAutoLeaveDetachmentWhenDisabled
`public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**Purpose:** Executes the ShouldAutoLeaveDetachmentWhenDisabled logic.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.ShouldAutoLeaveDetachmentWhenDisabled(sideEnum);
```

### AutoAttachUserToFormation
`public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**Purpose:** Executes the AutoAttachUserToFormation logic.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.AutoAttachUserToFormation(sideEnum);
```

### HasToBeDefendedByUser
`public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**Purpose:** Determines whether the this instance already holds to be defended by user.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.HasToBeDefendedByUser(sideEnum);
```

### Disable
`public virtual void Disable()`

**Purpose:** Executes the Disable logic.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.Disable();
```

### ToString
`public override string ToString()`

**Purpose:** Returns a human-readable string representation of the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.ToString();
```

### GetActionTextForStandingPoint
`public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Reads and returns the action text for standing point value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetActionTextForStandingPoint(usableGameObject);
```

### GetBestPointAlternativeTo
`public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**Purpose:** Reads and returns the best point alternative to value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetBestPointAlternativeTo(standingPoint, agent);
```

### IsInRangeToCheckAlternativePoints
`public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)`

**Purpose:** Determines whether the this instance is in the in range to check alternative points state or condition.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.IsInRangeToCheckAlternativePoints(agent);
```

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**Purpose:** Adds agent at slot index to the current collection or state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.AddAgentAtSlotIndex(agent, 0);
```

### SetIsDisabledForAI
`public void SetIsDisabledForAI(bool isDisabledForAI)`

**Purpose:** Assigns a new value to is disabled for a i and updates the object's internal state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.SetIsDisabledForAI(false);
```

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**Purpose:** Reads and returns the number of usable slots value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetNumberOfUsableSlots();
```

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**Purpose:** Determines whether the this instance is in the standing point available for agent state or condition.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.IsStandingPointAvailableForAgent(agent);
```

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**Purpose:** Determines whether the this instance is in the used by formation state or condition.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.IsUsedByFormation(formation);
```

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the description text value held by the this instance.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
var result = usableMachine.GetDescriptionText(gameEntity);
```

### SetEnemyRangeToStopUsing
`public void SetEnemyRangeToStopUsing(float value)`

**Purpose:** Assigns a new value to enemy range to stop using and updates the object's internal state.

```csharp
// Obtain an instance of UsableMachine from the subsystem API first
UsableMachine usableMachine = ...;
usableMachine.SetEnemyRangeToStopUsing(0);
```

## Usage Example

```csharp
// Typically obtained from a subsystem API or factory
UsableMachine instance = ...;
```

## See Also

- [Area Index](../)