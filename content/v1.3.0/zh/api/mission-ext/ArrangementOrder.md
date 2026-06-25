---
title: "ArrangementOrder"
description: "ArrangementOrder 的自动生成类参考。"
---
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

**用途 / Purpose:** 读取并返回当前对象中 「unit spacing of」 的结果。

```csharp
// 静态调用，不需要实例
ArrangementOrder.GetUnitSpacingOf(a);
```

### GetUnitLooseness
`public static bool GetUnitLooseness(ArrangementOrder.ArrangementOrderEnum a)`

**用途 / Purpose:** 读取并返回当前对象中 「unit looseness」 的结果。

```csharp
// 静态调用，不需要实例
ArrangementOrder.GetUnitLooseness(a);
```

### GetMovementSpeedRestriction
`public void GetMovementSpeedRestriction(out float? runRestriction, out float? walkRestriction)`

**用途 / Purpose:** 读取并返回当前对象中 「movement speed restriction」 的结果。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.GetMovementSpeedRestriction(runRestriction, walkRestriction);
```

### GetArrangement
`public IFormationArrangement GetArrangement(Formation formation)`

**用途 / Purpose:** 读取并返回当前对象中 「arrangement」 的结果。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetArrangement(formation);
```

### OnApply
`public unsafe void OnApply(Formation formation)`

**用途 / Purpose:** 在 「apply」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.OnApply(formation);
```

### SoftUpdate
`public void SoftUpdate(Formation formation)`

**用途 / Purpose:** 处理与 「soft update」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.SoftUpdate(formation);
```

### GetShieldDirectionOfUnit
`public static Agent.UsageDirection GetShieldDirectionOfUnit(Formation formation, Agent unit, ArrangementOrder.ArrangementOrderEnum orderEnum)`

**用途 / Purpose:** 读取并返回当前对象中 「shield direction of unit」 的结果。

```csharp
// 静态调用，不需要实例
ArrangementOrder.GetShieldDirectionOfUnit(formation, unit, orderEnum);
```

### GetUnitSpacing
`public int GetUnitSpacing()`

**用途 / Purpose:** 读取并返回当前对象中 「unit spacing」 的结果。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetUnitSpacing();
```

### Rearrange
`public void Rearrange(Formation formation)`

**用途 / Purpose:** 处理与 「rearrange」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.Rearrange(formation);
```

### RearrangeAux
`public void RearrangeAux(Formation formation, bool isDirectly)`

**用途 / Purpose:** 处理与 「rearrange aux」 相关的逻辑。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.RearrangeAux(formation, false);
```

### TransposeLineFormation
`public unsafe static void TransposeLineFormation(Formation formation)`

**用途 / Purpose:** 处理与 「transpose line formation」 相关的逻辑。

```csharp
// 静态调用，不需要实例
ArrangementOrder.TransposeLineFormation(formation);
```

### OnCancel
`public void OnCancel(Formation formation)`

**用途 / Purpose:** 在 「cancel」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.OnCancel(formation);
```

### TickOccasionally
`public void TickOccasionally(Formation formation)`

**用途 / Purpose:** 在每一帧或每个更新周期内推进「occasionally」的状态。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.TickOccasionally(formation);
```

### GetNativeEnum
`public ArrangementOrder.ArrangementOrderEnum GetNativeEnum()`

**用途 / Purpose:** 读取并返回当前对象中 「native enum」 的结果。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetNativeEnum();
```

### Equals
`public override bool Equals(object obj)`

**用途 / Purpose:** 比较当前对象与传入实例是否相等。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.Equals(obj);
```

### GetHashCode
`public override int GetHashCode()`

**用途 / Purpose:** 返回当前对象的哈希码，用于字典或哈希集合中的快速查找。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.GetHashCode();
```

### OnOrderPositionChanged
`public void OnOrderPositionChanged(Formation formation, Vec2 previousOrderPosition)`

**用途 / Purpose:** 在 「order position changed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
arrangementOrder.OnOrderPositionChanged(formation, previousOrderPosition);
```

### GetArrangementOrderDefensiveness
`public static int GetArrangementOrderDefensiveness(ArrangementOrder.ArrangementOrderEnum orderEnum)`

**用途 / Purpose:** 读取并返回当前对象中 「arrangement order defensiveness」 的结果。

```csharp
// 静态调用，不需要实例
ArrangementOrder.GetArrangementOrderDefensiveness(orderEnum);
```

### GetArrangementOrderDefensivenessChange
`public static int GetArrangementOrderDefensivenessChange(ArrangementOrder.ArrangementOrderEnum previousOrderEnum, ArrangementOrder.ArrangementOrderEnum nextOrderEnum)`

**用途 / Purpose:** 读取并返回当前对象中 「arrangement order defensiveness change」 的结果。

```csharp
// 静态调用，不需要实例
ArrangementOrder.GetArrangementOrderDefensivenessChange(previousOrderEnum, nextOrderEnum);
```

### CalculateFormationDirectionEnforcingFactorForRank
`public float CalculateFormationDirectionEnforcingFactorForRank(int formationRankIndex, int rankCount)`

**用途 / Purpose:** 计算「formation direction enforcing factor for rank」的当前值或结果。

```csharp
// 先通过子系统 API 拿到 ArrangementOrder 实例
ArrangementOrder arrangementOrder = ...;
var result = arrangementOrder.CalculateFormationDirectionEnforcingFactorForRank(0, 0);
```

## 使用示例

```csharp
ArrangementOrder.GetUnitSpacingOf(a);
```

## 参见

- [本区域目录](../)