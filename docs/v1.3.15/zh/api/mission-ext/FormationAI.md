<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationAI`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationAI

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`FormationAI` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveBehavior` | `public BehaviorComponent ActiveBehavior { get; }` |
| `Side` | `public FormationAI.BehaviorSide Side { get; set; }` |
| `IsMainFormation` | `public bool IsMainFormation { get; set; }` |
| `BehaviorCount` | `public int BehaviorCount { get; }` |


## 主要方法

### AddAiBehavior

```csharp
public void AddAiBehavior(BehaviorComponent behaviorComponent)
```

### AddSpecialBehavior

```csharp
public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)
```

### Tick

```csharp
public void Tick()
```

### OnDeploymentFinished

```csharp
public void OnDeploymentFinished()
```

### OnAgentRemoved

```csharp
public void OnAgentRemoved(Agent agent)
```

### GetBehaviorAtIndex

```csharp
public BehaviorComponent GetBehaviorAtIndex(int index)
```

### DebugMore

```csharp
public void DebugMore()
```

### DebugScores

```csharp
public void DebugScores()
```

### ResetBehaviorWeights

```csharp
public void ResetBehaviorWeights()
```

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)