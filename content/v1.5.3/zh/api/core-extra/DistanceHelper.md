---
title: "DistanceHelper"
description: "地图距离问法的静态适配器：把「从哪到哪、能不能走海、要不要绕港口、切换代价算不算」收敛成固定几个重载，真正算距离的永远是 MapDistanceModel。"
---

# DistanceHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class DistanceHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/DistanceHelper.cs`

## 概述

本类是 `MapDistanceModel` 的一层「问法适配器」。它不发明任何距离算法——所有真正的距离计算都委托给 `Campaign.Current.Models.MapDistanceModel`——它的价值在于把「起点是聚落还是部队、终点是聚落还是点、允许走海吗、要不要绕港口、上岸/下海的切换代价算不算」这套组合爆炸收敛成 21 个固定重载，并用 `out` 参数把「这次到底走的是港口还是陆路、陆路占比多少」告诉调用方。

## 心智模型

把 DistanceHelper 想成地图距离的「前台接待」：真正算距离的永远是 `Campaign.Current.Models.MapDistanceModel`，本类只是把各种问法整理成固定窗口。mod 想改距离算法应该换 `MapDistanceModel`（换模型），而不是复制本类的逻辑。本类的核心设计是**位掩码解能力**：`NavigationType` 是一个 `[Flags]` 枚举，本类用 `(navCapabilities & NavigationType.Naval) == NavigationType.Naval` 这样的位运算判断「这次允不允许走海」，再据此决定要不要试港口路径、要不要加 `RegionSwitchCostFromLandToSea` 切换代价。`landRatio` 是它交给调用方的核心输出：`1f` 表示全陆路，`0f` 表示全海路，`-1f` 表示无解或不适用。

## 怎么用

### 怎么拿到它

静态类，直接 `DistanceHelper.方法名(...)` 调用。所有方法都要求调用方传入 `MobileParty.NavigationType` 来声明「这次允许怎么走」。

### 典型用法

- 问「部队到某个聚落有多远」时，用 `FindClosestDistanceFromMobilePartyToSettlement`，它会按部队当前位置自动分派到聚落版或几何版。
- 问「两个聚落之间有多远」时，用 `FindClosestDistanceFromSettlementToSettlement`，它会依次试三种港口组合取最小值。
- 只想问「在不在 N 路程内」时，用带 `maxDistance` 参数的那三个返回 `bool` 的重载。
- 问「两个部队之间有多远」时，用 `FindClosestDistanceFromMobilePartyToMobileParty`，它会按双方位置自动分派到聚落版、几何版或直线距离版。

### 最容易踩的坑

- 21 个重载里有 3 个返回 `bool`（第 190 / 197 / 204 行）而不是距离本身——拿到 `false` 时 `out distance` 仍是**算出来的值**，不是 0，调用方必须区分「距离是多少」和「在不在范围内」这两件事。
- `landRatio` 是 `-1f` 表示「无解/不适用」（第 144–146、323–324、359 行），不是「全陆路」；直接拿去当比例用会出错。
- `FindClosestDistanceFromMapPointToSettlement` 按**运行时类型**分派（`as Settlement` / `as MobileParty`，第 260 / 266 行），传一个既非聚落也非部队的 `IMapPoint` 会走「当普通点」那条分支、`landRatio` 直接给 `1f`（第 273 行）。
- 只有 `NavigationType.All` 才会算「上岸/下海切换代价」与那条递归（第 367–374 行）；传 `NavigationType.Naval` 或 `NavigationType.Default` 时这些代价和递归都不会触发。

## 关键成员

