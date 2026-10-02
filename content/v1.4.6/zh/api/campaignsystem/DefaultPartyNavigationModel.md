---
title: "DefaultPartyNavigationModel"
description: "DefaultPartyNavigationModel：TaleWorlds.CampaignSystem 的 public 类，继承 PartyNavigationModel；公开成员 6 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs。"
---
# DefaultPartyNavigationModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPartyNavigationModel : PartyNavigationModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs`

## 概述

DefaultPartyNavigationModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs。它是一个 public 类，实现/继承 PartyNavigationModel，继承链为 DefaultPartyNavigationModel → PartyNavigationModel → MBGameModel。public/protected 成员共 6 个：5 方法、1 构造函数。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultPartyNavigationModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultPartyNavigationModel → PartyNavigationModel → MBGameModel。成员构成以方法为主（方法 5/6，属性 0/6），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultPartyNavigationModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEmbarkDisembarkThresholdDistance` | `public override float GetEmbarkDisembarkThresholdDistance()` | 方法 |
| `DefaultPartyNavigationModel` | `public DefaultPartyNavigationModel()` | 构造函数 |
| `int[]GetInvalidTerrainTypesForNavigationType` | `public override int[]GetInvalidTerrainTypesForNavigationType(MobileParty.NavigationType navigationType)` | 方法 |
| `IsTerrainTypeValidForNavigationType` | `public override bool IsTerrainTypeValidForNavigationType(TerrainType terrainType, MobileParty.NavigationType navigationType)` | 方法 |
| `HasNavalNavigationCapability` | `public override bool HasNavalNavigationCapability(MobileParty mobileParty)` | 方法 |
| `CanPlayerNavigateToPosition` | `public override bool CanPlayerNavigateToPosition(CampaignVec2 vec2, out MobileParty.NavigationType navigationType)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 PartyNavigationModel](../PartyNavigationModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
