---
title: "DefaultAllianceModel"
description: "DefaultAllianceModel: a public class in TaleWorlds.CampaignSystem.GameComponents, inheriting AllianceModel; 15 exposed members (11 methods, 4 properties, 0 fields). Canonical bucket campaign-ext. Source: TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DefaultAllianceModel

**Namespace:** `TaleWorlds.CampaignSystem.GameComponents`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class DefaultAllianceModel : AllianceModel`
**File:** `TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs`
**Bucket:** `campaign-ext` (rule:TaleWorlds.CampaignSystem.GameComponents)

## Overview

DefaultAllianceModel lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs. It is a public class, implementing/inheriting AllianceModel; the inheritance chain is DefaultAllianceModel → AllianceModel → MBGameModel → GameModel. It exposes 15 public/protected members: 11 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DefaultAllianceModel lands in canonical bucket `campaign-ext` (matched rule `rule:TaleWorlds.CampaignSystem.GameComponents`), namespace `TaleWorlds.CampaignSystem.GameComponents`, inheritance chain DefaultAllianceModel → AllianceModel → MBGameModel → GameModel. The surface is method-led (methods 11/15, properties 4/15), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/GameComponents/DefaultAllianceModel.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface AllianceModel](../AllianceModel/)
- [same namespace DefaultAgeModel](../DefaultAgeModel/)
- [same namespace DefaultAlleyModel](../DefaultAlleyModel/)
- [same namespace DefaultArmyManagementCalculationModel](../DefaultArmyManagementCalculationModel/)
- [same namespace DefaultBanditDensityModel](../DefaultBanditDensityModel/)
