---
title: "TradeAgreementsCampaignBehavior"
description: "Auto-generated class reference for TradeAgreementsCampaignBehavior."
---
# TradeAgreementsCampaignBehavior

**Namespace:** TaleWorlds.CampaignSystem.CampaignBehaviors
**Module:** TaleWorlds.CampaignSystem
**Type:** `public class TradeAgreementsCampaignBehavior : CampaignBehaviorBase,ITradeAgreementsCampaignBehavior `
**Base:** CampaignBehaviorBase, ITradeAgreementsCampaignBehavior
**Source:** TaleWorlds.CampaignSystem/CampaignBehaviors/TradeAgreementsCampaignBehavior.cs

## Overview

Auto-generated stub for `TradeAgreementsCampaignBehavior`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### RegisterEvents
`public override void RegisterEvents()`

### OnTradeAgreementOfferedToPlayer
`public void OnTradeAgreementOfferedToPlayer(Kingdom fromKingdom)`

### SyncData
`public override void SyncData(IDataStore dataStore)`

### MakeTradeAgreement
`public void MakeTradeAgreement(Kingdom kingdom1,Kingdom kingdom2,CampaignTime duration)`

### EndTradeAgreementsOfKingdom
`public void EndTradeAgreementsOfKingdom(Kingdom kingdom)`

### EndTradeAgreement
`public void EndTradeAgreement(Kingdom kingdom1,Kingdom kingdom2)`

### HasTradeAgreement
`public bool HasTradeAgreement(Kingdom kingdom1,Kingdom kingdom2,out TradeAgreementsCampaignBehavior.TradeAgreement tradeAgreement)`

### GetTradeAgreementEndDate
`public CampaignTime GetTradeAgreementEndDate(Kingdom kingdom1,Kingdom kingdom2)`

### OnTradeGoldDistributedInKingdom
`public void OnTradeGoldDistributedInKingdom(Kingdom kingdom1,Kingdom kingdom2,Clan clan,int share)`

## See Also

- [Section index](../)
