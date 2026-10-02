---
title: "DefaultPregnancyModel"
description: "DefaultPregnancyModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 PregnancyModel；公开成员 6 个（方法 1、属性 5、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultPregnancyModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultPregnancyModel : PregnancyModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultPregnancyModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs。它是一个 public 类，实现/继承 PregnancyModel，继承链为 DefaultPregnancyModel → PregnancyModel → MBGameModel → GameModel。public/protected 成员共 6 个：1 方法、5 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultPregnancyModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultPregnancyModel → PregnancyModel → MBGameModel → GameModel。成员构成以属性为主（属性 5/6，方法 1/6），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultPregnancyModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PregnancyDurationInDays` | `public override float PregnancyDurationInDays` | 属性 |
| `MaternalMortalityProbabilityInLabor` | `public override float MaternalMortalityProbabilityInLabor` | 属性 |
| `StillbirthProbability` | `public override float StillbirthProbability` | 属性 |
| `DeliveringFemaleOffspringProbability` | `public override float DeliveringFemaleOffspringProbability` | 属性 |
| `DeliveringTwinsProbability` | `public override float DeliveringTwinsProbability` | 属性 |
| `GetDailyChanceOfPregnancyForHero` | `public override float GetDailyChanceOfPregnancyForHero(Hero hero)` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 PregnancyModel](../PregnancyModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
