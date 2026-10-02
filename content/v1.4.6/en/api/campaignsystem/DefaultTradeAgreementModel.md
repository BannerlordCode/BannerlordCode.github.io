---
title: "DefaultTradeAgreementModel"
description: "DefaultTradeAgreementModel: a public class in TaleWorlds.CampaignSystem, inheriting TradeAgreementModel; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs."
---
# DefaultTradeAgreementModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultTradeAgreementModel : TradeAgreementModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs`

## Overview

DefaultTradeAgreementModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs. It is a public class, implementing/inheriting TradeAgreementModel; the inheritance chain is DefaultTradeAgreementModel → TradeAgreementModel → MBGameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultTradeAgreementModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultTradeAgreementModel → TradeAgreementModel → MBGameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultTradeAgreementModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetInfluenceCostOfProposingTradeAgreement` | `public override int GetInfluenceCostOfProposingTradeAgreement(Clan proposerClan)` | method |
| `GetMaximumTradeAgreementCount` | `public override int GetMaximumTradeAgreementCount(Kingdom kingdom)` | method |
| `CanMakeTradeAgreement` | `public override bool CanMakeTradeAgreement(Kingdom querierKingdom, Kingdom queriedKingdom, bool checkOtherSideSupport, out TextObject reason, bool includeReason = false)` | method |
| `GetScoreOfStartingTradeAgreement` | `public override float GetScoreOfStartingTradeAgreement(Kingdom querierKingdom, Kingdom queriedKingdom, Clan clan, out TextObject detailedBreakdownTooltip, bool includeExplanation = false)` | method |
| `GetTradeAgreementDurationInYears` | `public override CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom)` | method |
| `GetProfitPerCaravanVisit` | `public override int GetProfitPerCaravanVisit(MobileParty mobileParty)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface TradeAgreementModel](../TradeAgreementModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultAllianceModel](../DefaultAllianceModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
