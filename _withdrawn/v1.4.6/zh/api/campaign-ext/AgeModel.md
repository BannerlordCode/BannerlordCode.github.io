---
title: "AgeModel"
description: "AgeModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<AgeModel>；公开成员 8 个（方法 1、属性 7、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AgeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AgeModel : MBGameModel<AgeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

AgeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<AgeModel>，继承链为 AgeModel → MBGameModel → GameModel。public/protected 成员共 8 个：1 方法、7 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：AgeModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 AgeModel → MBGameModel → GameModel。成员构成以属性为主（属性 7/8，方法 1/8），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/AgeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BecomeInfantAge` | `public abstract int BecomeInfantAge` | 属性 |
| `BecomeChildAge` | `public abstract int BecomeChildAge` | 属性 |
| `BecomeTeenagerAge` | `public abstract int BecomeTeenagerAge` | 属性 |
| `HeroComesOfAge` | `public abstract int HeroComesOfAge` | 属性 |
| `BecomeOldAge` | `public abstract int BecomeOldAge` | 属性 |
| `MiddleAdultHoodAge` | `public abstract int MiddleAdultHoodAge` | 属性 |
| `MaxAge` | `public abstract int MaxAge` | 属性 |
| `GetAgeLimitForLocation` | `public abstract void GetAgeLimitForLocation(CharacterObject character, out int minimumAge, out int maximumAge, string additionalTags = "");` | 方法 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
- [同命名空间 BanditDensityModel](../BanditDensityModel/)
