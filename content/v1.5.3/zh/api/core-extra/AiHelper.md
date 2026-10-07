---
title: "AiHelper"
description: "为移动部队挑选去聚落或另一支部队的最佳导航方式，并把海路距离按船舶风险换算成等效陆路距离。"
---

# AiHelper

**Namespace:** Helpers
**Module:** TaleWorlds.CampaignSystem
**Type:** `public static class AiHelper`
**Base:** 无（静态类）
**Source:** `bannerlord-1.5.3/TaleWorlds.CampaignSystem/Helpers/AiHelper.cs`

## 概述

`AiHelper` 是战役层里负责「怎么走」的决策工具：给定一支移动部队和一个目标（聚落或另一支移动部队），它比较陆路、海路、混合三种导航方式的代价，挑出最优的一种，并输出一个**经过船舶风险放大后的等效距离**。这个放大系数由 `CalculateShipDistanceAmplifier` 依据部队航速、安全航行时长与船只承载能力算出，让 AI 在评估「走海路抄近路」时不会盲目乐观。

## 心智模型

把 `AiHelper` 想成一个**导航代价比较器**，而不是路径规划器。它不产出路线，只产出两个决策量：`bestNavigationType`（`Default` 陆路 / `Naval` 海路 / `All` 混合 / `None` 不可达）和 `bestNavigationDistance`（等效陆路距离）。

核心思路是**把海路距离换算成陆路等价物**：同样一段海路，对一支船况好、航速快的部队几乎不构成额外负担，对一支船况差、船员不足的部队则代价高昂。`CalculateShipDistanceAmplifier` 就是干这件事的——它先按部队类型取平均航速估算航行天数，再拿 `CampaignShipDamageModel.GetEstimatedSafeSailDuration` 做安全期比较，超期就按倍率惩罚，最后再按「船只总船员容量 ÷ 部队总人数」补一刀。比值低于 0.6 时惩罚高达 3.5 倍，等于告诉 AI：「这条船装不下你的人，别走海路」。

调用方拿到结果后，通常用 `Campaign.MapDiagonal * 5f` 之类的阈值过滤掉不合理的候选，再决定是派船还是走陆路。

## 怎么用

### 怎么拿到它

静态类，直接调用，无需实例化，也不需要从 `Campaign.Current` 取。

### 典型用法

**场景一：部队要去某个聚落**（比如 AI 决定让某支部队去攻打或进驻一座城）——用 `GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty`，注意 `isTargetingPort` 参数会改变候选集：为 `true` 时跳过陆路候选，海路候选也只在为 `true` 时才可能被采纳。

**场景二：部队要去追另一支移动部队**——用 `GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty`，没有港口分支，海路走 `DistanceHelper.FindClosestDistanceFromMobilePartyToMobileParty`。

**场景三：拿到结果后做阈值判断**——`bestNavigationDistance` 已经是等效陆路距离，直接和 `Campaign.MapDiagonal` 的倍数比较即可。

### 最容易踩的坑

- **`isTargetingPort` 的副作用**：传 `true` 会跳过陆路候选（`AiHelper.cs:27` 的 `!isTargetingPort`），海路候选也只在 `isTargetingPort` 为 `true` 时才可能被采纳为 best（`AiHelper.cs:46`）。如果你本意是「随便哪种都行」，传 `false`。
- **`isFromPort` 只在混合候选里才有意义**：它标记的是「是否走了从港口出发的路径」，陆路候选不会设置它。
- **海路放大器不是线性惩罚**：航行天数超安全期后，惩罚倍率在 0.35–1.25 之间浮动，再叠加船只容量惩罚，所以两支部队走同一段海路可能得到截然不同的等效距离。
- **`None` 是合法返回值**：表示三种导航方式都不可达，调用方必须处理，不能默认一定有路。

## 关键成员

- `public static void GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(MobileParty mobileParty, Settlement settlement, bool isTargetingPort, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance, out bool isFromPort)` —— 给「部队 → 聚落」挑最佳导航方式并输出等效距离；`isTargetingPort` 控制是否跳过陆路、是否采纳海路。`AiHelper.cs:14`
- `public static void GetBestNavigationTypeAndDistanceOfMobilePartyForMobileParty(MobileParty mobileParty, MobileParty toMobileParty, out MobileParty.NavigationType bestNavigationType, out float bestNavigationDistance)` —— 同上但目标是另一支移动部队，无港口分支。`AiHelper.cs:114`
- `private static float CalculateShipDistanceAmplifier(MobileParty mobileParty, float navalDistance)` —— 私有，不对外。把海路距离换算成等效陆路距离：按部队类型取平均航速、比较安全航行期、再按船只容量惩罚。`AiHelper.cs:158`

## 真实示例

```csharp
MobileParty party = MobileParty.MainParty;
Settlement settlement = party.CurrentSettlement;
MobileParty.NavigationType navType;
float navDistance;
bool isFromPort;
AiHelper.GetBestNavigationTypeAndAdjustedDistanceOfSettlementForMobileParty(party, settlement, false, out navType, out navDistance, out isFromPort);
if (navType != MobileParty.NavigationType.None && navDistance < Campaign.MapDiagonal * 5f)
    InformationManager.DisplayMessage(new InformationMessage($"nav={navType} dist={navDistance:F1} fromPort={isFromPort}"));
```

## 参见

- ↔ [Campaign](../../campaign/Campaign) —— `Campaign.Current.Models` 是下面这些 helper 的真源
- ↔ [GameModels](../../campaign/GameModels) —— 强类型属性容器，模型的实际读取入口
- ↔ [GameModel](../GameModel) —— 所有玩法模型的抽象根类

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
