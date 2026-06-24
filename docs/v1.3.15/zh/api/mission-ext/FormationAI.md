<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `FormationAI`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# FormationAI

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class FormationAI`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/FormationAI.cs`

## 概述

`FormationAI` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ActiveBehavior` | `public BehaviorComponent ActiveBehavior { get; }` |
| `Side` | `public FormationAI.BehaviorSide Side { get; set; }` |
| `IsMainFormation` | `public bool IsMainFormation { get; set; }` |
| `BehaviorCount` | `public int BehaviorCount { get; }` |

## 主要方法

### AddAiBehavior
`public void AddAiBehavior(BehaviorComponent behaviorComponent)`

**用途 / Purpose:** 向当前集合/状态中添加 `ai behavior`。

### AddSpecialBehavior
`public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)`

**用途 / Purpose:** 向当前集合/状态中添加 `special behavior`。

### Tick
`public void Tick()`

**用途 / Purpose:** 处理 `tick` 相关逻辑。

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 当 `deployment finished` 事件触发时调用此方法。

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 当 `agent removed` 事件触发时调用此方法。

### GetBehaviorAtIndex
`public BehaviorComponent GetBehaviorAtIndex(int index)`

**用途 / Purpose:** 获取 `behavior at index` 的当前值。

### DebugMore
`public void DebugMore()`

**用途 / Purpose:** 处理 `debug more` 相关逻辑。

### DebugScores
`public void DebugScores()`

**用途 / Purpose:** 处理 `debug scores` 相关逻辑。

### ResetBehaviorWeights
`public void ResetBehaviorWeights()`

**用途 / Purpose:** 将 `behavior weights` 重置为初始状态。

## 使用示例

```csharp
var value = new FormationAI();
value.AddAiBehavior(behaviorComponent);
```

## 参见

- [完整类目录](../catalog)