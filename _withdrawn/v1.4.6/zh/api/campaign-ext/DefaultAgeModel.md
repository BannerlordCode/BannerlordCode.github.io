---
title: "DefaultAgeModel"
description: "DefaultAgeModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 AgeModel；公开成员 21 个（方法 1、属性 7、字段 13）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultAgeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAgeModel : AgeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultAgeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs。它是一个 public 类，实现/继承 AgeModel，继承链为 DefaultAgeModel → AgeModel → MBGameModel → GameModel。public/protected 成员共 21 个：1 方法、7 属性、13 字段。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultAgeModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultAgeModel → AgeModel → MBGameModel → GameModel。成员构成以属性为主（属性 7/21，方法 1/21），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultAgeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BecomeInfantAge` | `public override int BecomeInfantAge` | 属性 |
| `BecomeChildAge` | `public override int BecomeChildAge` | 属性 |
| `BecomeTeenagerAge` | `public override int BecomeTeenagerAge` | 属性 |
| `HeroComesOfAge` | `public override int HeroComesOfAge` | 属性 |
| `MiddleAdultHoodAge` | `public override int MiddleAdultHoodAge` | 属性 |
| `BecomeOldAge` | `public override int BecomeOldAge` | 属性 |
| `MaxAge` | `public override int MaxAge` | 属性 |
| `GetAgeLimitForLocation` | `public override void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "")` | 方法 |
| `TavernVisitorTag` | `public const string TavernVisitorTag` | 字段 |
| `TavernDrinkerTag` | `public const string TavernDrinkerTag` | 字段 |
| `SlowTownsmanTag` | `public const string SlowTownsmanTag` | 字段 |
| `TownsfolkCarryingStuffTag` | `public const string TownsfolkCarryingStuffTag` | 字段 |
| `BroomsWomanTag` | `public const string BroomsWomanTag` | 字段 |
| `DancerTag` | `public const string DancerTag` | 字段 |
| `BeggarTag` | `public const string BeggarTag` | 字段 |
| `ChildTag` | `public const string ChildTag` | 字段 |
| `TeenagerTag` | `public const string TeenagerTag` | 字段 |
| `InfantTag` | `public const string InfantTag` | 字段 |
| `NotaryTag` | `public const string NotaryTag` | 字段 |
| `BarberTag` | `public const string BarberTag` | 字段 |
| `AlleyGangMemberTag` | `public const string AlleyGangMemberTag` | 字段 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 AgeModel](../AgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
- [同命名空间 DefaultBanditDensityModel](../DefaultBanditDensityModel/)
