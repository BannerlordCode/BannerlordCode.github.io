<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `UsableMachine`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# UsableMachine

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `UsableMachine` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `StandingPoints` | `public MBList<StandingPoint> StandingPoints { get; }` |
| `PilotStandingPoint` | `public StandingPoint PilotStandingPoint { get; }` |
| `PilotStandingPointSlotIndex` | `public int PilotStandingPointSlotIndex { get; }` |
| `DestructionComponent` | `public DestructableComponent DestructionComponent { get; }` |
| `IsDestructible` | `public bool IsDestructible { get; }` |
| `IsDestroyed` | `public bool IsDestroyed { get; }` |
| `PilotAgent` | `public Agent PilotAgent { get; }` |
| `IsLoose` | `public bool IsLoose { get; }` |
| `SinkingReferenceOffset` | `public virtual float SinkingReferenceOffset { get; }` |
| `Ai` | `public UsableMachineAIBase Ai { get; }` |
| `FocusableObjectType` | `public virtual FocusableObjectType FocusableObjectType { get; }` |
| `IsFocusable` | `public virtual bool IsFocusable { get; set; }` |
| `CurrentlyUsedAmmoPickUpPoint` | `public StandingPoint CurrentlyUsedAmmoPickUpPoint { get; set; }` |
| `HasAIPickingUpAmmo` | `public bool HasAIPickingUpAmmo { get; set; }` |
| `IsDisabledForAI` | `public bool IsDisabledForAI { get; set; }` |
| `UserFormations` | `public MBReadOnlyList<Formation> UserFormations { get; }` |
| `UserCountNotInStruckAction` | `public int UserCountNotInStruckAction { get; }` |
| `UserCountIncludingInStruckAction` | `public int UserCountIncludingInStruckAction { get; }` |
| `MaxUserCount` | `public virtual int MaxUserCount { get; }` |
| `HasWaitFrame` | `public virtual bool HasWaitFrame { get; }` |


## Key Methods

### AddComponent

```csharp
public void AddComponent(UsableMissionObjectComponent component)
```

### RemoveComponent

```csharp
public void RemoveComponent(UsableMissionObjectComponent component)
```

### GetOrder

```csharp
public virtual OrderType GetOrder(BattleSideEnum side)
```

### CreateAIBehaviorObject

```csharp
public virtual UsableMachineAIBase CreateAIBehaviorObject()
```

### GetValidStandingPointForAgent

```csharp
public WeakGameEntity GetValidStandingPointForAgent(Agent agent)
```

### SetAI

```csharp
public void SetAI(UsableMachineAIBase ai)
```

### GetValidStandingPointForAgentWithoutDistanceCheck

```csharp
public WeakGameEntity GetValidStandingPointForAgentWithoutDistanceCheck(Agent agent)
```

### GetVacantStandingPointForAI

```csharp
public StandingPoint GetVacantStandingPointForAI(Agent agent)
```

### GetTargetStandingPointOfAIAgent

```csharp
public StandingPoint GetTargetStandingPointOfAIAgent(Agent agent)
```

### OnMissionEnded

```csharp
public override void OnMissionEnded()
```

### SetVisibleSynched

```csharp
public override void SetVisibleSynched(bool value, bool forceChildrenVisible = false)
```

### SetPhysicsStateSynched

```csharp
public override void SetPhysicsStateSynched(bool value, bool setChildren = true)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### OnFocusGain

```csharp
public virtual void OnFocusGain(Agent userAgent)
```

### OnFocusLose

```csharp
public virtual void OnFocusLose(Agent userAgent)
```

### OnPilotAssignedDuringSpawn

```csharp
public virtual void OnPilotAssignedDuringSpawn()
```

### GetInfoTextForBeingNotInteractable

```csharp
public virtual TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)
```

### Deactivate

```csharp
public void Deactivate()
```

### Activate

```csharp
public void Activate()
```

### IsDisabledForBattleSide

```csharp
public virtual bool IsDisabledForBattleSide(BattleSideEnum sideEnum)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)