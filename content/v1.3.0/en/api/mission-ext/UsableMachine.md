---
title: "UsableMachine"
---
<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMachine`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.3.0](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
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

**Purpose:** Adds `component` to the current collection or state.

### RemoveComponent
`public void RemoveComponent(UsableMissionObjectComponent component)`

**Purpose:** Removes `component` from the current collection or state.

### GetOrder
`public virtual OrderType GetOrder(BattleSideEnum side)`

**Purpose:** Gets the current value of `order`.

### CreateAIBehaviorObject
`public virtual UsableMachineAIBase CreateAIBehaviorObject()`

**Purpose:** Creates a new `a i behavior object` instance or object.

### GetValidStandingPointForAgent
`public WeakGameEntity GetValidStandingPointForAgent(Agent agent)`

**Purpose:** Gets the current value of `valid standing point for agent`.

### SetAI
`public void SetAI(UsableMachineAIBase ai)`

**Purpose:** Sets the value or state of `a i`.

### GetValidStandingPointForAgentWithoutDistanceCheck
`public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)`

**Purpose:** Gets the current value of `valid standing point for agent without distance check`.

### GetVacantStandingPointForAI
`public StandingPoint GetVacantStandingPointForAI(Agent agent)`

**Purpose:** Gets the current value of `vacant standing point for a i`.

### GetTargetStandingPointOfAIAgent
`public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)`

**Purpose:** Gets the current value of `target standing point of a i agent`.

### OnMissionEnded
`public override void OnMissionEnded()`

**Purpose:** Called when the `mission ended` event is raised.

### SetVisibleSynched
`public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)`

**Purpose:** Sets the value or state of `visible synched`.

### SetPhysicsStateSynched
`public override void SetPhysicsStateSynched(bool value, bool setChildren = true)`

**Purpose:** Sets the value or state of `physics state synched`.

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### OnFocusGain
`public virtual void OnFocusGain(Agent userAgent)`

**Purpose:** Called when the `focus gain` event is raised.

### OnFocusLose
`public virtual void OnFocusLose(Agent userAgent)`

**Purpose:** Called when the `focus lose` event is raised.

### GetInfoTextForBeingNotInteractable
`public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Gets the current value of `info text for being not interactable`.

### Deactivate
`public void Deactivate()`

**Purpose:** Handles logic related to `deactivate`.

### Activate
`public void Activate()`

**Purpose:** Handles logic related to `activate`.

### IsDisabledForBattleSide
`public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)`

**Purpose:** Handles logic related to `is disabled for battle side`.

### IsDisabledForBattleSideAI
`public virtual bool IsDisabledForBattleSideAI(BattleSideEnum sideEnum)`

**Purpose:** Handles logic related to `is disabled for battle side a i`.

### ShouldAutoLeaveDetachmentWhenDisabled
`public virtual bool ShouldAutoLeaveDetachmentWhenDisabled(BattleSideEnum sideEnum)`

**Purpose:** Handles logic related to `should auto leave detachment when disabled`.

### AutoAttachUserToFormation
`public virtual bool AutoAttachUserToFormation(BattleSideEnum sideEnum)`

**Purpose:** Handles logic related to `auto attach user to formation`.

### HasToBeDefendedByUser
`public virtual bool HasToBeDefendedByUser(BattleSideEnum sideEnum)`

**Purpose:** Checks whether the current object has/contains `to be defended by user`.

### Disable
`public virtual void Disable()`

**Purpose:** Handles logic related to `disable`.

### ToString
`public override string ToString()`

**Purpose:** Handles logic related to `to string`.

### GetActionTextForStandingPoint
`public abstract TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**Purpose:** Gets the current value of `action text for standing point`.

### GetBestPointAlternativeTo
`public virtual StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**Purpose:** Gets the current value of `best point alternative to`.

### IsInRangeToCheckAlternativePoints
`public virtual bool IsInRangeToCheckAlternativePoints(Agent agent)`

**Purpose:** Handles logic related to `is in range to check alternative points`.

### AddAgentAtSlotIndex
`public void AddAgentAtSlotIndex(Agent agent, int slotIndex)`

**Purpose:** Adds `agent at slot index` to the current collection or state.

### SetIsDisabledForAI
`public void SetIsDisabledForAI(bool isDisabledForAI)`

**Purpose:** Sets the value or state of `is disabled for a i`.

### GetNumberOfUsableSlots
`public int GetNumberOfUsableSlots()`

**Purpose:** Gets the current value of `number of usable slots`.

### IsStandingPointAvailableForAgent
`public bool IsStandingPointAvailableForAgent(Agent agent)`

**Purpose:** Handles logic related to `is standing point available for agent`.

### IsUsedByFormation
`public bool IsUsedByFormation(Formation formation)`

**Purpose:** Handles logic related to `is used by formation`.

### GetDescriptionText
`public abstract TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### SetEnemyRangeToStopUsing
`public void SetEnemyRangeToStopUsing(float value)`

**Purpose:** Sets the value or state of `enemy range to stop using`.

## Usage Example

```csharp
var implementation = new CustomUsableMachine();
```

## See Also

- [Complete Class Catalog](../catalog)