- `public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isFromPort, out bool isTargetingPort, out float landRatio)` —— 本类的主入口。用位掩码解能力，依次试三种港口组合（从港口出发 / 目标港口 / 两头都港口）取最小值，并同步更新三个 out 参数。`DistanceHelper.cs:15`
- `private static float FindClosestDistanceFromSettlementToSettlementForMobileParty(MobileParty mobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isFromPort, out bool isTargetingPort, out float landRatio)` —— 私有，不对外。同上但起点是部队当前所在聚落；纯海路能力时基准距离不计算，走港口路径要加 `RegionSwitchCostFromLandToSea` 切换代价。`DistanceHelper.cs:58`
- `public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)` —— 部队到聚落的入口。部队在聚落里走聚落版，否则按陆路/海路能力分派到几何版或港口版。`DistanceHelper.cs:142`
- `public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out bool isFromPort)` —— 聚落到任意点的距离。用「点是否在陆上」决定起始参数，起点有港口且允许海路时再试港口版本取更小者。`DistanceHelper.cs:238`
- `private static float FindClosestDistanceFromSettlementToPointForMobileParty(MobileParty mobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)` —— 私有，不对外。先做「能力与当前环境是否相容」的门禁，不相容直接返回 `float.MaxValue`；`landRatio` 按在海上 / 有港口 / 点是否在陆上组合出 0 / 0.5 / 1 / -1。`DistanceHelper.cs:296`
- `public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out bool isTargetingPort, out float landRatio)` —— 通用入口。按 `mapPoint` 运行时类型分派到聚落版、部队版或普通点版。`DistanceHelper.cs:256`
- `public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, out float landRatio)` —— 部队到部队的入口。按双方位置自动分派到聚落版、几何版或直线距离版（距离平方 < 2500 时直接算）。`DistanceHelper.cs:218`
- `public static float GetDistanceBetweenMobilePartyToMobileParty(MobileParty fromMobileParty, MobileParty toMobileParty, MobileParty.NavigationType customCapability, out float landRatio)` —— 几何式：「直线距离 − 两个入口之间的距离 + 两个入口之间的真实距离」。`NavigationType.All` 时加切换代价，两军同侧时递归调自己取更小值。`DistanceHelper.cs:352`
- `public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities)` —— 纯转发重载，丢弃全部 out 参数，调用方不关心港口标记与 landRatio 时的短签名。`DistanceHelper.cs:125`
- `public static float FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)` —— 纯转发重载，只保留 landRatio，丢弃两个港口标记。`DistanceHelper.cs:134`
- `public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities)` —— 纯转发重载，丢弃全部 out 参数。`DistanceHelper.cs:175`
- `public static float FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)` —— 纯转发重载，只保留 landRatio。`DistanceHelper.cs:183`
- `public static bool FindClosestDistanceFromMobilePartyToSettlement(MobileParty fromMobileParty, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)` —— 返回 `bool`（`distance < maxDistance`）的范围判定重载，`out distance` 仍是算出来的值。`DistanceHelper.cs:190`
- `public static bool FindClosestDistanceFromSettlementToSettlement(Settlement fromSettlement, Settlement toSettlement, MobileParty.NavigationType navCapabilities, float maxDistance, out float distance, out float landRatio)` —— 聚落版范围判定重载，返回 `bool`。`DistanceHelper.cs:197`
- `public static bool FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType, float maxDistance, out float distance, out float landRatio)` —— 部队版范围判定重载，返回 `bool`。`DistanceHelper.cs:204`
- `public static float FindClosestDistanceFromMobilePartyToMobileParty(MobileParty from, MobileParty to, MobileParty.NavigationType navigationType)` —— 纯转发重载，丢弃 landRatio。`DistanceHelper.cs:211`
- `public static float FindClosestDistanceFromSettlementToPoint(Settlement fromSettlement, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)` —— 纯转发重载，只保留 landRatio，丢弃 isFromPort。`DistanceHelper.cs:290`
- `public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities)` —— 纯转发重载，丢弃全部 out 参数。`DistanceHelper.cs:328`
- `public static float FindClosestDistanceFromMobilePartyToPoint(MobileParty fromMobileParty, CampaignVec2 point, MobileParty.NavigationType navCapabilities, out float landRatio)` —— 不是纯转发：部队在聚落里时走聚落到点版，否则直接 `GetDistance`。`DistanceHelper.cs:335`
- `public static float FindClosestDistanceFromMapPointToSettlement(IMapPoint mapPoint, Settlement toSettlement, MobileParty.NavigationType navCapabilities, out float landRatio)` —— 纯转发重载，只保留 landRatio，丢弃 isTargetingPort。`DistanceHelper.cs:345`
- `public const int BirdFlyDistanceSquaredThresholdForMobilePartyToMobilePartyDistance = 2500;` —— 部队到部队距离的直线距离平方阈值，低于此值时直接算直线距离而不走入口几何。`DistanceHelper.cs:381`

## 真实示例

```csharp
// 和 AiHelper 同一套问法：先问「到那个聚落要走多远」，再自己乘航行代价
MobileParty party = MobileParty.MainParty;
Settlement target = party.CurrentSettlement;
bool isTargetingPort;
float landRatio;
float distance = DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(
    party, target, MobileParty.NavigationType.All, out isTargetingPort, out landRatio);

// 只想问「在不在 30 天路程内」时用返回 bool 的那条重载
float d;
float ratio;
bool inRange = DistanceHelper.FindClosestDistanceFromMobilePartyToSettlement(
    party, target, MobileParty.NavigationType.All, Campaign.MapDiagonal, out d, out ratio);
Debug.Print($"dist={distance:F1} targetingPort={isTargetingPort} landRatio={landRatio} inRange={inRange}");
```

## 参见

- ↔ [AiHelper](../AiHelper) —— 它按导航方式挑路时就是调本类取距离，再乘船舶代价放大
- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.MapDiagonal` 与 `Campaign.Current.Models` 是本类的两个输入
- ↔ [GameModels](../../campaign/GameModels) —— `MapDistanceModel` 从这里读，距离算法本身是可替换的

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
