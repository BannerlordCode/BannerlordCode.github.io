---
title: "TradeAgreementModel"
description: "TradeAgreementModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<TradeAgreementModel>; 6 exposed members (6 methods, 0 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs."
---
# TradeAgreementModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class TradeAgreementModel : MBGameModel<TradeAgreementModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs`

## Overview

TradeAgreementModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<TradeAgreementModel>; the inheritance chain is TradeAgreementModel → MBGameModel. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TradeAgreementModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain TradeAgreementModel → MBGameModel. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/TradeAgreementModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `GetProfitPerCaravanVisit` | `public abstract int GetProfitPerCaravanVisit(MobileParty mobileParty);` | method |
| `GetTradeAgreementDurationInYears` | `public abstract CampaignTime GetTradeAgreementDurationInYears(Kingdom iniatatingKingdom, Kingdom otherKingdom);` | method |
| `GetMaximumTradeAgreementCount` | `public abstract int GetMaximumTradeAgreementCount(Kingdom kingdom);` | method |
| `GetInfluenceCostOfProposingTradeAgreement` | `public abstract int GetInfluenceCostOfProposingTradeAgreement(Clan clan);` | method |
| `GetScoreOfStartingTradeAgreement` | `public abstract float GetScoreOfStartingTradeAgreement(Kingdom kingdom, Kingdom targetKingdom, Clan clan, out TextObject explanation, bool includeExplanation = false);` | method |
| `CanMakeTradeAgreement` | `public abstract bool CanMakeTradeAgreement(Kingdom kingdom, Kingdom other, bool checkOtherSideTradeSupport, out TextObject reason, bool includeReason = false);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace AllianceModel](../AllianceModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
