<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `BehaviorValues`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorValues

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** struct
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `BehaviorValues` is a struct in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


## Key Properties

| Name | Signature |
|------|-----------|
| `FollowedAgent` | `public Agent FollowedAgent { get; }` |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get; }` |
| `IsDefending` | `public bool IsDefending { get; }` |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame { get; }` |


## Key Methods

### OverrideBehaviorParams

```csharp
public void OverrideBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)
```

### SyncBehaviorParamsIfNecessary

```csharp
public void SyncBehaviorParamsIfNecessary()
```

### DisablePickUpForAgentIfNeeded

```csharp
public void DisablePickUpForAgentIfNeeded()
```

### OnTickParallel

```csharp
public override void OnTickParallel(float dt)
```

### OnTick

```csharp
public override void OnTick(float dt)
```

### OnAgentRemoved

```csharp
public override void OnAgentRemoved()
```

### OnComponentRemoved

```csharp
public override void OnComponentRemoved()
```

### IsInImportantCombatAction

```csharp
public bool IsInImportantCombatAction()
```

### GetCurrentlyMovingGameObject

```csharp
public UsableMissionObject GetCurrentlyMovingGameObject()
```

### GetCurrentlyDefendingGameObject

```csharp
public UsableMissionObject GetCurrentlyDefendingGameObject()
```

### MoveToUsableGameObject

```csharp
public void MoveToUsableGameObject(UsableMissionObject usedObject, IDetachment detachment, Agent.AIScriptedFrameFlags scriptedFrameFlags = Agent.AIScriptedFrameFlags.NoAttack)
```

### MoveToClear

```csharp
public void MoveToClear()
```

### StartDefendingGameObject

```csharp
public void StartDefendingGameObject(UsableMissionObject usedObject, IDetachment detachment)
```

### StopDefendingGameObject

```csharp
public void StopDefendingGameObject()
```

### IsInterestedInAnyGameObject

```csharp
public bool IsInterestedInAnyGameObject()
```

### IsInterestedInGameObject

```csharp
public bool IsInterestedInGameObject(UsableMissionObject usableMissionObject)
```

### FollowAgent

```csharp
public void FollowAgent(Agent agent)
```

### GetDesiredSpeedInFormation

```csharp
public float GetDesiredSpeedInFormation(bool isCharging)
```

### AdjustSpeedLimit

```csharp
public void AdjustSpeedLimit(Agent agent, float desiredSpeed, bool limitIsMultiplier)
```

### ParallelUpdateFormationMovement

```csharp
public unsafe void ParallelUpdateFormationMovement()
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)