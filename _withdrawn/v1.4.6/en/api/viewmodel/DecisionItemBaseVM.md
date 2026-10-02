---
title: "DecisionItemBaseVM"
description: "DecisionItemBaseVM: a public class in TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes, inheriting ViewModel; 28 exposed members (9 methods, 17 properties, 0 fields). Canonical bucket viewmodel. Source: TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# DecisionItemBaseVM

**Namespace:** `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`
**Module:** `TaleWorlds.CampaignSystem.ViewModelCollection`
**Type:** `public class DecisionItemBaseVM : ViewModel`
**File:** `TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs`
**Bucket:** `viewmodel` (rule:TaleWorlds.CampaignSystem.ViewModelCollection)

## Overview

DecisionItemBaseVM lives in the TaleWorlds.CampaignSystem.ViewModelCollection module, source file TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs. It is a public class, implementing/inheriting ViewModel; the inheritance chain is DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. It exposes 28 public/protected members: 9 methods, 17 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DecisionItemBaseVM lands in canonical bucket `viewmodel` (matched rule `rule:TaleWorlds.CampaignSystem.ViewModelCollection`), namespace `TaleWorlds.CampaignSystem.ViewModelCollection.KingdomManagement.Decisions.ItemTypes`, inheritance chain DecisionItemBaseVM → ViewModel → IViewModel → INotifyPropertyChanged. The surface is property-led (properties 17/28, methods 9/28), so it mostly exposes state for reading. INotifyPropertyChanged on the chain live outside this bucket, so part of the behaviour is delegated to a cross-bucket base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.CampaignSystem.ViewModelCollection/TaleWorlds/CampaignSystem/ViewModelCollection/KingdomManagement/Decisions/ItemTypes/DecisionItemBaseVM.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `KingdomDecisionMaker` | `public KingdomElection KingdomDecisionMaker` | property |
| `DecisionItemBaseVM` | `public DecisionItemBaseVM(KingdomDecision decision, Action onDecisionOver)` | constructor |
| `RefreshValues` | `public override void RefreshValues()` | method |
| `InitValues` | `protected virtual void InitValues()` | method |
| `ExecuteLink` | `protected void ExecuteLink(string link)` | method |
| `ExecuteShowStageTooltip` | `protected void ExecuteShowStageTooltip()` | method |
| `ExecuteHideStageTooltip` | `protected void ExecuteHideStageTooltip()` | method |
| `ExecuteFinalSelection` | `public void ExecuteFinalSelection()` | method |
| `ExecuteDone` | `protected void ExecuteDone()` | method |
| `OnFinalize` | `public override void OnFinalize()` | method |
| `SetDoneInputKey` | `public void SetDoneInputKey(InputKeyItemVM inputKeyItemVM)` | method |
| `DoneInputKey` | `public InputKeyItemVM DoneInputKey` | property |
| `EndDecisionHint` | `public HintViewModel EndDecisionHint` | property |
| `DecisionType` | `public int DecisionType` | property |
| `TotalInfluenceText` | `public string TotalInfluenceText` | property |
| `IsActive` | `public bool IsActive` | property |
| `CurrentStageIndex` | `public int CurrentStageIndex` | property |
| `IsPlayerSupporter` | `public bool IsPlayerSupporter` | property |
| `CanEndDecision` | `public bool CanEndDecision` | property |
| `IsKingsDecisionOver` | `public bool IsKingsDecisionOver` | property |
| `RelationChangeText` | `public string RelationChangeText` | property |
| `DescriptionText` | `public string DescriptionText` | property |
| `TitleText` | `public string TitleText` | property |
| `DoneText` | `public string DoneText` | property |
| `InfluenceCostText` | `public string InfluenceCostText` | property |
| `MBBindingList` | `public MBBindingList<DecisionOptionVM>DecisionOptionsList` | property |
| `DecisionTypes` | `protected enum DecisionTypes` | property |
| `DecisionTypes` | `protected enum DecisionTypes` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AcceptingCallToWarAgreementDecisionItemVM](../AcceptingCallToWarAgreementDecisionItemVM/)
- [same namespace DeclareWarDecisionItemVM](../DeclareWarDecisionItemVM/)
- [same namespace ExpelClanDecisionItemVM](../ExpelClanDecisionItemVM/)
- [same namespace KingdomPolicyDecisionItemVM](../KingdomPolicyDecisionItemVM/)
