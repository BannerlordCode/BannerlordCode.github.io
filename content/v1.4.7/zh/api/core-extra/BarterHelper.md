---
title: "BarterHelper"
description: "交易栏自动配平的贪心算法：算「还要补哪些项、各补多少个」与「还要减哪些项、各减多少个」。"
---

# BarterHelper

**命名空间：** `Helpers`
**模块：** `TaleWorlds.CampaignSystem`
**类型：** `public static class BarterHelper`
**基类：** 无
**源文件：** `bannerlord-1.4.7/TaleWorlds.CampaignSystem/Helpers/BarterHelper.cs`（声明见第 14 行）

## 概述

本类是交易栏自动配平的贪心算法。两个 public 方法分别算「还要补哪些项、各补多少个」（`GetAutoBalanceBarterablesAdd`）与「还要减哪些项、各减多少个」（`GetAutoBalanceBarterablesToRemove`）。返回的 `count` 是**增量**，不是最终 `CurrentAmount`，调用方负责应用。两个方法都是贪心近似，不是最优解。

## 心智模型

把 BarterHelper 想成交易栏的「自动配平器」：玩家拖了一些物品进交易栏后，本类负责算「还差多少价值、该补哪些物品」或「多了哪些价值、该减哪些物品」。关键设计决策是**贪心近似**——每轮挑性价比最高的候选，不保证全局最优。单位价值来自 `Barterable.GetUnitValueForFaction`、总值来自 `Barterable.GetValueForFaction`。候选过滤条件是 `x.OriginalOwner == offererHero` 且该物品**尚未**出现在已提供列表里。

## 何时使用 / 何时不要使用

**何时使用：**
- 要在交易栏 UI 上实现「自动配平」按钮时，用 `GetAutoBalanceBarterablesAdd` 和 `GetAutoBalanceBarterablesToRemove`。
- 返回值是**增量**，调用方负责应用到 `barterable.CurrentAmount`。

**何时不要使用：**
- 不要期望最优解——两个方法都是贪心近似。
- 不要把返回的 `count` 当作最终 `CurrentAmount`——它是增量。
- 不要在非交易场景调用——本类只服务交易栏。

## 成员说明

| 成员 | 用途、副作用与时机 |
|------|-------------------|
| `private static bool ItemExistsInBarterables(List<Barterable> barterables, ItemBarterable itemBarterable)` | 私有，不对外。按 `ItemRosterElement.EquipmentElement.Item` 比较是否已有同一件物品的 barterable。`BarterHelper.cs:17` |
| `public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesAdd(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero, float fulfillRatio = 1f)` | 自动配平交易栏：算「还要补哪些项、各补多少个」。贪心循环，每轮挑性价比最大的候选。返回的 `count` 是增量。`BarterHelper.cs:28` |
| `public static IEnumerable<ValueTuple<Barterable, int>> GetAutoBalanceBarterablesRemove(BarterData barterData, IFaction factionToBalanceFor, IFaction offerer, Hero offererHero)` | 镜像操作：从已提供列表里挑「对 faction 有价值、对自己不利」的项按比例削减。返回的 `count` 是增量。`BarterHelper.cs:107` |

## 示例

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

## 风险与边界

- **两个方法都是贪心近似，不是最优解**；单位价值来自 `Barterable.GetUnitValueForFaction`、总值来自 `Barterable.GetValueForFaction`。
- 返回的 `count` 是**增量**，不是最终 `CurrentAmount`，调用方必须自己应用到 `barterable.CurrentAmount`。
- 候选过滤条件是 `x.OriginalOwner == offererHero` 且该物品**尚未**出现在已提供列表里——同一件物品不会被重复添加。
- `GoldBarterable` 只要一次就能补足就直接 `break`（第 57–61 行）——这是贪心算法的提前终止条件。

## 依赖关系

- 上游 / 提供者：
  - [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models` 是这些规则的真源。
  - [CampaignGameStarter](../../campaign/CampaignGameStarter) —— 想替换默认规则时在注册期挂钩。

## 参见

- ↑ 父级：[core-extra 索引](../)
- ↔ 相关：[BuildingHelper](../BuildingHelper)
