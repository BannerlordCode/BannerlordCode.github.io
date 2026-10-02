---
title: "TradeRumorsCampaignBehavior"
description: "TradeRumorsCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、ITradeRumorCampaignBehavior；公开成员 9 个（方法 8、属性 1、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeRumorsCampaignBehavior.cs。"
---
# TradeRumorsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TradeRumorsCampaignBehavior : CampaignBehaviorBase, ITradeRumorCampaignBehavior, ICampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeRumorsCampaignBehavior.cs`

## 概述

TradeRumorsCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeRumorsCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、ITradeRumorCampaignBehavior、ICampaignBehavior，继承链为 TradeRumorsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 9 个：8 方法、1 属性。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TradeRumorsCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 TradeRumorsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 8/9，属性 1/9），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeRumorsCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `IEnumerable` | `public IEnumerable<TradeRumor>TradeRumors` | 属性 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `OnTradeRumorIsTaken` | `public void OnTradeRumorIsTaken(List<TradeRumor>newRumors, Settlement sourceSettlement = null)` | 方法 |
| `AddTradeRumors` | `public void AddTradeRumors(List<TradeRumor>newRumors, Settlement sourceSettlement = null)` | 方法 |
| `DailyTick` | `public void DailyTick()` | 方法 |
| `OnSettlementEntered` | `public void OnSettlementEntered(MobileParty mobileParty, Settlement settlement, Hero hero)` | 方法 |
| `DeleteExpiredRumors` | `public void DeleteExpiredRumors()` | 方法 |
| `AddDailyTradeRumors` | `public void AddDailyTradeRumors(int numberOfTradeRumors)` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ITradeRumorCampaignBehavior](../ITradeRumorCampaignBehavior)
- [基类/接口 ICampaignBehavior](../ICampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
