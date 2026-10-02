---
title: "KingdomElection"
description: "KingdomElection: a public class in TaleWorlds.CampaignSystem; 27 exposed members (20 methods, 5 properties, 0 fields). Source: TaleWorlds.CampaignSystem/Election/KingdomElection.cs."
---
# KingdomElection

**Namespace:** `TaleWorlds.CampaignSystem.Election`
**Module:** `TaleWorlds.CampaignSystem`
**Type:** `public class KingdomElection`
**File:** `TaleWorlds.CampaignSystem/Election/KingdomElection.cs`

## Overview

KingdomElection lives in the TaleWorlds.CampaignSystem module, source file TaleWorlds.CampaignSystem/Election/KingdomElection.cs. It is a public class; the inheritance chain is KingdomElection. It exposes 27 public/protected members: 20 methods, 5 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: KingdomElection is a top-level type in TaleWorlds.CampaignSystem, namespace differing from (TaleWorlds.CampaignSystem.Election) the module directory; inheritance chain KingdomElection. The surface is method-led (methods 20/27, properties 5/27), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem/Election/KingdomElection.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MBReadOnlyList` | `public MBReadOnlyList<DecisionOutcome>PossibleOutcomes` | property |
| `IsCancelled` | `public bool IsCancelled` | property |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | property |
| `IsPlayerChooser` | `public bool IsPlayerChooser` | property |
| `KingdomElection` | `public KingdomElection(KingdomDecision decision)` | constructor |
| `StartElection` | `public void StartElection()` | method |
| `GetElectionOutcomeSupport` | `public static KingdomElection.ElectionOutcomeSupport GetElectionOutcomeSupport(KingdomDecision decision, Clan sponsor)` | method |
| `SetupResultWithoutPlayerSupport` | `public void SetupResultWithoutPlayerSupport()` | method |
| `StartElectionWithoutPlayer` | `public void StartElectionWithoutPlayer()` | method |
| `GetLikelihoodForSponsor` | `public float GetLikelihoodForSponsor(Clan sponsor)` | method |
| `GetWinChanceForSponsor` | `public float GetWinChanceForSponsor(Clan sponsor)` | method |
| `GetDecisionOutcomeSupportForSponsor` | `public KingdomElection.ElectionOutcomeSupport GetDecisionOutcomeSupportForSponsor(Clan sponsor)` | method |
| `GetRelationChangeWithSponsor` | `public int GetRelationChangeWithSponsor(Hero opposerOrSupporter, Supporter.SupportWeights supportWeight, bool isOpposingSides)` | method |
| `GetChosenOutcomeText` | `public TextObject GetChosenOutcomeText()` | method |
| `DetermineOfficialSupport` | `public void DetermineOfficialSupport()` | method |
| `GetWinChanceWithPlayerSupport` | `public float GetWinChanceWithPlayerSupport(DecisionOutcome supportedOutcome, Supporter.SupportWeights supportWeight)` | method |
| `GetInfluenceCostOfOutcome` | `public int GetInfluenceCostOfOutcome(DecisionOutcome outcome, Clan supporter, Supporter.SupportWeights weight)` | method |
| `GetSecondaryEffects` | `public TextObject GetSecondaryEffects()` | method |
| `OnPlayerSupport` | `public void OnPlayerSupport(DecisionOutcome decisionOutcome, Supporter.SupportWeights supportWeight)` | method |
| `OnPlayerAbstainedAsRuler` | `public void OnPlayerAbstainedAsRuler()` | method |
| `ApplySelection` | `public void ApplySelection()` | method |
| `MBList` | `public MBList<DecisionOutcome>GetSortedDecisionOutcomes()` | method |
| `GetGeneralTitle` | `public TextObject GetGeneralTitle()` | method |
| `GetTitle` | `public TextObject GetTitle()` | method |
| `GetDescription` | `public TextObject GetDescription()` | method |
| `ElectionOutcomeSupport` | `public enum ElectionOutcomeSupport` | property |
| `ElectionOutcomeSupport` | `public enum ElectionOutcomeSupport` | nested type |

## See Also

- [↑ campaignsystem module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AcceptCallToWarAgreementDecision](../AcceptCallToWarAgreementDecision)
- [same namespace DecisionOutcome](../DecisionOutcome)
- [same namespace DeclareWarDecision](../DeclareWarDecision)
- [same namespace ExpelClanFromKingdomDecision](../ExpelClanFromKingdomDecision)
