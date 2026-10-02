---
title: "DefaultSettlementValueModel"
description: "DefaultSettlementValueModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 SettlementValueModel；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementValueModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementValueModel : SettlementValueModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultSettlementValueModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs。它是一个 public 类，实现/继承 SettlementValueModel，继承链为 DefaultSettlementValueModel → SettlementValueModel → MBGameModel → GameModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSettlementValueModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultSettlementValueModel → SettlementValueModel → MBGameModel → GameModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementValueModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `FindMostSuitableHomeSettlement` | `public override Settlement FindMostSuitableHomeSettlement(Clan clan)` | 方法 |
| `CalculateSettlementBaseValue` | `public override float CalculateSettlementBaseValue(Settlement settlement)` | 方法 |
| `CalculateSettlementValueForFaction` | `public override float CalculateSettlementValueForFaction(Settlement settlement, IFaction faction)` | 方法 |
| `CalculateSettlementValueForEnemyHero` | `public override float CalculateSettlementValueForEnemyHero(Settlement settlement, Hero hero)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SettlementValueModel](../SettlementValueModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
