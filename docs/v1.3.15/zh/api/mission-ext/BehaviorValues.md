<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BehaviorValues`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorValues

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 结构体 struct struct
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`BehaviorValues` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个结构体 struct。
> 如需了解其属性、方法和开发者用例，请参考源码或
## 主要属性

| Name | Signature |
|------|-----------|
| `FollowedAgent` | `public Agent FollowedAgent { get; }` |
| `ShouldCatchUpWithFormation` | `public bool ShouldCatchUpWithFormation { get; }` |
| `IsDefending` | `public bool IsDefending { get; }` |
| `HasTimedScriptedFrame` | `public bool HasTimedScriptedFrame { get; }` |


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

贡献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)