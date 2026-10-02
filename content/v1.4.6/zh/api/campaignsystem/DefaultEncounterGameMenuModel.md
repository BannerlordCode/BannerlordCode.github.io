---
title: "DefaultEncounterGameMenuModel"
description: "DefaultEncounterGameMenuModel：TaleWorlds.CampaignSystem 的 public 类，继承 EncounterGameMenuModel；公开成员 5 个（方法 5、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs。"
---
# DefaultEncounterGameMenuModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultEncounterGameMenuModel : EncounterGameMenuModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs`

## 概述

DefaultEncounterGameMenuModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs。它是一个 public 类，实现/继承 EncounterGameMenuModel，继承链为 DefaultEncounterGameMenuModel → EncounterGameMenuModel → MBGameModel。public/protected 成员共 5 个：5 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultEncounterGameMenuModel 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.GameComponents），继承链 DefaultEncounterGameMenuModel → EncounterGameMenuModel → MBGameModel。成员构成以方法为主（方法 5/5，属性 0/5），对外主要以操作入口暴露。继承链上的 MBGameModel 不在本模块内，说明该类型把一部分行为交给跨模块基类。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultEncounterGameMenuModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetEncounterMenu` | `public override string GetEncounterMenu(PartyBase attackerParty, PartyBase defenderParty, out bool startBattle, out bool joinBattle)` | 方法 |
| `GetRaidCompleteMenu` | `public override string GetRaidCompleteMenu()` | 方法 |
| `GetNewPartyJoinMenu` | `public override string GetNewPartyJoinMenu(MobileParty newParty)` | 方法 |
| `GetGenericStateMenu` | `public override string GetGenericStateMenu()` | 方法 |
| `IsPlunderMenu` | `public override bool IsPlunderMenu(string gameMenuId)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 EncounterGameMenuModel](../EncounterGameMenuModel)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
