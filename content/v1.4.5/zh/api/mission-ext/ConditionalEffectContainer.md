---
title: "ConditionalEffectContainer"
description: "ConditionalEffectContainer 的自动生成类参考。"
---
# ConditionalEffectContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConditionalEffectContainer : List<MPConditionalEffect>`
**Base:** `List<MPConditionalEffect>`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPConditionalEffect.cs`

## 概述

`ConditionalEffectContainer` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsSatisfied` | `public bool IsSatisfied { get; set; }` |

## 主要方法

### GetState
`public bool GetState(MPConditionalEffect conditionalEffect, Agent agent)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 state 的结果。

```csharp
// 先通过子系统 API 拿到 ConditionalEffectContainer 实例
ConditionalEffectContainer conditionalEffectContainer = ...;
var result = conditionalEffectContainer.GetState(conditionalEffect, agent);
```

### SetState
`public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)`

**用途 / Purpose:** **用途 / Purpose:** 为 state 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ConditionalEffectContainer 实例
ConditionalEffectContainer conditionalEffectContainer = ...;
conditionalEffectContainer.SetState(conditionalEffect, agent, false);
```

### ResetStates
`public void ResetStates()`

**用途 / Purpose:** **用途 / Purpose:** 将 states 重置回默认或初始状态。

```csharp
// 先通过子系统 API 拿到 ConditionalEffectContainer 实例
ConditionalEffectContainer conditionalEffectContainer = ...;
conditionalEffectContainer.ResetStates();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ConditionalEffectContainer conditionalEffectContainer = ...;
conditionalEffectContainer.GetState(conditionalEffect, agent);
```

## 参见

- [本区域目录](../)