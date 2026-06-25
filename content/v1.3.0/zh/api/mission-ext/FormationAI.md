---
title: "FormationAI"
description: "FormationAI 的自动生成类参考。"
---
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

## 主要方法

### AddAiBehavior
`public void AddAiBehavior(BehaviorComponent behaviorComponent)`

**用途 / Purpose:** 将 「ai behavior」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.AddAiBehavior(behaviorComponent);
```

### AddSpecialBehavior
`public void AddSpecialBehavior(BehaviorComponent behavior, bool purgePreviousSpecialBehaviors = false)`

**用途 / Purpose:** 将 「special behavior」 添加到当前容器或状态中。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.AddSpecialBehavior(behavior, false);
```

### Tick
`public void Tick()`

**用途 / Purpose:** 推进当前对象一帧/一个更新周期的状态。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.Tick();
```

### OnDeploymentFinished
`public void OnDeploymentFinished()`

**用途 / Purpose:** 在 「deployment finished」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.OnDeploymentFinished();
```

### OnAgentRemoved
`public void OnAgentRemoved(Agent agent)`

**用途 / Purpose:** 在 「agent removed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.OnAgentRemoved(agent);
```

### DebugMore
`public void DebugMore()`

**用途 / Purpose:** 处理与 「debug more」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.DebugMore();
```

### DebugScores
`public void DebugScores()`

**用途 / Purpose:** 处理与 「debug scores」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.DebugScores();
```

### ResetBehaviorWeights
`public void ResetBehaviorWeights()`

**用途 / Purpose:** 将 「behavior weights」 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 FormationAI 实例
FormationAI formationAI = ...;
formationAI.ResetBehaviorWeights();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
FormationAI formationAI = ...;
formationAI.AddAiBehavior(behaviorComponent);
```

## 参见

- [本区域目录](../)