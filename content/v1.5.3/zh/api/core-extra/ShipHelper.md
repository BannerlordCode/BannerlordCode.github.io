---
title: "ShipHelper"
description: "把船翻译成视觉身份（旗帜/帆色）与归属分配（该给谁、值多少钱）的适配层，含三级回退的静默降级。"
---

# ShipHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class ShipHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/ShipHelper.cs`

## 概述

`ShipHelper` 是 1.5.3 新增的海军/港口子系统的工具类，解决两件看似不相关的事：**同一条船在不同上下文中该画成谁的颜色**（旗帜与帆色），以及**这条船该给谁、这批船能换多少钱**（归属分配与回收估值）。前四个方法是「船 → 视觉身份」的适配，后三个方法是「船 → 归属分配」的决策。

## 心智模型

把 `ShipHelper` 想成**船的身份翻译官 + 分配会计**，两个角色共用同一套三级回退逻辑。

**视觉身份**的核心问题是：一条船可能属于某个氏族，但舰长是另一个氏族的英雄，而它所在的军团又是第三个派系。画旗时该听谁的？`ShipHelper` 的答案是**三级回退**：① 舰长是英雄 → 用舰长氏族的旗帜/颜色；② 船主是移动部队且属于某军团 → 用军团领袖派系的旗帜/颜色；③ 否则 → 用船主自己的旗帜/颜色。拿不到就静默降级成单色空旗或默认色，**不报错**。

**归属分配**的核心问题是：玩家或 AI 获得一条新船，该给氏族里哪支部队？`GetClanPartyToGetAvailableShip` 用 `ShipDistributionModel.CanSendShipToParty` 做资格过滤，再用 `GetScoreForPartyShipComposition` 算「加船前 vs 加船后」的分数增量，取增量最大者。这不是「谁船少给谁」，而是「谁加了船之后舰队组成更合理」。

**回收估值**的核心问题是：一批船能换多少钱？`GetAmountToRecoverFromRemainingShipsAfterDistribution` 用 `ShipCostModel.GetShipTradeValue` 逐条算，再对玩家氏族乘 `GetShipSellingPenalty`——**只有玩家卖船才吃这个惩罚**，AI 氏族之间的交易不受影响。

## 怎么用

### 怎么拿到它

静态类，直接调用。不需要实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**港口界面画船旗与帆色**：用 `TryGetShipBanner` + `TryGetSailColors`，两者都返回 `bool`，失败时 `out` 参数是单色空旗/默认色，界面可以安全地继续渲染。

**海上劫掠任务选船**：用 `GetOrderedNavalRaidShipsOfPlayerParty`，它已经帮你过滤掉不能走浅水的船并按主甲板容量降序截断到 3 条。

**分配新船给氏族部队**：用 `GetClanPartyToGetAvailableShip`，传入船和氏族，返回最适合接收的部队；`doesPartyNeedShips` 告诉你是否真的需要（分数增量 > 0）。

**卖船前估算收益**：用 `GetAmountToRecoverFromRemainingShipsAfterDistribution`，传入要卖的船列表和卖方部队。

### 最容易踩的坑

- **4 个旗帜/帆色方法都是静默降级**：拿不到就返回单色空旗或默认色，不报错。颜色不对时先查 `Owner` / `Army` 链是否完整。
- **`GetSailColorsForParty` 用 `party.Owner`（101 行）而 `GetShipBannerForParty` 用 `party.Banner`（84 行）**，空值安全性不一致——前者可能 NRE，后者不会。
- **`GetOrderedNavalRaidShipsOfPlayerParty` 会丢弃不能走浅水的船并硬截断到 3 条**（119 行），不是「排序后的全部」。
- **`GetAmountToRecoverFromRemainingShipsAfterDistribution` 的惩罚只对 `Clan.PlayerClan` 生效**（156 行），别指望它对 AI 氏族也算。
- **`GetShipBannerForParty` 与 `TryGetShipBanner` 不同**：前者没有 captain 通道，且走 `party.Banner` 而不是 `ship.Owner.Banner`。

## 关键成员

- `public static bool TryGetShipBanner(IShipOrigin shipOrigin, out Banner banner, IAgent captain = null)` —— 取船旗，两条优先通道：captain 是英雄用 `ClanBanner`，否则 ship 路径按军团/船主回退。`ShipHelper.cs:19`
- `public static bool TryGetSailColors(IShipOrigin shipOrigin, out ValueTuple<uint, uint> sailColors, IAgent captain = null)` —— 取帆色，与 `TryGetShipBanner` 完全同构，回退到 `MapFaction.Color/Color2`。`ShipHelper.cs:45`
- `public static Banner GetShipBannerForParty(PartyBase party = null)` —— 按部队取旗帜，无 captain 通道，走 `party.Banner`。`ShipHelper.cs:74`
- `public static ValueTuple<uint, uint> GetSailColorsForParty(PartyBase party = null)` —— 按部队取帆色，非军团路径用 `party.Owner.MapFaction`，可能 NRE。`ShipHelper.cs:89`
- `public static List<Ship> GetOrderedNavalRaidShipsOfPlayerParty()` —— 取玩家主队可用于海上劫掠的船，只收能走浅水的，按主甲板容量降序取前 3。`ShipHelper.cs:109`
- `public static MobileParty GetClanPartyToGetAvailableShip(Ship ship, Clan clan, out bool doesPartyNeedShips)` —— 在氏族部队里挑最适合接收这艘船的，按分数增量最大者。`ShipHelper.cs:123`
- `public static int GetAmountToRecoverFromRemainingShipsAfterDistribution(MBReadOnlyList<Ship> shipsToRecover, MobileParty seller)` —— 算一批船的回收价值，玩家氏族卖船额外吃惩罚。`ShipHelper.cs:153`
- `public const int NavalRaidMissionShipLimit = 3;` —— 海上劫掠任务最多带 3 条船，对应 `GetOrderedNavalRaidShipsOfPlayerParty` 里的硬编码截断。`ShipHelper.cs:165`

## 真实示例

```csharp
// 港口界面要给每条船画旗与帆色；拿不到时静默降级成单色空旗
Banner banner;
ValueTuple<uint, uint> sailColors;
if (ShipHelper.TryGetShipBanner(ship, out banner) && ShipHelper.TryGetSailColors(ship, out sailColors))
    Debug.Print($"banner={banner.BannerCode} sail1={sailColors.Item1} sail2={sailColors.Item2}");

// 海上劫掠任务最多带 3 条能走浅水的船，按主甲板容量降序
foreach (Ship raidShip in ShipHelper.GetOrderedNavalRaidShipsOfPlayerParty())
    Debug.Print($"raid ship: {raidShip.Name}");
```

## 参见

- ↔ [PortStateHelper](../PortStateHelper) —— 港口/船队界面由它推上来，两页配套读
- ↔ [GameModels](../../campaign/GameModels) —— `ShipDistributionModel` / `ShipCostModel` 决定船该给谁、值多少钱
- ↔ [Campaign](../../campaign/Campaign) —— 船挂在部队与聚落上，都是战役世界对象

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
