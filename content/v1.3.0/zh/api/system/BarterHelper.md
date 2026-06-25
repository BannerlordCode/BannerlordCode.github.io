---
title: "BarterHelper"
description: "BarterHelper 的自动生成类参考。"
---
# BarterHelper

**Namespace:** Helpers
**Module:** Helpers
**Type:** `public static class BarterHelper`
**Base:** 无
**File:** `TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`

## 概述

`BarterHelper` 是一个帮助类，通常提供不依赖实例状态的静态辅助逻辑。

## 心智模型

把 `BarterHelper` 当作一个 Helper 型扩展点来理解：先确认谁创建它、谁持有它、谁调用它，再决定是继承、组合还是只读使用。

## 主要方法

### GetAutoBalanceBarterablesAdd
`public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesAdd(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero, float fulfillRatio = 1f)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 auto balance barterables add 的结果。

```csharp
// 静态调用，不需要实例
BarterHelper.GetAutoBalanceBarterablesAdd(barterData, factionToBalanceFor, offerer, offererHero, 0);
```

### GetAutoBalanceBarterablesToRemove
`public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesToRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 auto balance barterables to remove 的结果。

```csharp
// 静态调用，不需要实例
BarterHelper.GetAutoBalanceBarterablesToRemove(barterData, factionToBalanceFor, offerer, offererHero);
```

## 使用示例

```csharp
BarterHelper.Initialize();
```

## 参见

- [本区域目录](../)