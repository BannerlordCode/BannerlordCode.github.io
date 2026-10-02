---
title: "AllianceModel"
description: "AllianceModel: a public class in TaleWorlds.CampaignSystem, inheriting MBGameModel<AllianceModel>; 15 exposed members (11 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs."
---
# AllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs`

## Overview

AllianceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AllianceModel>; the inheritance chain is AllianceModel → MBGameModel. It exposes 15 public/protected members: 11 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AllianceModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.ComponentInterfaces) the module directory; inheritance chain AllianceModel → MBGameModel. The surface is method-led (methods 11/15, properties 4/15), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxDurationOfAlliance` | `public abstract CampaignTime MaxDurationOfAlliance` | property |
| `MaxDurationOfWarParticipation` | `public abstract CampaignTime MaxDurationOfWarParticipation` | property |
| `MaxNumberOfAlliances` | `public abstract int MaxNumberOfAlliances` | property |
| `DurationForOffers` | `public abstract CampaignTime DurationForOffers` | property |
| `GetCallToWarCost` | `public abstract int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst);` | method |
| `GetScoreOfStartingAlliance` | `public abstract ExplainedNumber GetScoreOfStartingAlliance(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, out TextObject explanation, bool includeDescription = false);` | method |
| `GetSupportScoreOfStartingAllianceForClan` | `public abstract float GetSupportScoreOfStartingAllianceForClan(Kingdom kingdomDeclaresAlliance, Kingdom kingdomDeclaredAlliance, Clan evaluatingClan, out TextObject explanation, bool includeDescription = false);` | method |
| `GetScoreOfCallingToWar` | `public abstract float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason);` | method |
| `GetScoreOfJoiningWar` | `public abstract float GetScoreOfJoiningWar(Kingdom offeringKingdom, Kingdom kingdomToOfferToJoinWarWith, Kingdom kingdomToOfferToJoinWarAgainst, IFaction evaluatingFaction, out TextObject reason);` | method |
| `GetInfluenceCostOfProposingStartingAlliance` | `public abstract int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan);` | method |
| `GetInfluenceCostOfCallingToWar` | `public abstract int GetInfluenceCostOfCallingToWar(Clan proposingClan);` | method |
| `CanMakeAlliance` | `public abstract bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false);` | method |
| `GetAllianceFactorForDeclaringWar` | `public abstract float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar);` | method |
| `GetAllianceFactorForDeclaringPeace` | `public abstract float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace);` | method |
| `GetProposerClanForAllianceDecision` | `public abstract Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom);` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgeModel](../AgeModel)
- [same namespace AlleyModel](../AlleyModel)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel)
- [same namespace BanditDensityModel](../BanditDensityModel)
