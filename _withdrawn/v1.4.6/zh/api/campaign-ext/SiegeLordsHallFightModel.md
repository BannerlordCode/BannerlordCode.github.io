---
title: "SiegeLordsHallFightModel"
description: "SiegeLordsHallFightModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<SiegeLordsHallFightModel>；公开成员 8 个（方法 1、属性 7、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SiegeLordsHallFightModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class SiegeLordsHallFightModel : MBGameModel<SiegeLordsHallFightModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

SiegeLordsHallFightModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<SiegeLordsHallFightModel>，继承链为 SiegeLordsHallFightModel → MBGameModel → GameModel。public/protected 成员共 8 个：1 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：SiegeLordsHallFightModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 SiegeLordsHallFightModel → MBGameModel → GameModel。成员构成以属性为主（属性 7/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/SiegeLordsHallFightModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AreaLostRatio` | `public abstract float AreaLostRatio` | 属性 |
| `AttackerDefenderTroopCountRatio` | `public abstract float AttackerDefenderTroopCountRatio` | 属性 |
| `DefenderTroopNumberForSuccessfulPullBack` | `public abstract int DefenderTroopNumberForSuccessfulPullBack` | 属性 |
| `DefenderMaxArcherRatio` | `public abstract float DefenderMaxArcherRatio` | 属性 |
| `MaxDefenderSideTroopCount` | `public abstract int MaxDefenderSideTroopCount` | 属性 |
| `MaxDefenderArcherCount` | `public abstract int MaxDefenderArcherCount` | 属性 |
| `MaxAttackerSideTroopCount` | `public abstract int MaxAttackerSideTroopCount` | 属性 |
| `GetPriorityListForLordsHallFightMission` | `public abstract FlattenedTroopRoster GetPriorityListForLordsHallFightMission(MapEvent playerMapEvent, BattleSideEnum side, int troopCount);` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
