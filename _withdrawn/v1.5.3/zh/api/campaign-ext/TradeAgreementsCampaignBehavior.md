---
title: "TradeAgreementsCampaignBehavior"
description: "TradeAgreementsCampaignBehavior 的自动生成类参考。"
---
# TradeAgreementsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeAgreementsCampaignBehavior : CampaignBehaviorBase,ITradeAgreementsCampaignBehavior `
**Base:** CampaignBehaviorBase,ITradeAgreementsCampaignBehavior
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs

## 概述

`TradeAgreementsCampaignBehavior` 的自动生成类参考页面。声明来自 `TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### RegisterEvents
`public override void RegisterEvents() `

### OnTradeAgreementOfferedToPlayer
`public void OnTradeAgreementOfferedToPlayer(Kingdom fromKingdom) `

### SyncData
`public override void SyncData(IDataStore dataStore) `

### MakeTradeAgreement
`public void MakeTradeAgreement(Kingdom kingdom1,Kingdom kingdom2,CampaignTime duration) `

### EndTradeAgreementsOfKingdom
`public void EndTradeAgreementsOfKingdom(Kingdom kingdom) `

### EndTradeAgreement
`public void EndTradeAgreement(Kingdom kingdom1,Kingdom kingdom2) `

### HasTradeAgreement
`public bool HasTradeAgreement(Kingdom kingdom1,Kingdom kingdom2,out TradeAgreementsCampaignBehavior.TradeAgreement tradeAgreement) `

### GetTradeAgreementEndDate
`public CampaignTime GetTradeAgreementEndDate(Kingdom kingdom1,Kingdom kingdom2) `

### OnTradeGoldDistributedInKingdom
`public void OnTradeGoldDistributedInKingdom(Kingdom kingdom1,Kingdom kingdom2,Clan clan,int share) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
