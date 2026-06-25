---
title: "BehaviorData"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `BehaviorData`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# BehaviorData

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class BehaviorData`
**领域:** mission-ext

## 概述

`BehaviorData` 更像一个数据载体：它封装一组字段，让系统之间以结构化方式交换状态。

## 心智模型

把 `BehaviorData` 当作一个 Data 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

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
var value = new BehaviorData();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
