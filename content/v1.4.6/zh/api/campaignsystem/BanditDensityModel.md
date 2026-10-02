---
title: "BanditDensityModel"
description: "BanditDensityModel：TaleWorlds.CampaignSystem 的 public 类，继承 MBGameModel<BanditDensityModel>；公开成员 13 个（方法 4、属性 9、字段 0）。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs。"
---
# BanditDensityModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class BanditDensityModel : MBGameModel<BanditDensityModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs`

## 概述

BanditDensityModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<BanditDensityModel>，继承链为 BanditDensityModel → MBGameModel。public/protected 成员共 13 个：4 方法、9 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：BanditDensityModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.ComponentInterfaces），继承链 BanditDensityModel → MBGameModel。成员构成以属性为主（属性 9/13，方法 4/13），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/BanditDensityModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetMaxSupportedNumberOfLootersForClan` | `public abstract int GetMaxSupportedNumberOfLootersForClan(Clan clan);` | 方法 |
| `NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | `public abstract int NumberOfMinimumBanditPartiesInAHideoutToInfestIt` | 属性 |
| `NumberOfMaximumBanditPartiesInEachHideout` | `public abstract int NumberOfMaximumBanditPartiesInEachHideout` | 属性 |
| `NumberOfMaximumBanditPartiesAroundEachHideout` | `public abstract int NumberOfMaximumBanditPartiesAroundEachHideout` | 属性 |
| `NumberOfMaximumHideoutsAtEachBanditFaction` | `public abstract int NumberOfMaximumHideoutsAtEachBanditFaction` | 属性 |
| `NumberOfInitialHideoutsAtEachBanditFaction` | `public abstract int NumberOfInitialHideoutsAtEachBanditFaction` | 属性 |
| `NumberOfMinimumBanditTroopsInHideoutMission` | `public abstract int NumberOfMinimumBanditTroopsInHideoutMission` | 属性 |
| `NumberOfMaximumTroopCountForFirstFightInHideout` | `public abstract int NumberOfMaximumTroopCountForFirstFightInHideout` | 属性 |
| `NumberOfMaximumTroopCountForBossFightInHideout` | `public abstract int NumberOfMaximumTroopCountForBossFightInHideout` | 属性 |
| `SpawnPercentageForFirstFightInHideoutMission` | `public abstract float SpawnPercentageForFirstFightInHideoutMission` | 属性 |
| `GetMinimumTroopCountForHideoutMission` | `public abstract int GetMinimumTroopCountForHideoutMission(MobileParty party, bool isAssault);` | 方法 |
| `GetMaximumTroopCountForHideoutMission` | `public abstract int GetMaximumTroopCountForHideoutMission(MobileParty party, bool isAssault);` | 方法 |
| `IsPositionInsideNavalSafeZone` | `public abstract bool IsPositionInsideNavalSafeZone(CampaignVec2 position);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgeModel](../AgeModel)
- [同命名空间 AlleyModel](../AlleyModel)
- [同命名空间 AllianceModel](../AllianceModel)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
