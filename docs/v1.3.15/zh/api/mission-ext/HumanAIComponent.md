<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `HumanAIComponent`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# HumanAIComponent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** public class HumanAIComponent : AgentComponent
**Base:** `AgentComponent`
**File:** `TaleWorlds.MountAndBlade/HumanAIComponent.cs`

## 概述

`HumanAIComponent` 是挂在人类（NPC）agent 上的 AI 驱动组件。它拥有行为参数、脚本化移动帧（`HasTimedScriptedFrame`）、防御/可用物体兴趣状态。mod 用它覆盖 AI 行为参数，或把 agent 放到脚本化帧（如哨位）。

## 主要属性

| Name | Signature |
|------|-----------|
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get { return this._shouldCatchUpWithFormation; }` |
| `IsDefending` | `public bool IsDefending { get { return this._objectInterestKind == HumanAIComponent.UsableObjectInterestKind.Defending; }` |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame { get { return this._scriptedFrameTimer > 0f; }` |

## 主要方法

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

## 使用示例

```csharp
// 让一个哨兵 NPC 在限时内停在一个脚本化帧（面向门）
HumanAIComponent ai = agent.HumanAIComponent;
if (ai != null)
{
    ai.OverrideBehaviorParams(/* 你的参数 */);
    ai.SetScriptedFrame(ref targetFrame, /* duration */ 60f, /* turn to target */ true);
}
```

## 参见

- [完整类目录](../catalog)