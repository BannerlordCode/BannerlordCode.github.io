---
title: "BarterHelper"
description: "交易栏的自动配平算法：贪心挑选「还要补哪些项、各补多少个」或「还要减哪些项、各减多少个」，返回增量供调用方应用。"
---

# BarterHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class BarterHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`

## 概述

`BarterHelper` 是交易系统的**自动配平引擎**。当玩家点「自动配平」时，它不直接改交易栏，而是算出两串增量：一串是「还要往里加什么、各加多少」，另一串是「还要从里减什么、各减多少」。调用方拿到增量后自己决定怎么应用。算法是贪心近似，不是最优解，但足够快、足够合理。

## 心智模型

把 `BarterHelper` 想成一个**交易栏的会计**。它的工作是：给定当前已提供的物品列表，算出「离目标价值还差多少」，然后贪心挑性价比最高的候选来补足（或削减）。

两个方法互为镜像：`GetAutoBalanceBarterablesAdd` 算「还要补什么」，`GetAutoBalanceBarterablesToRemove` 算「还要减什么」。两者的核心循环结构一样——每轮挑单位价值最高的候选，算出需要多少个，加进结果，然后从候选池里移除。区别在于：Add 方法的目标是补足差额，Remove 方法是按比例削减。

**关键概念：返回值是增量，不是最终值。`count` 是「还要再加/减多少」，不是 `CurrentAmount` 应该是多少。** 调用方必须自己 `+=` 或 `-=`。

**另一个关键概念：`fulfillRatio` 控制配平比例。** 默认 `1f` 表示完全配平，传 `0.5f` 表示只补一半差额。这在「不想一次给够」的场景下有用。

**贪心策略的局限**：它每轮只看当前最优，不回头。所以如果候选池里有一堆小价值物品和一件大价值物品，它可能先把小物品用光，最后发现大物品一个就够但已经晚了。这不是 bug，是贪心算法的固有特性。

## 怎么用

### 怎么拿到它

静态类，直接调用。不需要实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**接在交易栏 UI 的「自动配平」按钮上**：先调 `GetAutoBalanceBarterablesAdd` 拿到要加的项，逐个 `CurrentAmount += count`；再调 `GetAutoBalanceBarterablesToRemove` 拿到要减的项，逐个 `CurrentAmount -= count`。

**只补不削**：如果你只想让系统自动加物品、不想让它自动减，只调 Add 方法，忽略 Remove。

**部分配平**：给 Add 方法传 `fulfillRatio = 0.5f`，系统只补一半差额，给玩家留点谈判空间。

### 最容易踩的坑

- **返回值是增量，不是最终值**：`count` 是「还要再加/减多少」，不是 `CurrentAmount` 应该是多少。直接赋值会覆盖，必须 `+=` 或 `-=`。
- **候选池是 `offererHero` 的物品**：Add 方法只考虑 `x.OriginalOwner == offererHero` 的候选，所以如果玩家把别人的物品放进交易栏，系统不会自动加它们。
- **Remove 方法会跳过「对自己不利」的项**：`unitValueForFaction2 >= 0` 时给 `-10000f` 的性价比，等于告诉算法「这东西不值得移除」。
- **`GoldBarterable` 是特例**：Add 方法里只要金币一次就能补足差额，就直接 `break`，不会继续贪心。
- **贪心不是最优**：如果对配平结果有精确要求（比如必须恰好等于某个值），需要自己写后处理逻辑。

## 关键成员

- `private static bool ItemExistsInBarterables(List<Barterable> barterables, ItemBarterable itemBarterable)` —— 私有，不对外。按 `ItemRosterElement.EquipmentElement.Item` 比较是否已有同一件物品的 barterable，用于候选过滤。`BarterHelper.cs:17`
- `public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesAdd(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero, float fulfillRatio = 1f)` —— 算「还要补哪些项、各补多少个」。贪心循环：每轮挑性价比最高的候选，`GoldBarterable` 一次补足就直接 `break`，否则取 `MathF.Min(MathF.Ceiling(...), 剩余候选数)` 作为数量。返回 `(barterable, count)` 序列，`count` 是增量。`BarterHelper.cs:28`
- `public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesToRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)` —— 镜像操作：从已提供列表里挑「对 faction 有价值、对自己不利」的项按比例削减。只考虑 `CurrentAmount > 0` 且 `unitValueForFaction > 0` 的项。`BarterHelper.cs:107`

## 真实示例

```csharp
// 接在交易栏 UI 的「自动配平」按钮上。两个方法的返回值都是【增量】，调用方负责应用。
public static void AutoBalance(BarterData barterData, IFaction faction, Hero offererHero)
{
    foreach ((Barterable barterable, int count) in
             BarterHelper.GetAutoBalanceBarterablesAdd(barterData, faction, faction, offererHero))
    {
        barterable.CurrentAmount += count;   // count = 还要再加多少
    }

    foreach ((Barterable barterable, int count) in
             BarterHelper.GetAutoBalanceBarterablesToRemove(barterData, faction, faction, offererHero))
    {
        barterable.CurrentAmount -= count;   // count = 还要再减多少
    }
}
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models` 是下面这些 helper 的真源
- ↔ [GameModels](../../campaign/GameModels) —— 强类型属性容器，模型的实际读取入口
- ↔ [GameModel](../GameModel) —— 所有玩法模型的抽象根类

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
