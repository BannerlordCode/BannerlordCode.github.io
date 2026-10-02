---
title: "DefaultAllianceModel"
description: "DefaultAllianceModel: a public class in TaleWorlds.CampaignSystem, inheriting AllianceModel; 15 exposed members (11 methods, 4 properties, 0 fields). Source: TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs."
---
# DefaultAllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAllianceModel : AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`

## Overview

DefaultAllianceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs. It is a public class, implementing/inheriting AllianceModel; the inheritance chain is DefaultAllianceModel → AllianceModel → MBGameModel. It exposes 15 public/protected members: 11 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultAllianceModel is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.GameComponents) the module directory; inheritance chain DefaultAllianceModel → AllianceModel → MBGameModel. The surface is method-led (methods 11/15, properties 4/15), so it mostly exposes operations. MBGameModel on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxDurationOfAlliance` | `public override CampaignTime MaxDurationOfAlliance` | property |
| `MaxDurationOfWarParticipation` | `public override CampaignTime MaxDurationOfWarParticipation` | property |
| `MaxNumberOfAlliances` | `public override int MaxNumberOfAlliances` | property |
| `DurationForOffers` | `public override CampaignTime DurationForOffers` | property |
| `GetCallToWarCost` | `public override int GetCallToWarCost(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst)` | method |
| `GetScoreOfStartingAlliance` | `public override ExplainedNumber GetScoreOfStartingAlliance(Kingdom querierKingdom, Kingdom queriedKingdom, out TextObject explanationText, bool includeDescription = false)` | method |
| `GetSupportScoreOfStartingAllianceForClan` | `public override float GetSupportScoreOfStartingAllianceForClan(Kingdom querierKingdom, Kingdom queriedKingdom, Clan evaluatingClan, out TextObject explanationText, bool includeDescriptions = false)` | method |
| `CanMakeAlliance` | `public override bool CanMakeAlliance(Kingdom kingdom, Kingdom targetKingdom, IFaction evaluatingFaction, out TextObject reason, bool includeReason = false)` | method |
| `GetInfluenceCostOfProposingStartingAlliance` | `public override int GetInfluenceCostOfProposingStartingAlliance(Clan proposingClan)` | method |
| `GetScoreOfCallingToWar` | `public override float GetScoreOfCallingToWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | method |
| `GetScoreOfJoiningWar` | `public override float GetScoreOfJoiningWar(Kingdom callingKingdom, Kingdom calledKingdom, Kingdom kingdomToCallToWarAgainst, IFaction evaluatingFaction, out TextObject reason)` | method |
| `GetInfluenceCostOfCallingToWar` | `public override int GetInfluenceCostOfCallingToWar(Clan proposingClan)` | method |
| `GetAllianceFactorForDeclaringWar` | `public override float GetAllianceFactorForDeclaringWar(IFaction factionDeclaresWar, IFaction factionDeclaredWar)` | method |
| `GetAllianceFactorForDeclaringPeace` | `public override float GetAllianceFactorForDeclaringPeace(IFaction factionDeclaresPeace, IFaction factionDeclaredPeace)` | method |
| `GetProposerClanForAllianceDecision` | `public override Clan GetProposerClanForAllianceDecision(Kingdom proposerKingdom, Kingdom proposedKingdom)` | method |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface AllianceModel](../AllianceModel)
- [same namespace DefaultAgeModel](../DefaultAgeModel)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel)
- [same namespace DefaultBanditDensityModel](../DefaultBanditDensityModel)
