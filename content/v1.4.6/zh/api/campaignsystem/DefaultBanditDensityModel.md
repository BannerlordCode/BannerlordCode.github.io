---
title: "DefaultBanditDensityModel"
description: "DefaultBanditDensityModel：TaleWorlds.CampaignSystem 的 public 类，继承 BanditDensityModel；公开成员 13 个（方法 4、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs。"
---
# DefaultBanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultBanditDensityModel : BanditDensityModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs`

## 概述

DefaultBanditDensityModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs。它是一个 public 类，实现/继承 BanditDensityModel，继承链为 DefaultBanditDensityModel → BanditDensityModel → MBGameModel。public/protected 成员共 13 个：4 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultBanditDensityModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultBanditDensityModel → BanditDensityModel → MBGameModel。成员构成以属性为主（属性 9/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultBanditDensityModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public override int NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | 属性 |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public override int NumberOfMaximumBanditPartiesInEachHideout` | 属性 |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public override int NumberOfMaximumBanditPartiesAroundEachHideout` | 属性 |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public override int NumberOfMaximumHideoutsAtEachBanditFaction` | 属性 |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public override int NumberOfInitialHideoutsAtEachBanditFaction` | 属性 |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public override int NumberOfMinimumBanditTroopsInHideoutMission` | 属性 |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public override int NumberOfMaximumTroopCountForFirstFightInHideout` | 属性 |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public override int NumberOfMaximumTroopCountForBossFightInHideout` | 属性 |
| `SpawnPercentageForFirstFightInHideoutMission` | `public override float SpawnPercentageForFirstFightInHideoutMission` | 属性 |
| `GetMinimumTroopCountForHideoutMission` | `public override int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 方法 |
| `GetMaxSupportedNumberOfLootersForClan` | `public override int GetMaxSupportedNumberOfLootersForClan(Clan clan)` | 方法 |
| `GetMaximumTroopCountForHideoutMission` | `public override int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault)` | 方法 |
| `IsPositionInsideNavalSafeZone` | `public override bool IsPositionInsideNavalSafeZone(CampaignVec2 position)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 BanditDensityModel](../BanditDensityModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
