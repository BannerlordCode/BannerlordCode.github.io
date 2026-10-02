---
title: "AllianceModel"
description: "AllianceModel: a public class in TaleWorlds.CampaignSystem.ComponentInterfaces, inheriting MBGameModel<AllianceModel>; 15 exposed members (11 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# AllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.ComponentInterfaces`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public abstract class AllianceModel : MBGameModel<AllianceModel>`
**File:** `TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.ComponentInterfaces)

## Overview

AllianceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs. It is a public class (abstract), implementing/inheriting MBGameModel<AllianceModel>; the inheritance chain is AllianceModel → MBGameModel → GameModel. It exposes 15 public/protected members: 11 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AllianceModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.ComponentInterfaces`), namespace `TaleWorlds.CampaignSystem.ComponentInterfaces`, inheritance chain AllianceModel → MBGameModel → GameModel. The surface is method-led (methods 11/15, properties 4/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/ComponentInterfaces/AllianceModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MBGameModel](../../core-extra/MBGameModel__1/)
- [same namespace AgeModel](../AgeModel/)
- [same namespace AlleyModel](../AlleyModel/)
- [same namespace ArmyManagementCalculationModel](../ArmyManagementCalculationModel/)
- [same namespace BanditDensityModel](../BanditDensityModel/)
