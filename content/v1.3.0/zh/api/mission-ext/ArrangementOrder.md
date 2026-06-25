---
title: "ArrangementOrder"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ArrangementOrder`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.0](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# ArrangementOrder

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public struct ArrangementOrder`
**Base:** 无
**File:** `TaleWorlds.MountAndBlade/ArrangementOrder.cs`

## 概述

`ArrangementOrder` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `OrderType` | `public OrderType OrderType { get; }` |

## 主要方法

### GetUnitSpacingOf
`public static int GetUnitSpacingOf(ArrangementOrder.ArrangementOrderEnum a)`

**用途 / Purpose:** 获取 `unit spacing of` 的当前值。

### GetUnitLooseness
`public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a)`

**用途 / Purpose:** 获取 `unit looseness` 的当前值。

### GetMovementSpeedRestriction
`public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)`

**用途 / Purpose:** 获取 `movement speed restriction` 的当前值。

### GetArrangement
`public IFormationArrangement GetArrangement(Formation formation)`

**用途 / Purpose:** 获取 `arrangement` 的当前值。

### OnApply
`public unsafe void OnApply(Formation formation)`

**用途 / Purpose:** 当 `apply` 事件触发时调用此方法。

### SoftUpdate
`public void SoftUpdate(Formation formation)`

**用途 / Purpose:** 处理 `soft update` 相关逻辑。

### GetShieldDirectionOfUnit
`public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrder.ArrangementOrderEnum orderEnum)`

**用途 / Purpose:** 获取 `shield direction of unit` 的当前值。

### GetUnitSpacing
`public int GetUnitSpacing()`

**用途 / Purpose:** 获取 `unit spacing` 的当前值。

### Rearrange
`public void Rearrange(Formation formation)`

**用途 / Purpose:** 处理 `rearrange` 相关逻辑。

### RearrangeAux
`public void RearrangeAux(Formation formation, bool isDirectly)`

**用途 / Purpose:** 处理 `rearrange aux` 相关逻辑。

### TransposeLineFormation
`public unsafe static void TransposeLineFormation(Formation formation)`

**用途 / Purpose:** 处理 `transpose line formation` 相关逻辑。

### OnCancel
`public void OnCancel(Formation formation)`

**用途 / Purpose:** 当 `cancel` 事件触发时调用此方法。

### TickOccasionally
`public void TickOccasionally(Formation formation)`

**用途 / Purpose:** 处理 `tick occasionally` 相关逻辑。

### GetNativeEnum
`public ArrangementOrder.ArrangementOrderEnum GetNativeEnum()`

**用途 / Purpose:** 获取 `native enum` 的当前值。

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 处理 `equals` 相关逻辑。

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 获取 `hash code` 的当前值。

### OnOrderPositionChanged
`public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)`

**用途 / Purpose:** 当 `order position changed` 事件触发时调用此方法。

### GetArrangementOrderDefensiveness
`public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum)`

**用途 / Purpose:** 获取 `arrangement order defensiveness` 的当前值。

### GetArrangementOrderDefensivenessChange
`public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum, ArrangementOrder.ArrangementOrderEnum nextOrderEnum)`

**用途 / Purpose:** 获取 `arrangement order defensiveness change` 的当前值。

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)`

**用途 / Purpose:** 处理 `calculate formation direction enforcing factor for rank` 相关逻辑。

## 使用示例

```csharp
ArrangementOrder.GetUnitSpacingOf(a);
```

## 参见

- [完整类目录](../catalog)