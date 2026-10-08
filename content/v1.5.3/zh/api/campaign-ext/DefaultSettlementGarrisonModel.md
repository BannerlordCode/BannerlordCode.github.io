---
title: "DefaultSettlementGarrisonModel"
description: "驻军模型默认实现：叛军城镇每日 +2 驻军、自动招募上限 1、按理想驻军强度抽兵、城墙每日修复上限。"
---

# DefaultSettlementGarrisonModel

**命名空间：** `TaleWorlds.CampaignSystem.GameComponents`
**类型：** `public class DefaultSettlementGarrisonModel : SettlementGarrisonModel`
**Source:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementGarrisonModel.cs`

## 概述

`DefaultSettlementGarrisonModel` 是 `SettlementGarrisonModel` 的官方默认实现，位于 `TaleWorlds.CampaignSystem.GameComponents` 命名空间。它把驻军机制的四项计算全部落地：每日自动招募上限固定为 1，再叠加城镇建筑的 `GarrisonAutoRecruitment` 效果；驻军基础变化对叛军城镇 +2，并叠加议题效果；抽兵数量按「当前驻军强度 / 理想驻军强度」的 1.5 次方缩放，再乘部队规模系数与领主系数；城墙修复上限为总墙段上限的 4%，可受 `WallRepairSpeed` 建筑效果加成。游戏启动时由 Campaign 把它注册进 `Campaign.Current.Models`，Mod 通过继承 `SettlementGarrisonModel` 并替换注册来改写这些数值。调用方与抽象接口页所述一致：驻军每日 tick、部队招募 AI、城墙修复流程。

## 心智模型

实现的核心是「逐项累加 `ExplainedNumber`」这一模式。`GetMaximumDailyAutoRecruitmentCount` 从 1 起步，调用 `town.AddEffectOfBuildings(BuildingEffectEnum.GarrisonAutoRecruitment, ref explainedNumber)` 把城镇建筑的自动招募效果叠上去。`CalculateBaseGarrisonChange` 从 0 起步，先判断 `IsTown` 或 `IsCastle` 且 `OwnerClan.IsRebelClan` 且 faction 非王国，满足则 +2 并挂上 `str_rebel_settlement` 文本，再调 `IssueModel.GetIssueEffectsOfSettlement` 叠加议题修正。`FindNumberOfTroopsToTakeFromGarrison` 是最复杂的一支：先取 `settlement.Town.GarrisonParty`，为空直接返回 0；再算当前驻军强度 `CalculateCurrentStrength`；理想强度分两支——有限工资的部队按 `PaymentLimit / AverageWage / 1.5` 算，否则按 `FactionHelper.FindIdealGarrisonStrengthPerWalledCenter` 算并乘经济系数与城镇系数（城镇 ×2）；然后算部队规模系数 `min(11, (limit/count) * sqrt(limit/count)) - 1`，与强度比的 1.5 次方、领主系数（领袖是 clan leader 时 ×2）相乘，超过 1 才抽兵，最后用 `MBRandom.RoundRandomized` 取整，并保证驻军至少留下 25（城镇 50）正规军。`GetMaximumDailyRepairAmount` 只在城墙有损伤且未被围困时返回正数，基础值为 `MaxHitPointsOfOneWallSection * WallSectionCount * 0.04`，城镇是堡垒时再叠 `WallRepairSpeed` 建筑效果。常见误用：以为 `MaximumDailyAutoRecruitmentCount` 常量（=1）就是最终上限，实际它只是基础值；以为抽兵会保留最低驻军，实际保底是硬编码 25/50 而非比例。

## 怎么用

### 怎么拿到它

通过 Campaign 的 GameModels 聚合取到：默认实现由游戏在战役启动时注册进 `Campaign.Current.Models`，Mod 代码从该聚合解析实例，无需自己 new。

### 典型用法

1. 读每日自动招募上限：`GetMaximumDailyAutoRecruitmentCount(town, false).ResultNumber`。
2. 读驻军每日基础变化：`CalculateBaseGarrisonChange(settlement, false).ResultNumber`。
3. 招募前算抽兵量：`FindNumberOfTroopsToTakeFromGarrison(party, settlement, 0f)`，传 0 表示用游戏内置理想强度。
4. 修复流程读每日修复上限：`GetMaximumDailyRepairAmount(settlement)`。
5. Mod 改写数值：继承 `SettlementGarrisonModel`，重写这四个方法，替换 GameModels 注册。

### 最容易踩的坑

1. 有限工资的驻军部队走 `PaymentLimit / AverageWage / 1.5` 分支，与无限工资分支的理想强度算法完全不同（锚点 39）。
2. 抽兵保底是硬编码 25（城镇 50）正规军，不是当前驻军的比例，驻军薄时可能抽到负数被截断（锚点 39）。
3. `GetMaximumDailyRepairAmount` 在 `IsUnderSiege` 或城墙全完好时返回 0，修复流程必须先判正数（锚点 81）。
4. `CalculateBaseGarrisonChange` 的叛军 +2 要求 `MapFaction == null` 或 `!IsKingdomFaction`，王国叛军不加（锚点 27）。
5. `MaximumDailyAutoRecruitmentCount` 常量只是基础值，建筑效果会叠加，别把它当最终上限（锚点 19）。

## 关键成员

- **类声明**（`DefaultSettlementGarrisonModel.cs:16`）— 默认实现类，继承 `SettlementGarrisonModel`，随 GameModels 聚合注册。
- **GetMaximumDailyAutoRecruitmentCount**（`DefaultSettlementGarrisonModel.cs:19`）— 每日自动招募上限；从 1 起步，叠加 `GarrisonAutoRecruitment` 建筑效果。
- **CalculateBaseGarrisonChange**（`DefaultSettlementGarrisonModel.cs:27`）— 驻军每日基础净变化；从 0 起步，叛军城镇 +2，再叠加议题效果。
- **FindNumberOfTroopsToTakeFromGarrison**（`DefaultSettlementGarrisonModel.cs:39`）— 抽兵数量计算；驻军为空返回 0，按强度比 1.5 次方 × 规模系数 × 领主系数缩放，保底 25/50 正规军。
- **GetMaximumDailyRepairAmount**（`DefaultSettlementGarrisonModel.cs:81`）— 城墙每日修复上限；基础为总墙段上限 4%，堡垒城镇叠 `WallRepairSpeed` 效果，被围或完好时返回 0。

## 真实示例

```csharp
using TaleWorlds.CampaignSystem;
using TaleWorlds.CampaignSystem.Party;
using TaleWorlds.CampaignSystem.Settlements;
using TaleWorlds.Core;

