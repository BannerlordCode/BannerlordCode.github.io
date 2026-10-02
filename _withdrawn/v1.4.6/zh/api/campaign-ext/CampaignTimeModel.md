---
title: "CampaignTimeModel"
description: "CampaignTimeModel：TaleWorlds.CampaignSystem.ComponentInterfaces 的 public 类，继承 MBGameModel<CampaignTimeModel>；公开成员 11 个（方法 0、属性 11、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# CampaignTimeModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class CampaignTimeModel : MBGameModel<CampaignTimeModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## 概述

CampaignTimeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs。它是一个 public 类（abstract），实现/继承 MBGameModel<CampaignTimeModel>，继承链为 CampaignTimeModel → MBGameModel → GameModel。public/protected 成员共 11 个：11 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：CampaignTimeModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`），命名空间 `TaleWorlds.CampaignSystem.ComponentInterfaces`，继承链 CampaignTimeModel → MBGameModel → GameModel。成员构成以属性为主（属性 11/11，方法 0/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/ComponentInterfaces/CampaignTimeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignStartTime` | `public abstract CampaignTime CampaignStartTime` | 属性 |
| `SunRise` | `public abstract int SunRise` | 属性 |
| `SunSet` | `public abstract int SunSet` | 属性 |
| `TimeTicksPerMillisecond` | `public abstract long TimeTicksPerMillisecond` | 属性 |
| `MillisecondInSecond` | `public abstract int MillisecondInSecond` | 属性 |
| `SecondsInMinute` | `public abstract int SecondsInMinute` | 属性 |
| `MinutesInHour` | `public abstract int MinutesInHour` | 属性 |
| `HoursInDay` | `public abstract int HoursInDay` | 属性 |
| `DaysInWeek` | `public abstract int DaysInWeek` | 属性 |
| `WeeksInSeason` | `public abstract int WeeksInSeason` | 属性 |
| `SeasonsInYear` | `public abstract int SeasonsInYear` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 MBGameModel](../../core-extra/MBGameModel__1/)
- [同命名空间 AgeModel](../AgeModel/)
- [同命名空间 AlleyModel](../AlleyModel/)
- [同命名空间 AllianceModel](../AllianceModel/)
- [同命名空间 ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
