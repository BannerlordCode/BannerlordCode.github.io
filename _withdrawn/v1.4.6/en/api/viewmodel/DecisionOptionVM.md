---
title: "DecisionOptionVM"
description: "DecisionOptionVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions, inheriting ViewModel; 29 exposed members (2 methods, 26 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DecisionOptionVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class DecisionOptionVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

DecisionOptionVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is DecisionOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 29 public/protected members: 2 methods, 26 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DecisionOptionVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions`, inheritance chain DecisionOptionVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 26/29, methods 2/29), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/DecisionOptionVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Option` | `public DecisionOutcome Option` | property |
| `Decision` | `public KingdomDecision Decision` | property |
| `DecisionOptionVM` | `public DecisionOptionVM(DecisionOutcome option, KingdomDecision decision, KingdomElection kingdomDecisionMaker, Action<DecisionOptionVM>onSelect, Action<DecisionOptionVM>onSupportStrengthChange)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `AfterKingChooseOutcome` | `public void AfterKingChooseOutcome()` | method |
| `OptionHint` | `public HintViewModel OptionHint` | property |
| `MBBindingList` | `public MBBindingList<DecisionSupporterVM>SupportersOfThisOption` | property |
| `Sponsor` | `public HeroVM Sponsor` | property |
| `Name` | `public string Name` | property |
| `SponsorWeightImagePath` | `public string SponsorWeightImagePath` | property |
| `CanBeChosen` | `public bool CanBeChosen` | property |
| `IsKingsOutcome` | `public bool IsKingsOutcome` | property |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | property |
| `IsHighlightEnabled` | `public bool IsHighlightEnabled` | property |
| `WinPercentage` | `public int WinPercentage` | property |
| `WinPercentageStr` | `public string WinPercentageStr` | property |
| `Description` | `public string Description` | property |
| `InitialPercentage` | `public int InitialPercentage` | property |
| `InfluenceCost` | `public int InfluenceCost` | property |
| `IsSelected` | `public bool IsSelected` | property |
| `IsOptionForAbstain` | `public bool IsOptionForAbstain` | property |
| `CurrentSupportWeight` | `public Supporter.SupportWeights CurrentSupportWeight` | property |
| `CurrentSupportWeightIndex` | `public int CurrentSupportWeightIndex` | property |
| `SupportOption1Text` | `public string SupportOption1Text` | property |
| `SupportOption2Text` | `public string SupportOption2Text` | property |
| `SupportOption3Text` | `public string SupportOption3Text` | property |
| `IsSupportOption1Enabled` | `public bool IsSupportOption1Enabled` | property |
| `IsSupportOption2Enabled` | `public bool IsSupportOption2Enabled` | property |
| `IsSupportOption3Enabled` | `public bool IsSupportOption3Enabled` | property |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace DecisionSupporterVM](../DecisionSupporterVM/)
- [same namespace KingdomDecisionsVM](../KingdomDecisionsVM/)
- [same namespace PlayerSelectedAKingdomDecisionOptionEvent](../PlayerSelectedAKingdomDecisionOptionEvent/)
