---
title: "TownHelpers"
description: "聚落查询的静态工具集：问城里有哪些人、城镇食物库存与物价偏离率，全部是无状态查询。"
---

# TownHelpers

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class TownHelpers`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/TownHelpers.cs`

## 概述

本类分两族——「问聚落里有哪些人」（4 个方法 + 2 个谓词，真源是 `Settlement.Parties` / `HeroesWithoutParty` 与 `Occupation`/`IsPrisoner`/`Age`）和「问城镇的食物与物价」（2 个方法，真源是 `Town.FoodStocks` / `ItemRoster` / `GetItemPrice` / `Town.AllTowns`）。它自己不持有状态，全部是查询。

## 心智模型

把 TownHelpers 想成聚落信息的「前台查询窗口」：真正持有数据的是 `Settlement` 和 `Town`，本类只是把「谁在里面」「有没有食物」「物价偏不偏」这些问题整理成固定几个问法。关键设计决策是**「可会见」语义与「所有英雄」语义的分离**——`GetHeroesToMeetInTown` 只返回满足 `RequestAMeetingHeroWithoutPartyCondition` 的英雄（领主、非囚犯、已成年），而 `GetHeroesInSettlement` 返回所有在聚落里的英雄、只套调用方给的 `predicate`。想要「可会见」语义必须用前者或自己传后者。

## 怎么用

### 怎么拿到它

静态类，直接 `TownHelpers.方法名(...)` 调用。所有方法都要求调用方传入 `Settlement` 或 `Town`。

### 典型用法

- 要判断「城里有没有可会见的人」时，用 `IsThereAnyoneToMeetInTown(settlement)`。
- 要列出「城里所有可会见的英雄」时，用 `GetHeroesToMeetInTown(settlement)`。
- 要列出「城里所有英雄（不过滤）」时，用 `GetHeroesInSettlement(settlement, predicate)`。
- 要问「城镇食物库存和市场上能补食物的物品总数」时，用 `GetTownFoodAndMarketStocks(town)`。
- 要问「某物品在该镇价格相对全图均价的偏离率」时，用 `CalculatePriceDeviationRatio(town, equipmentElement)`。

### 最容易踩的坑

- `GetTownFoodAndMarketStocks` 的两个数都**截断取整**（`(int)`，第 32 行），不是四舍五入；`town` 为 null 或**不是 `IsTown`（例如城堡）**时第二个数恒为 `0`，**静默不报错**。
- `GetHeroesInSettlement` **不过滤**领主身份/囚犯/成年，只套调用方给的 `predicate` ⇒ 想要「可会见」语义必须用 `GetHeroesToMeetInTown` 或自己传 `RequestAMeetingHeroWithoutPartyCondition`。
- `CalculatePriceDeviationRatio` 的 `num2` 初值是 **`1f`**（第 124 行）⇒ `Town.AllTowns == null` 或均价为 0 时返回 **1.0**，语义上是「偏离 100%」——**这个默认值是误导性的**，调用方无法与「真的偏离 100%」区分。
- `CalculatePriceDeviationRatio` 每次调用都遍历 **`Town.AllTowns`**（O(镇数)），逐物品调用会明显变慢。

## 关键成员

- `public static ValueTuple<int, int> GetTownFoodAndMarketStocks(Town town)` —— 返回 `(食物库存, 市场上能补食物的物品总数)`。倒序遍历 `town.Owner.ItemRoster`，把 `BonusToFoodStores` 物品的 `Amount` 累加。两个数都截断取整。`TownHelpers.cs:17`
- `public static bool IsThereAnyoneToMeetInTown(Settlement settlement)` —— 城里有没有「可会见」的人：先扫 `settlement.Parties` 里满足 `RequestAMeetingPartyCondition` 的部队，再扫 `settlement.HeroesWithoutParty` 里满足 `RequestAMeetingHeroWithoutPartyCondition` 的。`TownHelpers.cs:36`
- `public static List<Hero> GetHeroesToMeetInTown(Settlement settlement)` —— 同上的**列表版**：两部分英雄都收进 `List<Hero>`。`TownHelpers.cs:63`
- `public static MBList<Hero> GetHeroesInSettlement(Settlement settlement, Predicate<Hero> predicate = null)` —— 收**所有**在聚落里的英雄，**不带「可会见」过滤**，只套调用方给的 `predicate`。`TownHelpers.cs:84`
- `public static bool RequestAMeetingPartyCondition(MobileParty party)` —— 判据 `party.IsLordParty && !party.IsMainParty && (party.Army == null || party.Army != MobileParty.MainParty.Army)`——领主部队、不是玩家主队、且不与玩家同军团。`TownHelpers.cs:108`
- `public static bool RequestAMeetingHeroWithoutPartyCondition(Hero hero)` —— 判据 `hero.CharacterObject.Occupation == Occupation.Lord && !hero.IsPrisoner && hero.Age >= (float)Campaign.Current.Models.AgeModel.HeroComesOfAge`——领主、非囚犯、已成年。`TownHelpers.cs:114`
- `public static float CalculatePriceDeviationRatio(Town town, EquipmentElement equipmentElement)` —— 某物品在该镇价格相对全图均价的偏离率。`Town.AllTowns == null` 或均价为 0 时返回 `1f`（误导性默认值）。`TownHelpers.cs:120`

## 真实示例

```csharp
// 问城镇食物库存
(int food, int market) = TownHelpers.GetTownFoodAndMarketStocks(town);
// 问城里有没有可领主的英雄
List<Hero> heroes = TownHelpers.GetHeroesToMeetInTown(settlement);
Debug.Print($"food={food} market={market} heroes={heroes.Count}");
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Town` / `Settlement` 都是战役世界对象
- ↔ [GameModels](../../campaign/GameModels) —— 成年线（`AgeModel.HeroComesOfAge`）与物品价格都来自模型层

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
