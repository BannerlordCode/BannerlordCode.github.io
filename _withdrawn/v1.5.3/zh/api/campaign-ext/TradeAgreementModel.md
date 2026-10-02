---
title: "TradeAgreementModel"
description: "TradeAgreementModel 的自动生成类参考。"
---
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel> `
**Base:** MBGameModel<TradeAgreementModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs

## 概述

`TradeAgreementModel` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### GetProfitPerCaravanVisit
`public abstract int GetProfitPerCaravanVisit(MobileParty mobileParty)`

### GetTradeAgreementDurationInYears
`public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom,Kingdom otherKingdom)`

### GetMaximumTradeAgreementCount
`public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom)`

### GetInfluenceCostOfProposingTradeAgreement
`public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan)`

### GetScoreOfStartingTradeAgreement
`public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom,Kingdom targetKingdom,Clan clan,out TextObject explanation,bool includeExplanation = false)`

### CanMakeTradeAgreement
`public abstract bool CanMakeTradeAgreement(Kingdom kingdom,Kingdom other,bool checkOtherSideTradeSupport,out TextObject reason,bool includeReason = false)`

## 参见

- [本区域目录](../)
- [API 参考](../../)
