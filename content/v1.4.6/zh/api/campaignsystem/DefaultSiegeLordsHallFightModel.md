---
title: "DefaultSiegeLordsHallFightModel"
description: "DefaultSiegeLordsHallFightModel：TaleWorlds.CampaignSystem 的 public 类，继承 SiegeLordsHallFightModel；公开成员 8 个（方法 1、属性 7、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs。"
---
# DefaultSiegeLordsHallFightModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSiegeLordsHallFightModel : SiegeLordsHallFightModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs`

## 概述

DefaultSiegeLordsHallFightModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs。它是一个 public 类，实现/继承 SiegeLordsHallFightModel，继承链为 DefaultSiegeLordsHallFightModel → SiegeLordsHallFightModel → MBGameModel。public/protected 成员共 8 个：1 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSiegeLordsHallFightModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultSiegeLordsHallFightModel → SiegeLordsHallFightModel → MBGameModel。成员构成以属性为主（属性 7/8，方法 1/8），对外主要以状态读取接口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSiegeLordsHallFightModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AreaLostRatio` | `public override float AreaLostRatio` | 属性 |
| `AttackerDefenderTroopCountRatio` | `public override float AttackerDefenderTroopCountRatio` | 属性 |
| `DefenderMaxArcherRatio` | `public override float DefenderMaxArcherRatio` | 属性 |
| `MaxDefenderSideTroopCount` | `public override int MaxDefenderSideTroopCount` | 属性 |
| `MaxDefenderArcherCount` | `public override int MaxDefenderArcherCount` | 属性 |
| `MaxAttackerSideTroopCount` | `public override int MaxAttackerSideTroopCount` | 属性 |
| `DefenderTroopNumberForSuccessfulPullBack` | `public override int DefenderTroopNumberForSuccessfulPullBack` | 属性 |
| `GetPriorityListForLordsHallFightMission` | `public override FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 SiegeLordsHallFightModel](../SiegeLordsHallFightModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
