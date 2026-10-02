---
title: "TradeCampaignBehavior"
description: "TradeCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase；公开成员 8 个（方法 4、属性 1、字段 2）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs。"
---
# TradeCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TradeCampaignBehavior : CampaignBehaviorBase`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs`

## 概述

TradeCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase，继承链为 TradeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 8 个：4 方法、1 属性、2 字段、1 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TradeCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 TradeCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 4/8，属性 1/8），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OnNewGameCreated` | `public void OnNewGameCreated(CampaignGameStarter campaignGameStarter)` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `DailyTickTown` | `public void DailyTickTown(Town town)` | 方法 |
| `MaximumTaxRatioForVillages` | `public const float MaximumTaxRatioForVillages` | 字段 |
| `MaximumTaxRatioForTowns` | `public const float MaximumTaxRatioForTowns` | 字段 |
| `TradeGoodType` | `public enum TradeGoodType` | 属性 |
| `TradeGoodType` | `public enum TradeGoodType` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
