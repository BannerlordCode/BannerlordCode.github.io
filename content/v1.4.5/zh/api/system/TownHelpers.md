---
title: "TownHelpers"
description: "TownHelpers 是聚落访问和城镇交互的静态查询工具，读取 Town 库存、MobileParty、无队伍 Hero 与年龄模型来判断可会面对象。"
---
# TownHelpers

**命名空间:** `Helpers`  
**模块:** `TaleWorlds.CampaignSystem`  
**类型:** `public static class TownHelpers`  
**基类:** 无  
**源文件:** `bin/TaleWorlds.CampaignSystem/Helpers/TownHelpers.cs`

## 一句话职责

它把城镇食物与市场库存、可会面的领主、聚落内全部 Hero 和物品价格偏差集中成只读查询，供访问模型和菜单决定“能否见人”以及如何展示城镇状态，同时明确这些结果只代表当前战役快照而不是持久权限。

## 心智模型

`TownHelpers` 不拥有 Town、Party 或 Hero，也不执行会面 Action；它每次从传入的 `Settlement`、`Town`、party roster 和 `HeroesWithoutParty` 重新筛选。可会面条件由 `RequestAMeetingPartyCondition` 和 `RequestAMeetingHeroWithoutPartyCondition` 定义：只看非主队领主队伍，或已成年且不在监狱的领主 Hero。价格偏差则把当前城镇价格与 `Town.AllTowns` 的平均价格比较。

因此这些方法适合访问模型和 UI 的瞬时判断，不适合保存成长期资格。城镇库存、Party roster、囚禁状态和年龄都会在战役 tick 或 Action 后变化。

## 何时使用，何时不要用

- 在判断聚落菜单是否提供会面、读取食物/市场库存或生成城镇 Hero 列表时使用。
- 使用 `GetHeroesInSettlement` 时传入明确的 `Predicate<Hero>`，避免把所有驻留 Hero 当作可见或可交互对象。
- 不要直接修改这些方法返回的列表来改变城镇状态；它们返回的是本次枚举结果，世界变更仍应走对应 Action。
- 不要用 `IsThereAnyoneToMeetInTown` 替代进入聚落的权限检查；`DefaultSettlementAccessModel` 还会检查犯罪、派系和访问等级。

## 依赖关系

```text
Settlement / Town
  -> parties, MemberRoster, HeroesWithoutParty, ItemRoster
  -> TownHelpers queries
  -> DefaultSettlementAccessModel / town menu decisions
```

- 业务实体：[Settlement](../../campaign/Settlement)、[Town](../../campaign/Town)、[Hero](../../campaign/Hero) 和 [MobileParty](../../campaign/MobileParty)。
- 访问下游：[SettlementAccessModel](../../campaign/SettlementAccessModel)；查询不会替它做权限结论。
- 库存与价格相关：[ItemRoster](../../campaign/ItemRoster) 和 [ItemObject](../../core-extra/ItemObject)。

## 公开成员

| 成员 | 用途与调用时机 |
|---|---|
| `GetTownFoodAndMarketStocks` | 返回城镇 `FoodStocks` 与拥有者物品中 `BonusToFoodStores` 的数量；读取库存，不触发生产或消费。 |
| `IsThereAnyoneToMeetInTown` | 先检查符合条件的领主队伍，再检查无队伍成年领主；用于访问/会面菜单的布尔门槛。 |
| `GetHeroesToMeetInTown` | 按同一会面条件返回 Hero 列表；列表来自当前 roster 快照。 |
| `GetHeroesInSettlement` | 枚举队伍和无队伍 Hero，可选 `Predicate<Hero>`；它比“可会面”范围更宽。 |
| `RequestAMeetingPartyCondition` | 判断非主队领主队伍，并排除与玩家同一 Army 的队伍；供 LINQ 筛选使用。 |
| `RequestAMeetingHeroWithoutPartyCondition` | 判断领主、非囚犯和 `AgeModel.HeroComesOfAge` 以上；需要有效 `Campaign.Current`。 |
| `CalculatePriceDeviationRatio` | 将当前城镇价格与所有城镇平均价格比较，返回 `(当前价 - 平均价) / 平均价`；零平均价时保留 `1f`。 |

## 真实示例

```csharp
using System.Collections.Generic;
using Helpers;
using TaleWorlds.CampaignSystem;

Settlement settlement = Settlement.CurrentSettlement;
if (settlement != null)
{
    List<Hero> meetingHeroes = TownHelpers.GetHeroesToMeetInTown(settlement);
    bool hasMeeting = TownHelpers.IsThereAnyoneToMeetInTown(settlement);
}
```

这只读取当前聚落的即时状态；如果下一步要改变访问、囚禁或 Party 所有权，应调用相应的战役 Action，而不是修改返回列表。

## 风险与存档边界

- `IsThereAnyoneToMeetInTown`、`GetHeroesToMeetInTown` 和 `GetHeroesInSettlement` 要求有效 `Settlement`；它们本身不会替调用方处理 `null`。
- 无队伍 Hero 的年龄条件来自当前 `Campaign.Current.Models.AgeModel`，不要在战役初始化前缓存结果。
- `GetTownFoodAndMarketStocks` 与价格偏差读取物品库存；它们不锁定 roster。并发的世界 Action 后应重新查询。
- 返回列表不是存档字段。把它序列化为长期状态会产生过期引用，尤其是 Hero 离队、被俘或聚落换主之后。

## 版本注记

v1.4.5 的可会面领主条件明确排除主队所属 Army，并用当前 `AgeModel.HeroComesOfAge` 判断无队伍领主是否成年；不要把这个查询当成所有版本通用的访问规则。

## 导航

- [↑ API 系统索引](../)
- [↔ SettlementHelper](../SettlementHelper)
- [相关：Settlement](../../campaign/Settlement)
- [相关：Hero](../../campaign/Hero)
