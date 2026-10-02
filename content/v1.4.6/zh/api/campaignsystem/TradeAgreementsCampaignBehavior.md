---
title: "TradeAgreementsCampaignBehavior"
description: "TradeAgreementsCampaignBehavior：TaleWorlds.CampaignSystem 的 public 类，继承 CampaignBehaviorBase、ITradeAgreementsCampaignBehavior；公开成员 13 个（方法 9、属性 2、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs。"
---
# TradeAgreementsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class TradeAgreementsCampaignBehavior : CampaignBehaviorBase, ITradeAgreementsCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs`

## 概述

TradeAgreementsCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs。它是一个 public 类，实现/继承 CampaignBehaviorBase、ITradeAgreementsCampaignBehavior，继承链为 TradeAgreementsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。public/protected 成员共 13 个：9 方法、2 属性、2 嵌套类型。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：TradeAgreementsCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 TradeAgreementsCampaignBehavior → CampaignBehaviorBase → ICampaignBehavior。成员构成以方法为主（方法 9/13，属性 2/13），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `RegisterEvents` | `public override void RegisterEvents()` | 方法 |
| `OnTradeAgreementOfferedToPlayer` | `public void OnTradeAgreementOfferedToPlayer(Kingdom fromKingdom)` | 方法 |
| `SyncData` | `public override void SyncData(IDataStore dataStore)` | 方法 |
| `MakeTradeAgreement` | `public void MakeTradeAgreement(Kingdom kingdom1, Kingdom kingdom2, CampaignTime duration)` | 方法 |
| `EndTradeAgreementsOfKingdom` | `public void EndTradeAgreementsOfKingdom(Kingdom kingdom)` | 方法 |
| `EndTradeAgreement` | `public void EndTradeAgreement(Kingdom kingdom1, Kingdom kingdom2)` | 方法 |
| `HasTradeAgreement` | `public bool HasTradeAgreement(Kingdom kingdom1, Kingdom kingdom2, out TradeAgreementsCampaignBehavior.TradeAgreement tradeAgreement)` | 方法 |
| `GetTradeAgreementEndDate` | `public CampaignTime GetTradeAgreementEndDate(Kingdom kingdom1, Kingdom kingdom2)` | 方法 |
| `OnTradeGoldDistributedInKingdom` | `public void OnTradeGoldDistributedInKingdom(Kingdom kingdom1, Kingdom kingdom2, Clan clan, int share)` | 方法 |
| `SaveableTypeDefiner` | `public class TradeAgreementsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 属性 |
| `TradeAgreement` | `public struct TradeAgreement` | 属性 |
| `SaveableTypeDefiner` | `public class TradeAgreementsCampaignBehaviorTypeDefiner : SaveableTypeDefiner` | 嵌套类型 |
| `TradeAgreement` | `public struct TradeAgreement` | 嵌套类型 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [基类/接口 ITradeAgreementsCampaignBehavior](../ITradeAgreementsCampaignBehavior)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
