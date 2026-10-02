---
title: "DefaultCampaignTimeModel"
description: "DefaultCampaignTimeModel：TaleWorlds.CampaignSystem.GameComponents 的 public 类，继承 CampaignTimeModel；公开成员 11 个（方法 0、属性 11、字段 0）。canonical 桶 campaign-ext。源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs。"
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultCampaignTimeModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultCampaignTimeModel : CampaignTimeModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## 概述

DefaultCampaignTimeModel 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs。它是一个 public 类，实现/继承 CampaignTimeModel，继承链为 DefaultCampaignTimeModel → CampaignTimeModel → MBGameModel → GameModel。public/protected 成员共 11 个：11 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。桶归属由 `tools/_dir-map-canonical.json` 现算。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：DefaultCampaignTimeModel 落在 canonical 桶 `campaign-ext`（命中规则 `rule:TaleWorlds.CampaignSystem.GameComponents`），命名空间 `TaleWorlds.CampaignSystem.GameComponents`，继承链 DefaultCampaignTimeModel → CampaignTimeModel → MBGameModel → GameModel。成员构成以属性为主（属性 11/11，方法 0/11），对外主要以状态读取接口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/GameComponents/DefaultCampaignTimeModel.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CampaignStartTime` | `public override CampaignTime CampaignStartTime` | 属性 |
| `SunRise` | `public override int SunRise` | 属性 |
| `SunSet` | `public override int SunSet` | 属性 |
| `TimeTicksPerMillisecond` | `public override long TimeTicksPerMillisecond` | 属性 |
| `MillisecondInSecond` | `public override int MillisecondInSecond` | 属性 |
| `SecondsInMinute` | `public override int SecondsInMinute` | 属性 |
| `MinutesInHour` | `public override int MinutesInHour` | 属性 |
| `HoursInDay` | `public override int HoursInDay` | 属性 |
| `DaysInWeek` | `public override int DaysInWeek` | 属性 |
| `WeeksInSeason` | `public override int WeeksInSeason` | 属性 |
| `SeasonsInYear` | `public override int SeasonsInYear` | 属性 |

## 参见

- [↑ 本桶目录](..//)
- [↑ API 参考](../..//)
- [↑ 版本首页](../../..//)
- [基类/接口 CampaignTimeModel](../CampaignTimeModel/)
- [同命名空间 DefaultAgeModel](../DefaultAgeModel/)
- [同命名空间 DefaultAlleyModel](../DefaultAlleyModel/)
- [同命名空间 DefaultAllianceModel](../DefaultAllianceModel/)
- [同命名空间 DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
