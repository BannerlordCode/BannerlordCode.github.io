---
title: "DefaultSettlementMilitiaModel"
description: "DefaultSettlementMilitiaModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 SettlementMilitiaModel；公开成员 4 个（方法 4、属性 0、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultSettlementMilitiaModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultSettlementMilitiaModel : SettlementMilitiaModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultSettlementMilitiaModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs。它是一个 public 类，实现/继承 SettlementMilitiaModel，继承链为 DefaultSettlementMilitiaModel → SettlementMilitiaModel → MBGameModel → GameModel。public/protected 成员共 4 个：4 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultSettlementMilitiaModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultSettlementMilitiaModel → SettlementMilitiaModel → MBGameModel → GameModel。成员构成以方法为主（方法 4/4，属性 0/4），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultSettlementMilitiaModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MilitiaToSpawnAfterSiege` | `public override int MilitiaToSpawnAfterSiege(Town town)` | 方法 |
| `CalculateMilitiaChange` | `public override ExplainedNumber CalculateMilitiaChange(Settlement settlement, bool includeDescriptions = false)` | 方法 |
| `CalculateVeteranMilitiaSpawnChance` | `public override ExplainedNumber CalculateVeteranMilitiaSpawnChance(Settlement settlement)` | 方法 |
| `CalculateMilitiaSpawnRate` | `public override void CalculateMilitiaSpawnRate(Settlement settlement, out float meleeTroopRate, out float rangedTroopRate)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 SettlementMilitiaModel](../SettlementMilitiaModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
