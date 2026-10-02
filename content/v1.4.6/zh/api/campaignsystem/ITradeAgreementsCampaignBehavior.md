---
title: "ITradeAgreementsCampaignBehavior"
description: "ITradeAgreementsCampaignBehavior：TaleWorlds.CampaignSystem 的 public 接口；公开成员 6 个（方法 6、属性 0、字段 0）。源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs。"
---
# ITradeAgreementsCampaignBehavior

**Namespace:** `TaleWorlds.CampaignSystem.CampaignBehaviors`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public interface ITradeAgreementsCampaignBehavior`
**File:** `TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs`

## 概述

ITradeAgreementsCampaignBehavior 位于 TaleWorlds.CampaignSystem 模块，源文件 TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs。它是一个 public 接口，继承链为 ITradeAgreementsCampaignBehavior。public/protected 成员共 6 个：6 方法。

> 本页为批量初稿：签名逐条取自 bannerlord-1.4.6 反编译源码，未经改写。每个方法实际做什么、何时调用、有什么风险，请对照源文件方法体阅读。

## 心智模型

结构事实：ITradeAgreementsCampaignBehavior 是 TaleWorlds.CampaignSystem 的顶层类型，命名空间与模块目录不同（TaleWorlds.CampaignSystem.CampaignBehaviors），继承链 ITradeAgreementsCampaignBehavior。成员构成以方法为主（方法 6/6，属性 0/6），对外主要以操作入口暴露。本页只列真实签名：每个方法做什么用、何时调用、有哪些坑，需要对照 TaleWorlds.CampaignSystem/CampaignBehaviors/ITradeAgreementsCampaignBehavior.cs 的方法体或该类型的深写页确认。

## 主要成员

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MakeTradeAgreement` | `void MakeTradeAgreement(Kingdom kingdom1, Kingdom kingdom2, CampaignTime duration);` | 方法 |
| `HasTradeAgreement` | `bool HasTradeAgreement(Kingdom kingdom, Kingdom other, out TradeAgreementsCampaignBehavior.TradeAgreement tradeAgreement);` | 方法 |
| `EndTradeAgreement` | `void EndTradeAgreement(Kingdom kingdom, Kingdom other);` | 方法 |
| `OnTradeAgreementOfferedToPlayer` | `void OnTradeAgreementOfferedToPlayer(Kingdom fromKingdom);` | 方法 |
| `GetTradeAgreementEndDate` | `CampaignTime GetTradeAgreementEndDate(Kingdom kingdom, Kingdom other);` | 方法 |
| `OnTradeGoldDistributedInKingdom` | `void OnTradeGoldDistributedInKingdom(Kingdom kingdom1, Kingdom kingdom2, Clan clan, int share);` | 方法 |

## 参见

- [↑ campaignsystem 模块目录](../)
- [↑ API 参考](../../)
- [↑ 版本首页](../../../)
- [同命名空间 AgingCampaignBehavior](../AgingCampaignBehavior)
- [同命名空间 AllianceCampaignBehavior](../AllianceCampaignBehavior)
- [同命名空间 BackstoryCampaignBehavior](../BackstoryCampaignBehavior)
- [同命名空间 BanditInteractionsCampaignBehavior](../BanditInteractionsCampaignBehavior)
