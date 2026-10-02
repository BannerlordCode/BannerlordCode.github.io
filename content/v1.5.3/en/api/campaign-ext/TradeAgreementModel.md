---
title: "TradeAgreementModel"
description: "Auto-generated class reference for TradeAgreementModel."
---
# TradeAgreementModel

**Namespace:** TaleWorlds.CampaignSystem.ComponentInterfaces
**Module:** TaleWorlds.CampaignSystem
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel> `
**Base:** MBGameModel<TradeAgreementModel>
**Source:** TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs

## Overview

Auto-generated stub for `TradeAgreementModel`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

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

## See Also

- [Section index](../)
