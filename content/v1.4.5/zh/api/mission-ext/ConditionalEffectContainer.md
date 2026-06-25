---
title: "ConditionalEffectContainer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ConditionalEffectContainer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ConditionalEffectContainer

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ConditionalEffectContainer : List<MPConditionalEffect>`
**Base:** `List<MPConditionalEffect>`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/MPConditionalEffect.cs`

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

**用途 / Purpose:** 获取 `state` 的当前值。

### SetState
`public void SetState(MPConditionalEffect conditionalEffect, Agent agent, bool state)`

**用途 / Purpose:** 设置 `state` 的值或状态。

### ResetStates
`public void ResetStates()`

**用途 / Purpose:** 将 `states` 重置为初始状态。

## 使用示例

```csharp
var value = new ConditionalEffectContainer();
value.GetState(conditionalEffect, agent);
```

## 参见

- [完整类目录](../catalog)