public static class DefaultGarrisonExample
{
    public static void Inspect(Settlement settlement, MobileParty party)
    {
        var model = Campaign.Current.Models.SettlementGarrisonModel;
        ExplainedNumber change = model.CalculateBaseGarrisonChange(settlement, true);
        ExplainedNumber recruit = model.GetMaximumDailyAutoRecruitmentCount(settlement.Town, true);
        int take = model.FindNumberOfTroopsToTakeFromGarrison(party, settlement, 0f);
        float repair = model.GetMaximumDailyRepairAmount(settlement);
        InformationManager.DisplayMessage(new InformationMessage(
            $"change={change.ResultNumber}, recruit={recruit.ResultNumber}, take={take}, repair={repair}"));
    }
}
```

## 参见

- [SettlementGarrisonModel](../SettlementGarrisonModel) — 本批，先放着
- [DefaultSettlementMilitiaModel](../DefaultSettlementMilitiaModel) — 已落盘
- [PartyBaseHelper](../../core-extra/PartyBaseHelper)
- [TownHelpers](../../core-extra/TownHelpers)

## 导航

- ↑ [API 参考](../../) —— 本版本 API 层入口：按任务找页的路径表
- ↑ [v1.5.3 首页](../../../) —— 19 个桶的完整缺口表与覆盖现状
- ↔ [模块地图](../../../architecture/module-map) —— 确认某个类型属于哪一桶
