<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `HumanAIComponent`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class HumanAIComponent : AgentComponent
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## Overview

`HumanAIComponent` is the AI driver attached to human (NPC) agents. It owns behavior parameters, scripted movement frames (`HasTimedScriptedFrame`), and defending/useable-object interest state. Mods use it to override AI behavior params or place an agent at a scripted frame (e.g. a guard post).

## Key Properties

| Name | Signature |
|------|-----------|
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get { return this._shouldCatchUpWithFormation; }` |
| `IsDefending` | `public bool IsDefending { get { return this._objectInterestKind == HumanAIComponent.UsableObjectInterestKind.Defending; }` |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame { get { return this._scriptedFrameTimer > 0f; }` |

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

### OnRetreating
```csharp
public override void OnRetreating()
```

### OnDismount
```csharp
public override void OnDismount(Agent mount)
```

### SetBehaviorValueSet
```csharp
public void SetBehaviorValueSet(HumanAIComponent.BehaviorValueSet behaviorValueSet)
```

### RefreshBehaviorValues
```csharp
public void RefreshBehaviorValues(MovementOrder.MovementOrderEnum movementOrder, ArrangementOrder.ArrangementOrderEnum arrangementOrder)
```

### ForceDisablePickUpForAgent
```csharp
public void ForceDisablePickUpForAgent()
```

### SetScriptedPositionAndDirectionTimed
```csharp
public void SetScriptedPositionAndDirectionTimed(Vec2 position, float directionAsRotationInRadians, float duration)
```

### DisableTimedScriptedMovement
```csharp
public void DisableTimedScriptedMovement()
```

### GetValueAt
```csharp
public float GetValueAt(float x)
```

## Usage Example

```csharp
// Park a guard NPC at a scripted frame (facing a door) for a timed duration
HumanAIComponent ai = agent.HumanAIComponent;
if (ai != null)
{
    ai.OverrideBehaviorParams(/* your params */);
    ai.SetScriptedFrame(ref targetFrame, /* duration */ 60f, /* turn to target */ true);
}
```

## See Also

- [Complete Class Catalog](../catalog)